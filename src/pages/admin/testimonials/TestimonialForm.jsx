import React, { useState } from 'react';

const TestimonialForm = ({ initial, onSave, onCancel }) => {
  const [client, setClient] = useState(initial?.client || '');
  const [quote, setQuote] = useState(initial?.quote || '');
  const [image, setImage] = useState(initial?.image || '');
  const [caseStudy, setCaseStudy] = useState(initial?.caseStudy || '');

  const handleSubmit = e => {
    e.preventDefault();
    onSave({ ...initial, client, quote, image, caseStudy });
  };

  return (
    <div className="dashboard-section" style={{ maxWidth: 500, margin: '2rem auto' }}>
      <h3>{initial ? 'Edit' : 'Add'} Testimonial</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Client Name</label>
          <input className="dashboard-input" value={client} onChange={e => setClient(e.target.value)} required />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Quote</label>
          <textarea className="dashboard-input" value={quote} onChange={e => setQuote(e.target.value)} required />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Image URL</label>
          <input className="dashboard-input" value={image} onChange={e => setImage(e.target.value)} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Case Study Link</label>
          <input className="dashboard-input" value={caseStudy} onChange={e => setCaseStudy(e.target.value)} />
        </div>
        <button className="dashboard-btn" type="submit">Save</button>
        <button className="dashboard-btn" type="button" onClick={onCancel} style={{ marginLeft: 8 }}>Cancel</button>
      </form>
    </div>
  );
};

export default TestimonialForm;
