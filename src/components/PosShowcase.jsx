import React, { useEffect, useRef } from 'react';
import './PosShowcase.css';
import { FaCashRegister, FaMobileAlt, FaLayerGroup, FaTabletAlt } from 'react-icons/fa';

const posSystems = [
  {
    title: 'Erudite Touch POS',
    description: 'A modern touchscreen POS system for fast, intuitive sales and inventory management. Perfect for retail and hospitality.',
    icon: <FaCashRegister size={36} color="#01574C" />,
    link: '#',
  },
  {
    title: 'Erudite Mobile POS',
    description: 'Portable POS for on-the-go businesses. Accept payments, manage stock, and print receipts anywhere.',
    icon: <FaMobileAlt size={36} color="#01574C" />,
    link: '#',
  },
  {
    title: 'Erudite All-in-One',
    description: 'Integrated POS hardware and software for seamless checkout, analytics, and customer engagement.',
    icon: <FaLayerGroup size={36} color="#01574C" />,
    link: '#',
  },
  {
    title: 'Erudite Tablet POS',
    description: 'Flexible tablet-based POS for pop-up shops, events, and modern retail environments. Lightweight, powerful, and easy to use.',
    icon: <FaTabletAlt size={36} color="#01574C" />,
    link: '#',
  },
];

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
      <p className="pos-showcase-title">Discover our range of powerful POS systems designed for every business need.</p>
      <div className="pos-cards-container">
        {posSystems.map((pos, idx) => (
          <div className="pos-card" key={idx}>
            <div className="pos-card-icon">{pos.icon}</div>
            <div className="pos-card-title">{pos.title}</div>
            <div className="pos-card-desc">{pos.description}</div>
            <a className="pos-card-link" href={pos.link}>
              Learn More <span className="pos-card-arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PosShowcase;
