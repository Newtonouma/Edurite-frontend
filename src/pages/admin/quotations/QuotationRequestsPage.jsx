import React, { useState } from 'react';

const initialQuotations = [
  { id: 1, client: 'Alice', features: 'POS, Inventory', status: 'Draft', date: '2025-06-01' },
  { id: 2, client: 'Bob', features: 'Booking, Reminders', status: 'Sent', date: '2025-06-10' },
];

const QuotationRequestsPage = () => {
  const [quotations, setQuotations] = useState(initialQuotations);
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (q) => { setEditing(q); setShowForm(true); };
  const handleDelete = (id) => setQuotations(quotations.filter(q => q.id !== id));
  const handleStatus = (id) => setQuotations(quotations.map(q => q.id === id ? { ...q, status: q.status === 'Draft' ? 'Sent' : 'Draft' } : q));
  const handleSave = (quotation) => {
    if (quotation.id) {
      setQuotations(quotations.map(q => q.id === quotation.id ? quotation : q));
    } else {
      setQuotations([...quotations, { ...quotation, id: Date.now() }]);
    }
    setShowForm(false); setEditing(null);
  };

  return (
    <div className="dashboard-section">
      <h2>Quotation Requests Management</h2>
      <button className="dashboard-btn" onClick={() => { setEditing(null); setShowForm(true); }}>Add Quotation</button>
      <table className="dashboard-table" style={{ marginTop: 16 }}>
        <thead>
          <tr>
            <th>Client</th><th>Requested Features</th><th>Status</th><th>Date</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {quotations.map(q => (
            <tr key={q.id}>
              <td>{q.client}</td>
              <td>{q.features}</td>
              <td>{q.status}</td>
              <td>{q.date}</td>
              <td>
                <button className="dashboard-btn" onClick={() => handleEdit(q)}>Edit</button>
                <button className="dashboard-btn" onClick={() => handleDelete(q.id)}>Delete</button>
                <button className="dashboard-btn" onClick={() => handleStatus(q.id)}>{q.status === 'Draft' ? 'Send' : 'Revert to Draft'}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Form can be implemented similarly to TestimonialForm if needed */}
      {/* {showForm && (
        <QuotationForm
          initial={editing}
          onSave={handleSave}
          onCancel={() => { setShowForm(false); setEditing(null); }}
        />
      )} */}
    </div>
  );
};

export default QuotationRequestsPage;
