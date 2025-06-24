import React from 'react';
import './cta.css';
import { FaCalendarAlt } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-background">
        <div className="cta-overlay"></div>
      </div>
      
      <div className="cta-content">
        <h2 className="cta-title">Ready to Transform Your Business?</h2>
        <p className="cta-text">
          Join hundreds of satisfied business owners who streamlined their operations with Erudite POS. 
          Get started today and experience the difference.
        </p>
        <div className="cta-buttons">
          <a href="/demo" className="cta-btn secondary">
            <FaCalendarAlt className="cta-icon" /> Book Demo
          </a>
          <a href="/quotation" className="cta-btn tertiary">
            Get a Quotation
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;