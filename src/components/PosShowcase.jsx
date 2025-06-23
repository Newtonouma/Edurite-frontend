import React, { useEffect, useRef } from 'react';
import './PosShowcase.css';
import { Link } from 'react-router-dom';
import posData from '../assets/data/pos.js';
import { FaCashRegister, FaMobileAlt, FaLayerGroup, FaTabletAlt } from 'react-icons/fa';

const PosShowcase = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in-view');
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before fully visible
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
    <section className="pos-showcase-section" ref={sectionRef}>
      <h2 className="pos-showcase-heading">Grow your business with Erudite</h2>
      <div className="pos-showcase-title-row" style={{flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem'}}>
        <p className="pos-showcase-title" style={{marginBottom: 0}}>Discover our range of powerful POS systems designed for every business need.</p>
        <Link to="/softwares" className="pos-showcase-see-more-btn">See more</Link>
      </div>
      <div className="pos-cards-container">
        {posData.products.slice(-4).map((product, idx) => {
          const sw = product.software;
          const slug = sw.slug || sw.name.toLowerCase().replace(/\s+/g, '-');
          // Pick a static icon based on index for variety
          const icons = [
            <FaCashRegister size={40} color="#01bfa5" />, 
            <FaMobileAlt size={40} color="#01bfa5" />, 
            <FaLayerGroup size={40} color="#01bfa5" />, 
            <FaTabletAlt size={40} color="#01bfa5" />
          ];
          return (
            <div className="pos-card" key={sw.name}>
              <div className="pos-card-icon">{icons[idx % icons.length]}</div>
              <div className="pos-card-title">{sw.name}</div>
              <div className="pos-card-desc">{sw.tagline}</div>
              <Link className="pos-card-link" to={`/softwares/${slug}`}>
                Learn More <span className="pos-card-arrow">→</span>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PosShowcase;
