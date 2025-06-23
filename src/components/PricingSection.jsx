import React from 'react';
import './PricingSection.css';
import { FaRocket, FaStar, FaCrown, FaCheck } from 'react-icons/fa';
import posData from '../assets/data/pos.js';

const icons = [
  <FaRocket className="pricing-card-icon" />,
  <FaStar className="pricing-card-icon" />,
  <FaCrown className="pricing-card-icon" />,
];

// Use the first product's pricing for demonstration (can be extended to show more products)
const product = posData.products[0].software;
const plans = product.pricing.map((plan, idx) => ({
  name: plan.plan,
  icon: icons[idx % icons.length],
  price: plan.price,
  period: '',
  features: [
    ...plan.coreFunctionality,
    ...Object.entries(plan.keyFeaturesIncluded || {}).filter(
      ([k, v]) => v && v !== 'X'
    ).map(([k, v]) => `${k}: ${v}`),
    plan.dedicatedSupport ? `Support: ${plan.dedicatedSupport}` : null,
    plan.paymentAndSubscriptionManagementPortal
      ? `Portal: ${plan.paymentAndSubscriptionManagementPortal}`
      : null,
    plan.paymentOptions ? `Payment: ${plan.paymentOptions.join(', ')}` : null,
  ].filter(Boolean),
  highlight: idx === 1, // highlight the second plan for visual effect
}));

const PricingSection = () => (
  <section className="pricing-section">
    <h2 className="pricing-title">Simple, Transparent Pricing</h2>
    <div className="pricing-cards-container">
      {plans.map((plan, idx) => (
        <div
          className={`pricing-card${
            plan.highlight ? ' highlight' : ''
          }`}
          key={idx}
        >
          <div className="pricing-card-header-row">
            {plan.icon}
            <div className="pricing-card-header">{plan.name}</div>
          </div>
          <hr className="pricing-card-divider" />
          <div className="pricing-card-price">
            <span className="pricing-amount">{plan.price}</span>
            <span className="pricing-period">{plan.period}</span>
          </div>
          <ul className="pricing-features">
            {plan.features.map((feature, i) => (
              <li key={i}>
                <span className="pricing-feature-tick">
                  <FaCheck />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <button className="pricing-btn">Choose {plan.name}</button>
        </div>
      ))}
    </div>
  </section>
);

export default PricingSection;
