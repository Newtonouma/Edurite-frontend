import React, { useState, useRef, useEffect } from 'react';
import './navbar.css';

// Lucide React icons (you can replace these with your preferred icons)
const LayoutDashboardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="9"/>
    <rect x="14" y="3" width="7" height="5"/>
    <rect x="14" y="12" width="7" height="9"/>
    <rect x="3" y="16" width="7" height="5"/>
  </svg>
);

const CreditCardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);

const PackageIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);

const UsersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const BarChartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="20" x2="12" y2="10"/>
    <line x1="18" y1="20" x2="18" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="16"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const HelpCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <point x="12" y="17"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6,9 12,15 18,9"/>
  </svg>
);

const features = [
  {
    title: "Point of Sale",
    href: "/features/pos",
    description: "Fast, intuitive checkout system with multiple payment options",
  },
  {
    title: "Inventory Management",
    href: "/features/inventory",
    description: "Real-time tracking and automated stock alerts",
  },
  {
    title: "Customer Management",
    href: "/features/customers",
    description: "Build customer profiles and loyalty programs",
  },
  {
    title: "Reporting & Analytics",
    href: "/features/analytics",
    description: "Powerful insights to grow your business",
  },
  {
    title: "Employee Management",
    href: "/features/employees",
    description: "Track shifts, permissions, and performance",
  },
  {
    title: "Multi-Location",
    href: "/features/multi-location",
    description: "Manage multiple stores from one dashboard",
  },
];




const NavigationDropdown = ({ trigger, children, isOpen, onToggle }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onToggle(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <div className="nav-dropdown" ref={dropdownRef}>
      <button 
        className={`nav-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => onToggle(!isOpen)}
        aria-expanded={isOpen}
      >
        {trigger}
        <ChevronDownIcon />
      </button>
      {isOpen && (
        <div className="nav-dropdown-content">
          {children}
        </div>
      )}
    </div>
  );
};

const ListItem = ({ title, children, href }) => {
  return (
    <li className="list-item">
      <a href={href} className="list-item-link">
        <div className="list-item-title">{title}</div>
        <p className="list-item-description">{children}</p>
      </a>
    </li>
  );
};

function MainNavigation() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (dropdownName, isOpen) => {
    setOpenDropdown(isOpen ? dropdownName : null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="main-navigation">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <a href="/">
            <img className='logo-image' src="/logo.jpg" alt="Erudite-logo" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        {/* Navigation Links - Middle */}
        <div className={`nav-links-container ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link">
                <span className="nav-link-text">Home</span>
                <span className="nav-link-highlight"></span>
              </a>
            </li>

            <li className="nav-item">
              <NavigationDropdown
                trigger="Features"
                isOpen={openDropdown === 'features'}
                onToggle={(isOpen) => handleDropdownToggle('features', isOpen)}
              >
                <div className="dropdown-header">
                  <h3 className="dropdown-title">Features</h3>
                  <p className="dropdown-subtitle">Everything you need to run your business</p>
                </div>
                <ul className="features-grid">
                  {features.map((feature) => (
                    <ListItem
                      key={feature.title}
                      title={feature.title}
                      href={feature.href}
                    >
                      {feature.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationDropdown>
            </li>

            <li className="nav-item">
              <NavigationDropdown
                trigger="Solutions"
                isOpen={openDropdown === 'solutions'}
                onToggle={(isOpen) => handleDropdownToggle('solutions', isOpen)}
              >
                <div className="dropdown-header">
                  <h3 className="dropdown-title">Solutions</h3>
                  <p className="dropdown-subtitle">Tailored for your business type</p>
                </div>
                <ul className="solutions-list">
                  <li className="solution-item">
                    <a href="/solutions/retail" className="solution-link">
                      <div className="solution-icon">
                        <PackageIcon />
                      </div>
                      <div className="solution-content">
                        <div className="solution-title">Retail Stores</div>
                        <p className="solution-description">Complete POS for retail businesses</p>
                      </div>
                    </a>
                  </li>
                  <li className="solution-item">
                    <a href="/solutions/restaurants" className="solution-link">
                      <div className="solution-icon">
                        <CreditCardIcon />
                      </div>
                      <div className="solution-content">
                        <div className="solution-title">Restaurants</div>
                        <p className="solution-description">Specialized for food service</p>
                      </div>
                    </a>
                  </li>
                  <li className="solution-item">
                    <a href="/solutions/services" className="solution-link">
                      <div className="solution-icon">
                        <UsersIcon />
                      </div>
                      <div className="solution-content">
                        <div className="solution-title">Service Businesses</div>
                        <p className="solution-description">Perfect for salons, spas, and more</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </NavigationDropdown>
            </li>

            <li className="nav-item">
              <a href="/pricing" className="nav-link">
                <span className="nav-link-text">Pricing</span>
                <span className="nav-link-highlight"></span>
              </a>
            </li>

            <li className="nav-item">
              <NavigationDropdown
                trigger="Resources"
                isOpen={openDropdown === 'resources'}
                onToggle={(isOpen) => handleDropdownToggle('resources', isOpen)}
              >
                <div className="dropdown-header">
                  <h3 className="dropdown-title">Resources</h3>
                  <p className="dropdown-subtitle">Learn and get support</p>
                </div>
                <ul className="resources-list">
                  <li className="resource-item">
                    <a href="/resources/docs" className="resource-link">
                      <div className="resource-icon">
                        <HelpCircleIcon />
                      </div>
                      <div className="resource-content">
                        <div className="resource-title">Documentation</div>
                        <p className="resource-description">Setup guides and tutorials</p>
                      </div>
                    </a>
                  </li>
                  <li className="resource-item">
                    <a href="/resources/blog" className="resource-link">
                      <div className="resource-icon">
                        <BarChartIcon />
                      </div>
                      <div className="resource-content">
                        <div className="resource-title">Blog</div>
                        <p className="resource-description">Tips for growing your business</p>
                      </div>
                    </a>
                  </li>
                  <li className="resource-item">
                    <a href="/resources/support" className="resource-link">
                      <div className="resource-icon">
                        <SettingsIcon />
                      </div>
                      <div className="resource-content">
                        <div className="resource-title">Support</div>
                        <p className="resource-description">Get help when you need it</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </NavigationDropdown>
            </li>

            <li className="nav-item">
              <a href="/contact" className="nav-link">
                <span className="nav-link-text">Contact</span>
                <span className="nav-link-highlight"></span>
              </a>
            </li>
          </ul>
        </div>

        {/* Login Button - Right */}
        <div className="nav-auth">
          <a href="/login" className="login-button">
            Login
          </a>
          <a href="/signup" className="signup-button">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default MainNavigation;
