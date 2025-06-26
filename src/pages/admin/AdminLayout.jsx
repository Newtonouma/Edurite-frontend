import React, { useState } from 'react';
import '../dashboard/dashboard.css';
import TestimonialsPage from './testimonials/TestimonialsPage';
import ApplicationsPage from './applications/ApplicationsPage';
import PricingTablePage from './pricing/PricingTablePage';
import ReviewModerationPage from './reviews/ReviewModerationPage';
import QuotationRequestsPage from './quotations/QuotationRequestsPage';
import PrivacyPolicyEditor from './privacy/PrivacyPolicyEditor';

const adminSections = [
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'applications', label: 'Applications' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'quotations', label: 'Quotations' },
  { id: 'privacy', label: 'Privacy Policy' },
];

const AdminSideNav = ({ activeSection, setActiveSection }) => (
  <nav className="dashboard-sidenav" aria-label="Admin sections">
    <ul>
      {adminSections.map(section => {
        const isActive = activeSection === section.id;
        return (
          <li key={section.id}>
            <button
              className={`nav-button${isActive ? ' active' : ''}`}
              onClick={() => setActiveSection(section.id)}
              aria-current={isActive ? 'page' : undefined}
              aria-label={section.label}
              type="button"
            >
              {section.label}
              {isActive && <span className="active-indicator" aria-hidden="true" />}
            </button>
          </li>
        );
      })}
    </ul>
  </nav>
);

const AdminLayout = () => {
  const [activeSection, setActiveSection] = useState('testimonials');

  return (
    <div className="dashboard-container">
      <AdminSideNav activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="dashboard-content">
        {activeSection === 'testimonials' && <TestimonialsPage />}
        {activeSection === 'applications' && <ApplicationsPage />}
        {activeSection === 'pricing' && <PricingTablePage />}
        {activeSection === 'reviews' && <ReviewModerationPage />}
        {activeSection === 'quotations' && <QuotationRequestsPage />}
        {activeSection === 'privacy' && <PrivacyPolicyEditor />}
      </div>
    </div>
  );
};

export default AdminLayout;
