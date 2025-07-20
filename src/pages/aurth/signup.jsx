import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './aurth.css';

const Signup = () => {
  const [form, setForm] = useState({
    first_name: '',
    second_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!form.first_name.trim()) errs.first_name = 'First name is required';
    if (!form.last_name.trim()) errs.last_name = 'Last name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Email is invalid';
    }
    if (!form.password) {
      errs.password = 'Password is required';
    } else if (form.password.length < 8) {
      errs.password = 'Password must be at least 8 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    try {
      // Only include phone_number if not empty
      const payload = {
        first_name: form.first_name.trim(),
        second_name: form.second_name.trim(),
        last_name: form.last_name.trim(),
        email: form.email.trim(),
        password: form.password
      };
      if (form.phone_number.trim()) payload.phone_number = form.phone_number.trim();
      console.log('[Signup] Sending payload:', payload);
      const res = await fetch('https://8ff27c7ae747.ngrok-free.app/auth/v1/signup/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      console.log('[Signup] API response:', data);
      if (res.ok && (data.status_code === 201 || data.message?.toLowerCase().includes('success'))) {
        // Extract user ID from API response (try common keys)
        const userId = data.user_id || data.id || (data.data && (data.data.user_id || data.data.id));
        if (userId) {
          navigate(`/verify-otp`);
        } else {
          setErrors({ general: 'Signup succeeded but user ID missing in response.' });
          console.error('[Signup] Missing user ID in API response:', data);
        }
      } else {
        setErrors({ general: data.message || 'Signup failed. Please try again.' });
        // Log all error details from the API
        if (data.errors) {
          console.error('[Signup] API error details:', data.errors);
        }
        if (data.error) {
          console.error('[Signup] API error:', data.error);
        }
        if (data.message) {
          console.error('[Signup] API message:', data.message);
        }
        console.error('[Signup] Full API response:', data);
      }
    } catch (error) {
      setErrors({ general: 'Signup failed. Please try again later.' });
      console.error('[Signup] Exception:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h2>Sign Up</h2>
          <p>Create your account to get started</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit} autoComplete="off">
          {errors.general && <div className="general-error">{errors.general}</div>}
          <div className="name-fields">
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                value={form.first_name}
                onChange={handleChange}
                disabled={submitting}
                className={errors.first_name ? 'error' : ''}
              />
              {errors.first_name && <div className="error-message">{errors.first_name}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="second_name">Second Name</label>
              <input
                type="text"
                name="second_name"
                id="second_name"
                value={form.second_name}
                onChange={handleChange}
                disabled={submitting}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              value={form.last_name}
              onChange={handleChange}
              disabled={submitting}
              className={errors.last_name ? 'error' : ''}
            />
            {errors.last_name && <div className="error-message">{errors.last_name}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              disabled={submitting}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              value={form.phone_number}
              onChange={handleChange}
              disabled={submitting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              disabled={submitting}
              className={errors.password ? 'error' : ''}
            />
            <div className="password-hint">At least 8 characters</div>
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>
          <button className="auth-btn primary" type="submit" disabled={submitting}>
            {submitting ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        <div className="auth-footer">
          Already have an account? <a href="/login">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
