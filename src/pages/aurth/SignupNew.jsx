import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './aurth.css';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    secondName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false
  });
  const [errors, setErrors] = useState({});
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = 'First name is required';
    if (!form.lastName.trim()) errs.lastName = 'Last name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    if (!form.password) errs.password = 'Password is required';
    if (!form.confirmPassword) errs.confirmPassword = 'Confirm your password';
    if (form.password && form.confirmPassword && form.password !== form.confirmPassword) errs.confirmPassword = "Passwords don't match";
    if (!form.terms) errs.terms = 'You must agree to the terms';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    // Simulate backend call
    setTimeout(() => {
      // Simulate backend response
      const fakeUserId = 'user-12345';
      const fakeOtp = '123456';
      // Store userId in sessionStorage for OTP step
      sessionStorage.setItem('pendingUserId', fakeUserId);
      // Redirect to OTP entry page
      navigate('/verify-otp');
    }, 1200);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h2>Create Account</h2>
          <p>Get started with your free account</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="name-fields">
            <div className="form-group">
              <label htmlFor="firstName">First Name*</label>
              <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="secondName">Second Name</label>
              <input type="text" id="secondName" name="secondName" value={form.secondName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name*</label>
              <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password*</label>
            <input type="password" id="password" name="password" value={form.password} onChange={handleChange} minLength="8" required />
            {errors.password && <span className="error-message">{errors.password}</span>}
            <p className="password-hint">Minimum 8 characters</p>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password*</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} minLength="8" required />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>
          <div className="form-group terms">
            <label className="terms-label">
              <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} required />
              <span>I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a></span>
            </label>
            {errors.terms && <span className="error-message">{errors.terms}</span>}
          </div>
          <button type="submit" className="auth-btn primary" disabled={submitting}>
            {submitting ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
        <div className="auth-footer">
          <p>Already have an account? <a href="/login">Sign in</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
