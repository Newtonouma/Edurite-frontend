import React from 'react';

const PaymentHistoryTable = ({ payments = [] }) => (
  <div className="dashboard-section" id="payments">
    <h3>Payment History</h3>
    {payments.length === 0 ? (
      <div>No payment history found.</div>
    ) : (
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Invoice</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.id}>
              <td>{payment.invoice}</td>
              <td>{payment.date}</td>
              <td>${payment.amount.toFixed(2)}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

export default PaymentHistoryTable;
