import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './aurth.css';

const OTP_RESEND_LIMIT = 4;
const OTP_RESEND_WINDOW_MS = 60 * 60 * 1000; // 1 hour

const OtpVerification = () => {
  const { userId } = useParams();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [resendCount, setResendCount] = useState(0);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [resendWindowEnd, setResendWindowEnd] = useState(null);
  const [resendMessage, setResendMessage] = useState('');
  const [cooldown, setCooldown] = useState(0);
  
  const { verifyOtp, resendOtp } = useAuth();
  const navigate = useNavigate();

  // Check if user has pending verification
  useEffect(() => {
    if (!userId) {
      navigate('/signup');
    }
  }, [navigate, userId]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!otp.trim()) {
      setError('Please enter the OTP code');
      return;
    }

    if (otp.length !== 6) {
      setError('OTP must be 6 digits');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const result = await verifyOtp({
        userId: userId,
        otp: otp.trim()
      });

      if (result.success) {
        // Clear pending user data
        localStorage.removeItem('otpResendData');
        
        // Redirect to dashboard
        navigate('/dashboard');
      } else {
        setError(result.error || 'Invalid OTP code. Please try again.');
      }
    } catch {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleResend = async () => {
    if (resendDisabled) return;

    try {
      const result = await resendOtp(userId);

      if (result.success) {
        const newCount = resendCount + 1;
        setResendCount(newCount);
        setResendMessage('OTP code has been resent to your email.');

        // Update localStorage
        const now = Date.now();
        const resendData = {
          count: newCount,
          startTime: resendWindowEnd || now
        };
        localStorage.setItem('otpResendData', JSON.stringify(resendData));

        if (newCount >= OTP_RESEND_LIMIT) {
          setResendDisabled(true);
          setResendWindowEnd(resendData.startTime + OTP_RESEND_WINDOW_MS);
          setCooldown(Math.ceil(OTP_RESEND_WINDOW_MS / 1000));
          setResendMessage(`Maximum resend limit reached. Please wait ${Math.ceil(OTP_RESEND_WINDOW_MS / 60000)} minutes before trying again.`);
        }

        // Clear success message after 3 seconds
        if (newCount < OTP_RESEND_LIMIT) {
          setTimeout(() => setResendMessage(''), 3000);
        }
      } else {
        setError(result.error || 'Failed to resend OTP. Please try again.');
      }
    } catch {
      setError('Failed to resend OTP. Please try again.');
    }
  };

  // Add this function to call /otp/get_regenerate/:id and log the payload
  const handleRegenerateOtp = async () => {
    if (!userId) {
      setError('No user ID found for OTP regeneration.');
      return;
    }
    const url = `https://50ce-102-210-40-226.ngrok-free.app/otp/get_regenerate/${userId}`;
    const payload = { userId: userId };
    try {
      console.log('[OTP Regenerate] Sending payload:', payload);
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      console.log('[OTP Regenerate] API response:', data);
      if (res.ok) {
        setResendMessage('OTP has been regenerated and sent.');
      } else {
        setError(data.message || 'Failed to regenerate OTP.');
      }
    } catch (err) {
      setError('Network or server error.');
      console.error('[OTP Regenerate] Network/server error:', err);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h2>Verify Your Email</h2>
          <p>We've sent a 6-digit verification code to your email address</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="otp">Verification Code</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value.replace(/\D/g, '').slice(0, 6));
                if (error) setError('');
              }}
              placeholder="000000"
              maxLength="6"
              className={`otp-input ${error ? 'error' : ''}`}
              style={{
                textAlign: 'center',
                fontSize: '24px',
                letterSpacing: '8px',
                fontFamily: 'monospace'
              }}
              required
            />
            {error && <span className="error-message">{error}</span>}
          </div>

          <button 
            type="submit" 
            className="auth-btn primary"
            disabled={submitting}
          >
            {submitting ? 'Verifying...' : 'Verify Email'}
          </button>
        </form>

        <div className="resend-section">
          {resendMessage && (
            <div className={`resend-message ${resendDisabled ? 'error' : 'success'}`}>
              {resendMessage}
            </div>
          )}
          <button type="button" className="resend-btn" onClick={handleRegenerateOtp} style={{marginTop: 10}}>
            Regenerate OTP (log payload)
          </button>
          {resendDisabled ? (
            <p className="resend-info">
              Try again in {formatTime(cooldown)}
            </p>
          ) : (
            <div className="resend-info">
              <p>Didn't receive the code?</p>
              <button 
                type="button" 
                className="resend-btn"
                onClick={handleResend}
              >
                Resend Code {resendCount > 0 && `(${resendCount}/${OTP_RESEND_LIMIT})`}
              </button>
            </div>
          )}
        </div>

        <div className="auth-footer">
          <p>
            Wrong email? 
            <button 
              type="button"
              className="link-btn"
              onClick={() => {
                navigate('/signup');
              }}
            >
              Go back to signup
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
