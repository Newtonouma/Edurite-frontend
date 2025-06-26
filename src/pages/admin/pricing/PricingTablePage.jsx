import React from 'react';
import posData from '../../../assets/data/pos';

// Flatten all pricing plans from all products
const allTiers = posData.products.flatMap((p, i) =>
  p.software.pricing.map((plan, idx) => ({
    id: `${i + 1}-${idx + 1}`,
    product: p.software.name,
    title: plan.plan,
    price: plan.price,
    features: plan.coreFunctionality,
  }))
);

const PricingTablePage = () => (
  <div className="dashboard-section">
    <h2>Pricing Table Management</h2>
    <table className="dashboard-table">
      <thead>
        <tr>
          <th>Product</th><th>Tier</th><th>Price</th><th>Features</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {allTiers.map(tier => (
          <tr key={tier.id}>
            <td>{tier.product}</td>
            <td>{tier.title}</td>
            <td>{tier.price}</td>
            <td>{tier.features.join(', ')}</td>
            <td>
              <button className="dashboard-btn">Edit</button>
              <button className="dashboard-btn">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PricingTablePage;
