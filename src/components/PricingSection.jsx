import React from 'react';
import './PricingSection.css';
import { FaRocket, FaStar, FaCrown, FaCheck } from 'react-icons/fa';

const plans = [
  {
    name: 'Starter',
    icon: <FaRocket className="pricing-card-icon" />,
    price: '$19',
    period: '/mo',
    features: [
      'Basic POS features',
      'Single device',
      'Email support',
      'Basic analytics',
    ],
    highlight: false,
  },
  {
    name: 'Standard',
    icon: <FaStar className="pricing-card-icon" />,
    price: '$39',
    period: '/mo',
    features: [
      'All Starter features',
      'Multi-device support',
      'Priority email support',
      'Advanced analytics',
    ],
    highlight: true,
  },
  {
    name: 'Professional',
    icon: <FaCrown className="pricing-card-icon" />,
    price: '$69',
    period: '/mo',
    features: [
      'All Standard features',
      'Custom integrations',
      'Phone & chat support',
      'Full reporting suite',
    ],
    highlight: false,
  },
];

const PricingSection = () => (
  <section className="pricing-section">
    <h2 className="pricing-title">Simple, Transparent Pricing</h2>
    <div className="pricing-cards-container">
      {plans.map((plan, idx) => (
        <div className={`pricing-card${plan.highlight ? ' highlight' : ''}`} key={idx}>
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
                <span className="pricing-feature-tick"><FaCheck /></span>
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
