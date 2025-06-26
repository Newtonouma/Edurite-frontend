import React from 'react';
import posData from '../../../assets/data/pos';

// Use testimonials as reviews for demo purposes
const mockReviews = posData.products.flatMap((p, i) =>
  (p.software.testimonials || []).map((t, idx) => ({
    id: `${i + 1}-${idx + 1}`,
    app: p.software.name,
    rating: t.rating,
    comment: t.feedback,
    status: t.rating >= 4 ? 'Approved' : 'Pending',
  }))
);

const ReviewModerationPage = () => (
  <div className="dashboard-section">
    <h2>Review Moderation</h2>
    <table className="dashboard-table">
      <thead>
        <tr>
          <th>App</th><th>Rating</th><th>Comment</th><th>Status</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {mockReviews.map(r => (
          <tr key={r.id}>
            <td>{r.app}</td>
            <td>{r.rating}</td>
            <td>{r.comment}</td>
            <td>{r.status}</td>
            <td>
              <button className="dashboard-btn">Approve</button>
              <button className="dashboard-btn">Reject</button>
              <button className="dashboard-btn">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ReviewModerationPage;
