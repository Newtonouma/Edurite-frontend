import React from 'react';

const NotificationBanner = ({ message, type }) => (
  <div className={`dashboard-notification dashboard-notification-${type || 'info'}`}>{message}</div>
);

export default NotificationBanner;
