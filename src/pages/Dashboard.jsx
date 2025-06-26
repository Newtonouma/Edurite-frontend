import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard/dashboard.css';
import SubscriptionTable from './dashboard/SubscriptionTable';
import PaymentHistoryTable from './dashboard/PaymentHistoryTable';
import PaymentMethods from './dashboard/PaymentMethods';
import SubscriptionActions from './dashboard/SubscriptionActions';
import NotificationBanner from './dashboard/NotificationBanner';

// Navigation configuration
const navSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'subscriptions', label: 'Subscriptions' },
  { id: 'payments', label: 'Payment History' },
  { id: 'methods', label: 'Payment Methods' },
];

const SideNav = ({ activeSection, setActiveSection }) => {
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    // Update URL without page reload
    navigate(`/dashboard${sectionId === 'overview' ? '' : `#${sectionId}`}`, { replace: true });
  };

  return (
    <nav className="dashboard-sidenav">
      <ul>
        {navSections.map(section => {
          const isActive = activeSection === section.id;
          return (
            <li key={section.id}>
              <button
                className={`nav-button ${isActive ? 'active' : ''}`}
                onClick={() => handleNavClick(section.id)}
                aria-current={isActive ? 'page' : undefined}
              >
                {section.label}
                {isActive && <span className="active-indicator" />}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const mockSubscriptions = [
  { id: 1, plan: 'Pro', status: 'Active', renewalDate: '2025-07-01', onRenew: () => {}, onUpgrade: () => {} },
  { id: 2, plan: 'Basic', status: 'Expired', renewalDate: '2024-06-01', onRenew: () => {}, onUpgrade: () => {} },
];
const mockPayments = [
  { id: 1, invoice: 'INV-001', date: '2025-06-01', amount: 49.99, status: 'Paid' },
  { id: 2, invoice: 'INV-002', date: '2025-05-01', amount: 49.99, status: 'Paid' },
];
const mockMethods = [
  { id: 1, brand: 'Visa', last4: '4242' },
  { id: 2, brand: 'Mastercard', last4: '1234' },
];

// Main dashboard component that uses the SideNav
const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [subscriptions, setSubscriptions] = useState(mockSubscriptions);
  const [payments] = useState(mockPayments);
  const [methods, setMethods] = useState(mockMethods);
  const [notification, setNotification] = useState(null);

  // Handlers (replace with real API logic)
  const handleRenew = (id) => setNotification({ message: 'Renewal initiated.', type: 'info' });
  const handleUpgrade = (id) => setNotification({ message: 'Upgrade initiated.', type: 'info' });
  const handleAddCard = () => setNotification({ message: 'Add card (Stripe/PayPal modal here).', type: 'info' });
  const handleRemoveCard = (id) => setMethods(methods.filter(m => m.id !== id));

  return (
    <div className="dashboard-container">
      <SideNav activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="dashboard-content">
        {notification && <NotificationBanner message={notification.message} type={notification.type} />}
        {activeSection === 'overview' && (
          <div className="dashboard-section">
            <h2 style={{ color: '#01574C', fontWeight: 700 }}>Welcome to your Dashboard</h2>
            <p style={{ color: '#01574C', fontWeight: 500 }}>Manage your subscriptions, payments, and account settings here.</p>
          </div>
        )}
        {activeSection === 'subscriptions' && (
          <>
            <SubscriptionTable subscriptions={subscriptions.map(s => ({ ...s, onRenew: handleRenew, onUpgrade: handleUpgrade }))} />
            <SubscriptionActions onRenew={() => handleRenew(1)} onUpgrade={() => handleUpgrade(1)} />
          </>
        )}
        {activeSection === 'payments' && <PaymentHistoryTable payments={payments} />}
        {activeSection === 'methods' && <PaymentMethods methods={methods} onAdd={handleAddCard} onRemove={handleRemoveCard} />}
      </div>
    </div>
  );
};

export default Dashboard;