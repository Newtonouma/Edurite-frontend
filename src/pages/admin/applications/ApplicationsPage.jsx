import React from 'react';
import posData from '../../../assets/data/pos';

const apps = posData.products.map((p, i) => ({
  id: i + 1,
  name: p.software.name,
  description: p.software.tagline,
  status: 'Active',
  features: p.software.features.slice(0, 4),
  playLink: p.software.playstoreLink,
  webLink: p.software.webLink,
  apk: p.software.apkLink
}));

const ApplicationsPage = () => (
  <div className="dashboard-section">
    <h2>Applications Management</h2>
    <table className="dashboard-table">
      <thead>
        <tr>
          <th>Name</th><th>Description</th><th>Status</th><th>Features</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {apps.map(app => (
          <tr key={app.id}>
            <td>{app.name}</td>
            <td>{app.description}</td>
            <td>{app.status}</td>
            <td>{app.features.join(', ')}</td>
            <td>
              <a className="dashboard-btn" href={app.playLink} target="_blank" rel="noopener noreferrer">Play Store</a>
              <a className="dashboard-btn" href={app.webLink} target="_blank" rel="noopener noreferrer">Web</a>
              <a className="dashboard-btn" href={app.apk} target="_blank" rel="noopener noreferrer">APK</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ApplicationsPage;
