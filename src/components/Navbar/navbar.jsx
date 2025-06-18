import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    // Prevent background scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const Backdrop = () => (
    <div
      className={`navbar-backdrop${isMobileMenuOpen ? ' active' : ''}`}
      onClick={closeMobileMenu}
      aria-hidden="true"
    />
  );

  const navLinks = [
    { to: '/features', label: 'Features' },
    { to: '/solutions', label: 'Solutions' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/resources', label: 'Resources' },
  ];

  return (
    <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Erudite</span>
          <span className="logo-highlight">POS</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={location.pathname === link.to ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="navbar-cta">
          <Link to="/demo" className="cta-secondary">
            <FaUser className="icon-sm" /> Demo
          </Link>
          <Link to="/order" className="cta-primary">
            <FaShoppingCart className="icon-sm" /> Order Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`menu-icon${isMobileMenuOpen ? ' hidden' : ''}`}><FaBars /></span>
          <span className={`close-icon${isMobileMenuOpen ? '' : ' hidden'}`}><FaTimes /></span>
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && <Backdrop />}

      {/* Mobile Menu */}
      <div
        className={`mobile-menu${isMobileMenuOpen ? ' active' : ''}`}
        id="mobile-menu"
        role="menu"
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className="mobile-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={closeMobileMenu}
                className={location.pathname === link.to ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-cta">
          <Link to="/demo" className="cta-secondary" onClick={closeMobileMenu}>
            <FaUser className="icon-sm" /> Request Demo
          </Link>
          <Link to="/order" className="cta-primary" onClick={closeMobileMenu}>
            <FaShoppingCart className="icon-sm" /> Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;