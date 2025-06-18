import React, { useState } from 'react';
import './Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Erudite POS</h3>
            <p>Modern, flexible, and affordable POS for every business.</p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <p><FaMapMarkerAlt /> Nairobi, Kenya</p>
            <p><FaPhoneAlt /> +254 700 000 000</p>
            <p><FaEnvelope /> info@erudite.com</p>
          </div>
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul className="footer-services">
              <li>Retail POS</li>
              <li>Restaurant POS</li>
              <li>Inventory Management</li>
              <li>Analytics & Reporting</li>
              <li>Cloud Backup</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Send a Message</h4>
            <form onSubmit={handleSubmit} className="footer-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="form-submit">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
           <p>© {new Date().getFullYear()} Erudite POS. All rights reserved.</p>
           <p>Built and Maintained by Arieri's World</p>
              <p>Privacy Policy | Terms of Service</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;