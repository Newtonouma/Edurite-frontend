import React, { useState, useEffect } from 'react';
import './QuotationPage.css';
import quotationFaqs from '../assets/data/quotationFaqs.json';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  location: '',
  industry: '',
  businessSize: '',
  functionalities: [],
  customIntegration: '',
  others: '',
  userCount: '',
  infrastructure: '',
  budget: '',
  notes: '',
  emailCopy: false
};

const industryOptions = ['Retail', 'Salon', 'Restaurant', 'Pharmacy', 'Others'];
const businessSizeOptions = [
  'Solo Entrepreneur',
  'Small Business (1–10 employees)',
  'Medium Business (11–50 employees)',
  'Large Business (51+ employees)'
];
const functionalityOptions = [
  'Appointment Scheduling',
  'Inventory Management',
  'Sales Tracking & Reporting',
  'Multi-User Access',
  'Loyalty Program',
  'Payment Integration (M-Pesa, Visa, etc.)',
  'Custom Integration',
  'Others'
];
const budgetOptions = [
  'KES 10,000 – 50,000',
  'KES 51,000 – 100,000',
  'KES 100,000+'
];

const QuotationPage = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [activeFaq, setActiveFaq] = useState(null);

  // Validate form fields
  const validate = (step = activeStep) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!form.name.trim()) newErrors.name = 'Full Name is required';
      if (!form.email.trim()) newErrors.email = 'Email is required';
      else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Invalid email format';
      if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    }
    
    if (step === 2) {
      if (!form.location.trim()) newErrors.location = 'Location is required';
      if (!form.industry) newErrors.industry = 'Industry is required';
      if (!form.businessSize) newErrors.businessSize = 'Business size is required';
    }
    
    if (step === 3) {
      if (form.functionalities.length === 0) newErrors.functionalities = 'Select at least one functionality';
      if (form.functionalities.includes('Custom Integration') && !form.customIntegration.trim()) {
        newErrors.customIntegration = 'Custom integration details required';
      }
      if (form.functionalities.includes('Others') && !form.others.trim()) {
        newErrors.others = 'Please describe other functionalities';
      }
      if (!form.userCount) newErrors.userCount = 'User count is required';
      else if (isNaN(form.userCount) || Number(form.userCount) < 1) newErrors.userCount = 'Enter valid user count';
      if (!form.budget) newErrors.budget = 'Budget is required';
    }
    
    return newErrors;
  };

  // Returns true if no errors for the given step
  const validateStep = (step) => {
    return Object.keys(validate(step)).length === 0;
  };

  // Update errors when form or step changes
  useEffect(() => {
    setErrors(validate());
  }, [form, activeStep]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'functionalities') {
      setForm(prev => ({
        ...prev,
        functionalities: checked 
          ? [...prev.functionalities, value]
          : prev.functionalities.filter(f => f !== value)
      }));
    } else if (type === 'checkbox' && name === 'emailCopy') {
      setForm(prev => ({ ...prev, emailCopy: checked }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
    
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allErrors = validate(1);
    Object.assign(allErrors, validate(2));
    Object.assign(allErrors, validate(3));
    
    if (Object.keys(allErrors).length === 0) {
      setSubmitted(true);
      // Submit form data here
    } else {
      setErrors(allErrors);
      setTouched(Object.keys(form).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      setActiveStep(1);
    }
  };

  // Helper to get required fields for each step
  const getStepFields = (step) => {
    if (step === 1) return ['name', 'email', 'phone'];
    if (step === 2) return ['location', 'industry', 'businessSize'];
    if (step === 3) {
      let fields = ['functionalities', 'userCount', 'budget'];
      if (form.functionalities.includes('Custom Integration')) fields.push('customIntegration');
      if (form.functionalities.includes('Others')) fields.push('others');
      return fields;
    }
    return [];
  };

  // Modified nextStep to mark all fields as touched if validation fails
  const nextStep = () => {
    if (!validateStep(activeStep)) {
      const fields = getStepFields(activeStep);
      const newTouched = { ...touched };
      fields.forEach(f => { newTouched[f] = true; });
      setTouched(newTouched);
      return;
    }
    setTouched({});
    setActiveStep(prev => prev + 1);
  };

  const prevStep = () => {
    setActiveStep(prev => Math.max(prev - 1, 1));
    setTouched({});
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const isChecked = (val) => form.functionalities.includes(val);

  return (
    <div className="quotation-container">
      <div className="quotation-hero">
        <h1 className="quotation-title">Get Your Custom Solution</h1>
        <p className="quotation-subtitle">
          Fill out this form and we'll prepare a tailored quotation for your business needs
        </p>
      </div>

      <div className="quotation-stepper">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className={`stepper-step ${activeStep >= step ? 'active' : ''}`}>
            <div className="step-number">{step}</div>
            <div className="step-label">
              {step === 1 ? 'Basic Info' : 
               step === 2 ? 'Business Details' : 
               step === 3 ? 'Requirements' : 'Review'}
            </div>
          </div>
        ))}
      </div>

      <form className="quotation-form" onSubmit={handleSubmit}>
        {/* Step 1: Contact Information */}
        {activeStep === 1 && (
          <div className="form-step">
            <h2 className="step-title">Contact Information</h2>
            <div className="form-grid">
              <div className={`form-group ${touched.name && errors.name ? 'error' : ''}`}>
                <label>Full Name*</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="John Doe"
                />
                {touched.name && errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className={`form-group ${touched.email && errors.email ? 'error' : ''}`}>
                <label>Email Address*</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="your@email.com"
                />
                {touched.email && errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className={`form-group ${touched.phone && errors.phone ? 'error' : ''}`}>
                <label>Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="+254 700 000000"
                />
                {touched.phone && errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
              
              <div className="form-group">
                <label>Company/Business Name</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Business Name"
                />
              </div>
            </div>
            
            <div className="form-actions">
              <button type="button" className="next-btn" onClick={nextStep}>
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Business Details */}
        {activeStep === 2 && (
          <div className="form-step">
            <h2 className="step-title">Business Details</h2>
            <div className="form-grid">
              <div className={`form-group ${touched.location && errors.location ? 'error' : ''}`}>
                <label>Location (City, Country)*</label>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Nairobi, Kenya"
                />
                {touched.location && errors.location && <span className="error-message">{errors.location}</span>}
              </div>
              
              <div className={`form-group ${touched.industry && errors.industry ? 'error' : ''}`}>
                <label>Business Industry*</label>
                <select
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                >
                  <option value="">Select Industry</option>
                  {industryOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {touched.industry && errors.industry && <span className="error-message">{errors.industry}</span>}
              </div>
              
              <div className={`form-group ${touched.businessSize && errors.businessSize ? 'error' : ''}`}>
                <label>Business Size*</label>
                <select
                  name="businessSize"
                  value={form.businessSize}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                >
                  <option value="">Select Size</option>
                  {businessSizeOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {touched.businessSize && errors.businessSize && <span className="error-message">{errors.businessSize}</span>}
              </div>
            </div>
            
            <div className="form-actions">
              <button type="button" className="back-btn" onClick={prevStep}>
                Back
              </button>
              <button type="button" className="next-btn" onClick={nextStep}>
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Requirements */}
        {activeStep === 3 && (
          <div className="form-step">
            <h2 className="step-title">System Requirements</h2>
            
            <div className={`form-group ${touched.functionalities && errors.functionalities ? 'error' : ''}`}>
              <label className="section-label">Desired Functionalities*</label>
              <div className="checkbox-grid">
                {functionalityOptions.map(opt => (
                  <div key={opt} className="checkbox-item">
                    <input
                      type="checkbox"
                      id={`func-${opt.replace(/\s+/g, '-')}`}
                      name="functionalities"
                      value={opt}
                      checked={isChecked(opt)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor={`func-${opt.replace(/\s+/g, '-')}`}>{opt}</label>
                  </div>
                ))}
              </div>
              {touched.functionalities && errors.functionalities && (
                <span className="error-message">{errors.functionalities}</span>
              )}
            </div>

            {isChecked('Custom Integration') && (
              <div className={`form-group ${touched.customIntegration && errors.customIntegration ? 'error' : ''}`}>
                <label>Custom Integration Details*</label>
                <input
                  type="text"
                  name="customIntegration"
                  value={form.customIntegration}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Please specify your custom integration needs"
                  required
                />
                {touched.customIntegration && errors.customIntegration && (
                  <span className="error-message">{errors.customIntegration}</span>
                )}
              </div>
            )}

            {isChecked('Others') && (
              <div className={`form-group ${touched.others && errors.others ? 'error' : ''}`}>
                <label>Other Functionalities*</label>
                <textarea
                  name="others"
                  value={form.others}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Please describe other functionalities needed"
                  rows={3}
                  required
                />
                {touched.others && errors.others && (
                  <span className="error-message">{errors.others}</span>
                )}
              </div>
            )}

            <div className="form-grid">
              <div className={`form-group ${touched.userCount && errors.userCount ? 'error' : ''}`}>
                <label>Anticipated User Count*</label>
                <input
                  type="number"
                  name="userCount"
                  value={form.userCount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  min="1"
                  placeholder="e.g. 5"
                  required
                />
                {touched.userCount && errors.userCount && (
                  <span className="error-message">{errors.userCount}</span>
                )}
              </div>
              
              <div className={`form-group ${touched.budget && errors.budget ? 'error' : ''}`}>
                <label>Budget Estimate*</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                >
                  <option value="">Select Budget Range</option>
                  {budgetOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {touched.budget && errors.budget && (
                  <span className="error-message">{errors.budget}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label>Existing Infrastructure (Optional)</label>
              <textarea
                name="infrastructure"
                value={form.infrastructure}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Briefly describe any existing software/hardware you use"
                rows={3}
              />
            </div>

            <div className="form-group">
              <label>Additional Notes or Special Requests (Optional)</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Any other information or requests?"
                rows={3}
              />
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="emailCopy"
                name="emailCopy"
                checked={form.emailCopy}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor="emailCopy">Email me a copy of my request</label>
            </div>

            <div className="form-actions">
              <button type="button" className="back-btn" onClick={prevStep}>
                Back
              </button>
              <button type="button" className="next-btn" onClick={nextStep}>
                Review
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Review */}
        {activeStep === 4 && (
          <div className="form-step">
            <h2 className="step-title">Review Your Information</h2>
            
            <div className="review-section">
              <h3>Contact Information</h3>
              <div className="review-grid">
                <div>
                  <p className="review-label">Name</p>
                  <p className="review-value">{form.name || '-'}</p>
                </div>
                <div>
                  <p className="review-label">Email</p>
                  <p className="review-value">{form.email || '-'}</p>
                </div>
                <div>
                  <p className="review-label">Phone</p>
                  <p className="review-value">{form.phone || '-'}</p>
                </div>
                <div>
                  <p className="review-label">Company</p>
                  <p className="review-value">{form.company || '-'}</p>
                </div>
              </div>

              <h3>Business Details</h3>
              <div className="review-grid">
                <div>
                  <p className="review-label">Location</p>
                  <p className="review-value">{form.location || '-'}</p>
                </div>
                <div>
                  <p className="review-label">Industry</p>
                  <p className="review-value">{form.industry || '-'}</p>
                </div>
                <div>
                  <p className="review-label">Business Size</p>
                  <p className="review-value">{form.businessSize || '-'}</p>
                </div>
              </div>

              <h3>Requirements</h3>
              <div className="review-grid">
                <div>
                  <p className="review-label">Functionalities</p>
                  <p className="review-value">
                    {form.functionalities.length > 0 ? form.functionalities.join(', ') : '-'}
                  </p>
                </div>
                {form.customIntegration && (
                  <div>
                    <p className="review-label">Custom Integration</p>
                    <p className="review-value">{form.customIntegration}</p>
                  </div>
                )}
                {form.others && (
                  <div>
                    <p className="review-label">Other Requirements</p>
                    <p className="review-value">{form.others}</p>
                  </div>
                )}
                <div>
                  <p className="review-label">User Count</p>
                  <p className="review-value">{form.userCount || '-'}</p>
                </div>
                <div>
                  <p className="review-label">Budget</p>
                  <p className="review-value">{form.budget || '-'}</p>
                </div>
                {form.infrastructure && (
                  <div>
                    <p className="review-label">Existing Infrastructure</p>
                    <p className="review-value">{form.infrastructure}</p>
                  </div>
                )}
                {form.notes && (
                  <div>
                    <p className="review-label">Additional Notes</p>
                    <p className="review-value">{form.notes}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="back-btn" onClick={prevStep}>
                Back
              </button>
              <button type="submit" className="submit-btn">
                Submit Request
              </button>
            </div>
          </div>
        )}
      </form>

      {submitted && (
        <div className="success-modal">
          <div className="success-content">
            <svg className="success-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
            </svg>
            <h2>Request Submitted Successfully!</h2>
            <p>
              Thank you for your interest. Our team will review your requirements and get back to you within 24-48 hours with a customized quotation.
            </p>
            <button className="close-btn" onClick={() => setSubmitted(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-grid">
          {quotationFaqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
              <button 
                className="faq-question" 
                onClick={() => toggleFaq(index)}
                aria-expanded={activeFaq === index}
              >
                {faq.question}
                <svg className="faq-icon" viewBox="0 0 24 24">
                  <path 
                    fill="currentColor" 
                    d={activeFaq === index ? "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" : "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}
                  />
                </svg>
              </button>
              <div 
                className="faq-answer"
                style={{
                  maxHeight: activeFaq === index ? '500px' : '0',
                  padding: activeFaq === index ? '0 1.2rem 1.2rem' : '0 1.2rem'
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuotationPage;