import React from 'react';

const mockApps = [
  { id: 1, name: 'POS Pro', policy: 'Your privacy is important to us.' },
  { id: 2, name: 'Booking App', policy: 'We do not share your data.' },
];

const PrivacyPolicyEditor = () => (
  <div className="dashboard-section">
    <h2>Privacy Policy Editor</h2>
    <label>Select App:</label>
    <select className="dashboard-input" style={{ marginBottom: 12 }}>
      {mockApps.map(app => <option key={app.id}>{app.name}</option>)}
    </select>
    <label>Edit Policy:</label>
    <textarea className="dashboard-input" rows={6} defaultValue={mockApps[0].policy} />
    <button className="dashboard-btn" style={{ marginTop: 12 }}>Save Policy</button>
  </div>
);

export default PrivacyPolicyEditor;
