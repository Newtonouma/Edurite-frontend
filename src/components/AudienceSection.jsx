import React from 'react';
import './AudienceSection.css';
import { FaArrowRight } from 'react-icons/fa';

const audienceList = [
  'Retail Stores',
  'Grocery Stores',
  'Restaurants and Cafes',
  'Convenience Stores',
  'Commerce Businesses',
  'Hospitality and Hotels',
  'Salons and Spas',
  'And Many More..',
];

const AudienceSection = () => (
  <section className="audience-section">
    <div className="audience-content-wrapper">
      <div className="audience-info-col">
        <h2 className="audience-title">Who is Erudite POS for?</h2>
        <p className="audience-desc">Perfect for a wide range of businesses</p>
        <div className="audience-list-row">
          <div className="audience-list-col">
            {audienceList.slice(0, 4).map((item, idx) => (
              <div className="audience-list-item" key={idx}>
                <FaArrowRight className="audience-arrow" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="audience-list-col">
            {audienceList.slice(4).map((item, idx) => (
              <div className="audience-list-item" key={idx}>
                <FaArrowRight className="audience-arrow" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="audience-image-col">
        <img src="/audience.jpg" alt="Audience" className="audience-image" />
      </div>
    </div>
  </section>
);

export default AudienceSection;
