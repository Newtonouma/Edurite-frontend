import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      const res = await fetch('https://50ce-102-210-40-226.ngrok-free.app/auth/v1/signup/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      console.log('[Signup] API response:', data);
      if (res.ok && (data.status_code === 201 || data.message?.toLowerCase().includes('success'))) {
        // Redirect to OTP page after successful signup
        navigate('/verify-otp');
      } else {
        setErrors({ general: data.message || 'Signup failed.' });
        console.error('[Signup] API error payload:', payload);
        console.error('[Signup] API error response:', data);
      }
    } catch (err) {
      setErrors({ general: 'Network or server error.' });
      console.error('[Signup] Network/server error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Create Account</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          {errors.general && <div className="error-message">{errors.general}</div>}
          <div className="form-group">
            <label>First Name*</label>
            <input type="text" name="first_name" value={form.first_name} onChange={handleChange} required className={errors.first_name ? 'error' : ''} />
            {errors.first_name && <span className="error-message">{errors.first_name}</span>}
          </div>
          <div className="form-group">
            <label>Second Name</label>
            <input type="text" name="second_name" value={form.second_name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Last Name*</label>
            <input type="text" name="last_name" value={form.last_name} onChange={handleChange} required className={errors.last_name ? 'error' : ''} />
            {errors.last_name && <span className="error-message">{errors.last_name}</span>}
          </div>
          <div className="form-group">
            <label>Email*</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className={errors.email ? 'error' : ''} />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone_number" value={form.phone_number} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Password*</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} required minLength={8} className={errors.password ? 'error' : ''} />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <button type="submit" className="auth-btn primary" disabled={submitting}>
            {submitting ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
