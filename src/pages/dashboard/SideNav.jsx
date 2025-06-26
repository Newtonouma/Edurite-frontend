import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './dashboard.css';

// Navigation configuration
const navLinks = [
  { id: 'overview', label: 'Overview', to: '/dashboard' },
  { id: 'subscriptions', label: 'Subscriptions', to: '/dashboard#subscriptions' },
  { id: 'payments', label: 'Payment History', to: '/dashboard#payments' },
  { id: 'methods', label: 'Payment Methods', to: '/dashboard#methods' },
];

const SideNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');

  // Update active section when hash changes
  useEffect(() => {
    const hash = location.hash.substring(1); // Remove the '#'
    if (hash && navLinks.some(link => link.id === hash)) {
      setActiveSection(hash);
    } else if (location.pathname === '/dashboard' && !location.hash) {
      setActiveSection('overview');
    }
  }, [location]);

  // Handle navigation with smooth scrolling
  const handleNavClick = (e, to) => {
    e.preventDefault();
    
    if (to.includes('#')) {
      const hash = to.split('#')[1];
      const section = document.getElementById(hash);
      
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        navigate(to, { replace: true });
      } else {
        // Fallback if element not found
        navigate(to);
      }
    } else {
      navigate(to);
    }
  };

  // Highlight the section when it comes into view
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.filter(link => link.id !== 'overview');
      const scrollPosition = window.scrollY + 100; // Adding offset
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="dashboard-sidenav">
      <ul>
        {navLinks.map(link => {
          const isActive = activeSection === link.id;
          return (
            <li key={link.id}>
              <a
                href={link.to}
                className={isActive ? 'active' : ''}
                onClick={(e) => handleNavClick(e, link.to)}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
                {isActive && <span className="active-indicator" />}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideNav;