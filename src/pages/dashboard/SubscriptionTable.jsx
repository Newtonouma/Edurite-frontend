import React from 'react';

const SubscriptionTable = ({ subscriptions = [] }) => (
  <div className="dashboard-section" id="subscriptions">
    <h3>Subscriptions</h3>
    {subscriptions.length === 0 ? (
      <div>No subscriptions found.</div>
    ) : (
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Plan</th>
            <th>Status</th>
            <th>Renewal Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map(sub => (
            <tr key={sub.id}>
              <td>{sub.plan}</td>
              <td>{sub.status}</td>
              <td>{sub.renewalDate}</td>
              <td>
                <button className="dashboard-btn" onClick={() => sub.onRenew(sub.id)}>Renew</button>
                <button className="dashboard-btn" style={{ marginLeft: 0 }} onClick={() => sub.onUpgrade(sub.id)}>Upgrade</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

export default SubscriptionTable;
