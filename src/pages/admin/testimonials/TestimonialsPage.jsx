import React, { useState } from 'react';
import TestimonialForm from './TestimonialForm';
import posData from '../../../assets/data/pos';

const allTestimonials = posData.products.flatMap((p, i) =>
  (p.software.testimonials || []).map((t, idx) => ({
    id: `${i + 1}-${idx + 1}`,
    client: t.customerName,
    quote: t.feedback,
    published: true,
    image: (p.software.images && p.software.images[0]?.url) || '',
    caseStudy: p.software.webLink || ''
  }))
);

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState(allTestimonials);
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (t) => { setEditing(t); setShowForm(true); };
  const handleDelete = (id) => setTestimonials(testimonials.filter(t => t.id !== id));
  const handleToggle = (id) => setTestimonials(testimonials.map(t => t.id === id ? { ...t, published: !t.published } : t));
  const handleSave = (testimonial) => {
    if (testimonial.id) {
      setTestimonials(testimonials.map(t => t.id === testimonial.id ? testimonial : t));
    } else {
      setTestimonials([...testimonials, { ...testimonial, id: Date.now() }]);
    }
    setShowForm(false); setEditing(null);
  };

  return (
    <div className="dashboard-section">
      <h2>Testimonials Management</h2>
      <button className="dashboard-btn" onClick={() => { setEditing(null); setShowForm(true); }}>Add Testimonial</button>
      <table className="dashboard-table" style={{ marginTop: 16 }}>
        <thead>
          <tr>
            <th>Client</th><th>Quote</th><th>Published</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {testimonials.map(t => (
            <tr key={t.id}>
              <td>{t.client}</td>
              <td>{t.quote}</td>
              <td>{t.published ? 'Yes' : 'No'}</td>
              <td>
                <button className="dashboard-btn" onClick={() => handleEdit(t)}>Edit</button>
                <button className="dashboard-btn" onClick={() => handleDelete(t.id)}>Delete</button>
                <button className="dashboard-btn" onClick={() => handleToggle(t.id)}>{t.published ? 'Unpublish' : 'Publish'}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showForm && (
        <TestimonialForm
          initial={editing}
          onSave={handleSave}
          onCancel={() => { setShowForm(false); setEditing(null); }}
        />
      )}
    </div>
  );
};

export default TestimonialsPage;
