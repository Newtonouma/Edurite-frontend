import React, { useState } from 'react';
import './CtaMessageSection.css';

const CtaMessageSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="cta-message-section">
      <div className="cta-message-image-col">
        <img src="/message.jpg" alt="Contact Us" className="cta-message-image" />
      </div>
      <div className="cta-message-form-col">
        <h2 className="cta-message-title">Send Us a Message</h2>
        <p className="cta-message-desc">We'd love to hear from you! Fill out the form and our team will get back to you soon.</p>
        <form className="cta-message-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="cta-message-btn">Send Message</button>
          {submitted && <div className="cta-message-success">Message sent!</div>}
        </form>
      </div>
    </section>
  );
};

export default CtaMessageSection;
