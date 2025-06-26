import React from 'react';

const PaymentMethods = ({ methods, onAdd, onRemove }) => (
  <div className="dashboard-section">
    <h3>Payment Methods</h3>
    <ul className="dashboard-methods-list">
      {methods.length === 0 ? (
        <li>No payment methods saved.</li>
      ) : (
        methods.map(m => (
          <li key={m.id} className="dashboard-method-item">
            <span>{m.brand} **** **** **** {m.last4}</span>
            <button className="dashboard-btn" onClick={() => onRemove(m.id)}>Remove</button>
          </li>
        ))
      )}
    </ul>
    <button className="dashboard-btn" onClick={onAdd}>Add New Card</button>
  </div>
);

export default PaymentMethods;
