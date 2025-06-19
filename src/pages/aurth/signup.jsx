import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './aurth.css';

const Signup = () => {
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password matching validation here
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    setPasswordsMatch(password === confirmPassword);
    
    if (password === confirmPassword) {
      // Submit form
    }
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
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                placeholder="John" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                placeholder="Doe" 
                required 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="you@example.com" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              required 
              minLength="8"
            />
            <p className="password-hint">Minimum 8 characters</p>
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              type="password" 
              id="confirmPassword" 
              placeholder="••••••••" 
              required 
              minLength="8"
            />
            {!passwordsMatch && (
              <p className="error-message">Passwords don't match</p>
            )}
          </div>
          
          <div className="form-group terms">
            <label className="terms-label">
              <input type="checkbox" required />
              <span>I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link></span>
            </label>
          </div>
          
          <button type="submit" className="auth-btn primary">
            Create Account
          </button>
        </form>
        
        <div className="auth-footer">
          <p>Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;