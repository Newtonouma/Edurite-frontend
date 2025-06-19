import React from 'react';
import './cta.css';
import { FaShoppingCart, FaCalendarAlt } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="cta-section">
      {/* Background elements */}
      <div className="cta-background">
        <div className="cta-overlay"></div>
      </div>
      
      {/* Content container */}
      <div className="cta-content">
        <h2 className="cta-title">Ready to Transform Your Business?</h2>
        <p className="cta-text">
          Join hundreds of satisfied business owners who streamlined their operations with Erudite POS. 
          Get started today and experience the difference.
        </p>
        <div className="cta-buttons">
          <a href="/order" className="cta-btn primary">
            <FaShoppingCart className="cta-icon" /> Order Now
          </a>
          <a href="/demo" className="cta-btn secondary">
            <FaCalendarAlt className="cta-icon" /> Book Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;