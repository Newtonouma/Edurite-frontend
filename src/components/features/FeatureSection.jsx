import React, { useEffect, useRef } from 'react';
import './FeatureSection.css';

const features = [
  {
    number: 1,
    label: 'Suitable For All Types Businesses',
    desc: 'From retail to restaurants, Erudite POS adapts to any business model.'
  },
  {
    number: 2,
    label: 'Cost Effective With Affordable Price',
    desc: 'Get premium features at a price that fits your budget.'
  },
  {
    number: 3,
    label: 'Easy to Setup & No IT knowledge Need',
    desc: 'Start selling in minutes—no technical skills required.'
  },
  {
    number: 4,
    label: 'Modern & Attractive User Dashboard',
    desc: 'Enjoy a sleek, intuitive interface for daily operations.'
  },
];

const FeatureSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in-view');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    if (currentSection) {
      observer.observe(currentSection);
    }
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section className="feature-section" ref={sectionRef}>
      <div className="feature-content-wrapper">
        <div className="feature-image-col">
          <img src="/feature.jpg" alt="POS Feature" className="feature-image" />
        </div>
        <div className="feature-info-col">
          <h2 className="feature-title">Why Choose Erudite POS?</h2>
          <p className="feature-desc">
            Flexible, affordable, easy, and powerful.
          </p>
          <div className="feature-grid">
            {features.map((f, i) => (
              <div className="feature-grid-item" key={i}>
                <div className="feature-circle">{f.number}</div>
                <div className="feature-label">{f.label}</div>
                <div className="feature-desc-sm">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
