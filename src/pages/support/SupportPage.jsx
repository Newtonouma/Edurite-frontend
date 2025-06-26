import React, { useState } from 'react';
import './SupportPage.css';
import supportFaqs from '../../assets/data/supportFaqs.json';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const SupportPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <div className="support-page-section">
      <h1 className="support-page-title">Connect with Our Team</h1>
      <p className="support-page-intro">Our support team is ready to help you with any questions, issues, or feedback. Reach out using the form or contact details below.</p>
      <div className="support-main-columns">
        <div className="support-form-details-row">
          <div className="support-form-col">
            <h2>Get in Touch with Us</h2>
            <form className="support-form" onSubmit={handleSubmit}>
              <label>Name
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
              </label>
              <label>Email
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </label>
              <label>Message
                <textarea name="message" value={form.message} onChange={handleChange} required />
              </label>
              <button type="submit">Send Message</button>
              {submitted && <div className="support-form-success">Thank you! We'll get back to you soon.</div>}
            </form>
          </div>
          <div className="support-contact-col">
            <h2>Contact Details</h2>
            <p>We're available by email, phone, or visit us at our Nairobi office.</p>
            <div className="support-contact-details-grid">
              <div className="support-contact-detail">
                <FaEnvelope className="support-icon" /> info@erudite.co.ke
              </div>
              <div className="support-contact-detail">
                <FaPhone className="support-icon" /> +254 700 123456
              </div>
              <div className="support-contact-detail">
                <FaMapMarkerAlt className="support-icon" /> Nairobi, Kenya
              </div>
              <div className="support-contact-detail">
                <span className="support-icon" role="img" aria-label="Website">🌐</span> www.erudite.co.ke
              </div>
            </div>
            <div className="support-social-row">
              <div className="support-social-label">Social Media:</div>
              <div className="support-social-icons">
                <a href="https://facebook.com/eruditeke" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
                <a href="https://twitter.com/eruditeke" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
                <a href="https://linkedin.com/company/eruditeke" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://instagram.com/eruditeke" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://youtube.com/@eruditeke" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="support-faq-image-row">
          <h2 className="support-faq-title">Your Common Queries Answered</h2>
          <p className="support-faq-intro">Find answers to frequently asked questions about our products and services. If you can't find what you need, reach out using the form above.</p>
          <div className="support-faq-image-cols">
            <div className="support-faq-col">
              <div className="support-faq-accordion">
                {supportFaqs.map((faq, idx) => (
                  <details key={idx} className="support-faq-item">
                    <summary>{faq.question}</summary>
                    <div>{faq.answer}</div>
                  </details>
                ))}
              </div>
            </div>
            <div className="support-faq-image-col">
              <img src="/support.jpg" alt="Support Illustration" className="support-faq-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
