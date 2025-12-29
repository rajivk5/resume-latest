import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

function Contact() {
  const [state, handleSubmit] = useForm("xwpbboql");
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState({
    email: false,
    message: false
  });
  const [hasValue, setHasValue] = useState({
    email: false,
    message: false
  });

  useEffect(() => {
    if (state.values) {
      setHasValue({
        email: !!state.values.email,
        message: !!state.values.message
      });
    }
  }, [state.values]);

  if (state.succeeded) {
    return (
      <section id="contact" className="contact-section success-view">
        <div className="success-message">
          <h2>Message Sent!</h2>
          <p>I'll get back to you soon. Meanwhile, why not check out my other projects?</p>
          <div className="success-icon">
            <svg viewBox="0 0 24 24">
              <path
                fill="rgb(153, 242, 200)"
                d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
              />
            </svg>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section form-view">
      <div className="contact-container">
        <h2 className="section-title">CONTACT ME</h2>
        <p className="contact-subtitle">
          Let's create something <span className="highlight">amazing</span> together
        </p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder=" "
              required
              onFocus={() => setIsFocused({...isFocused, email: true})}
              onBlur={() => setIsFocused({...isFocused, email: false})}
              onChange={(e) => setHasValue({...hasValue, email: e.target.value.length > 0})}
            />
            <label 
              htmlFor="email" 
              className={`form-label ${(isFocused.email || hasValue.email) ? 'focused' : ''}`}
            >
              Email Address
            </label>
            <div className="input-highlight"></div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="validation-error"
            />
          </div>
          
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder=" "
              rows="5"
              required
              onFocus={() => setIsFocused({...isFocused, message: true})}
              onBlur={() => setIsFocused({...isFocused, message: false})}
              onChange={(e) => setHasValue({...hasValue, message: e.target.value.length > 0})}
            />
            <label 
              htmlFor="message" 
              className={`form-label ${(isFocused.message || hasValue.message) ? 'focused' : ''}`}
            >
              Your Message
            </label>
            <div className="input-highlight"></div>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="validation-error"
            />
          </div>
          
          <button
            type="submit"
            disabled={state.submitting}
            className="submit-button"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="button-text">
              {state.submitting ? 'SENDING...' : 'SEND MESSAGE'}
            </span>
            <div className="button-highlight" style={{ 
              width: isHovered ? '100%' : '0%',
              backgroundColor: isHovered ? 'rgba(153, 242, 200, 0.3)' : 'transparent'
            }}></div>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;