import React from 'react';

const SubscriptionActions = ({ onRenew, onUpgrade }) => (
  <div className="dashboard-section">
    <button className="dashboard-btn" onClick={onRenew}>Renew Subscription</button>
    <button className="dashboard-btn" onClick={onUpgrade}>Upgrade Plan</button>
  </div>
);

export default SubscriptionActions;
