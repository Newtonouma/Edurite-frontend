import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './aurth.css';

const OTP_RESEND_LIMIT = 4;
const OTP_RESEND_WINDOW_MS = 60 * 60 * 1000; // 1 hour

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [resendCount, setResendCount] = useState(0);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [resendWindowEnd, setResendWindowEnd] = useState(null);
  const [resendMessage, setResendMessage] = useState('');
  const [cooldown, setCooldown] = useState(0);
  const navigate = useNavigate();

  // Load resend state from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('otpResendData') || '{}');
    if (data && data.startTime && data.count !== undefined) {
      const now = Date.now();
      if (now - data.startTime < OTP_RESEND_WINDOW_MS) {
        setResendCount(data.count);
        setResendWindowEnd(data.startTime + OTP_RESEND_WINDOW_MS);
        if (data.count >= OTP_RESEND_LIMIT) {
          setResendDisabled(true);
          setCooldown(Math.ceil((data.startTime + OTP_RESEND_WINDOW_MS - now) / 1000));
        }
      } else {
        // Reset window
        localStorage.removeItem('otpResendData');
      }
    }
  }, []);

  // Cooldown timer for resend
  useEffect(() => {
    if (resendDisabled && resendWindowEnd) {
      const interval = setInterval(() => {
        const now = Date.now();
        const secondsLeft = Math.max(0, Math.ceil((resendWindowEnd - now) / 1000));
        setCooldown(secondsLeft);
        if (secondsLeft <= 0) {
          setResendDisabled(false);
          setResendCount(0);
          setResendWindowEnd(null);
          setResendMessage('');
          localStorage.removeItem('otpResendData');
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [resendDisabled, resendWindowEnd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!otp.trim()) {
      setError('Please enter the OTP code sent to you.');
      return;
    }
    setSubmitting(true);
    // Simulate backend verification
    setTimeout(() => {
      // Simulate success
      sessionStorage.removeItem('pendingUserId');
      localStorage.removeItem('otpResendData');
      navigate('/dashboard');
    }, 1200);
  };

  const handleResend = () => {
    if (resendDisabled) return;
    let data = JSON.parse(localStorage.getItem('otpResendData') || '{}');
    const now = Date.now();
    if (!data.startTime || now - data.startTime > OTP_RESEND_WINDOW_MS) {
      // New window
      data = { startTime: now, count: 1 };
    } else {
      data.count = (data.count || 0) + 1;
    }
    localStorage.setItem('otpResendData', JSON.stringify(data));
    setResendCount(data.count);
    setResendWindowEnd(data.startTime + OTP_RESEND_WINDOW_MS);
    setResendMessage('A new OTP has been sent.');
    if (data.count >= OTP_RESEND_LIMIT) {
      setResendDisabled(true);
      setCooldown(Math.ceil((data.startTime + OTP_RESEND_WINDOW_MS - now) / 1000));
    }
    // Simulate sending OTP (show message for 2s)
    setTimeout(() => setResendMessage(''), 2000);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h2>Verify Your Account</h2>
          <p>Enter the OTP code sent to your email or phone to complete registration.</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="otp">OTP Code</label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={e => setOtp(e.target.value)}
              required
              maxLength={8}
              autoFocus
            />
            {error && <span className="error-message">{error}</span>}
          </div>
          <div className="otp-resend-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <button
              type="button"
              className="otp-resend-link"
              onClick={handleResend}
              disabled={resendDisabled}
              style={{
                background: 'none',
                border: 'none',
                color: resendDisabled ? '#aaa' : '#01bfa5',
                textDecoration: 'none', 
                cursor: resendDisabled ? 'not-allowed' : 'pointer',
                fontWeight: 600,
                fontSize: '1rem',
                padding: 0,
              }}
            >
              Resend OTP
            </button>
            <span style={{ fontSize: '0.95rem', color: resendDisabled ? '#d32f2f' : '#01574C', marginLeft: '1rem' }}>
              {resendDisabled
                ? `Resend limit reached. Try again in ${Math.floor(cooldown / 60)}:${('0' + (cooldown % 60)).slice(-2)} min`
                : `${OTP_RESEND_LIMIT - resendCount} resend${OTP_RESEND_LIMIT - resendCount === 1 ? '' : 's'} left`}
            </span>
          </div>
          {resendMessage && <div className="otp-resend-message" style={{ color: '#388e3c', marginBottom: '0.5rem', fontWeight: 500 }}>{resendMessage}</div>}
          <button type="submit" className="auth-btn primary" disabled={submitting}>
            {submitting ? 'Verifying...' : 'Verify'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
