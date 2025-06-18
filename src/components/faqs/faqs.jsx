import React, { useState } from 'react';
import './faqs.css'; // We'll create this CSS file next
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQsSection = () => {
  const faqs = [
    {
      question: "How difficult is it to switch from my current POS system?",
      answer: "Erudite POS offers seamless migration tools and dedicated support to make your transition smooth. Most customers report being fully operational within 1 business day."
    },
    {
      question: "Can Erudite POS handle inventory management for my retail store?",
      answer: "Yes! Our real-time inventory tracking helps you monitor stock levels, set automatic reorder points, and generate detailed reports - just like Priya R. uses for her grocery store."
    },
    {
      question: "Is there training available for my staff?",
      answer: "Absolutely. We provide onboarding sessions, video tutorials, and 24/7 support. As Sarah M. mentioned, most staff learn the system within a day thanks to our intuitive interface."
    },
    {
      question: "What kind of analytics does the system provide?",
      answer: "You'll get sales trends, product performance, staff productivity reports, and customer purchasing patterns - the same analytics James K. found game-changing for his cafe."
    },
    {
      question: "Does it work offline?",
      answer: "Yes, Erudite POS continues processing transactions during internet outages and syncs automatically when connectivity is restored."
    },
    {
      question: "Can I use this for multiple business locations?",
      answer: "Our multi-location dashboard gives you centralized control while allowing location-specific settings - perfect for chains like David L.'s hotel management needs."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs-section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faqs-grid">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={index}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                {activeIndex === index ? <FiMinus /> : <FiPlus />}
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;