import React, { useState } from 'react';
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiMail />, name: 'Email', url: 'mailto:rajivr021@gmail.com', color: '#EA4335' },
    { icon: <FiPhone />, name: 'Phone', url: 'tel:+917903427452', color: '#34A853' },
    { icon: <FiLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/rajiv-kumar-574292212', color: '#0A66C2' },
    { icon: <FiGithub />, name: 'GitHub', url: 'https://github.com/rajivr021', color: '#333' },
  ];

  return (
    <footer className="compact-footer">
      <div className="footer-container">
        <motion.div 
          className="cta-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cta-title">Let's Connect</h2>
          <p className="cta-text">Have a project or want to collaborate?</p>
          
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        <div className="social-grid">
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{ 
                '--hover-color': item.color,
                transform: hoveredItem === index ? 'translateY(-5px)' : 'none'
              }}
            >
              <div className="social-icon">
                {React.cloneElement(item.icon, { 
                  color: hoveredItem === index ? item.color : '#888'
                })}
              </div>
              <span className="social-name">{item.name}</span>
            </motion.a>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
          <p className="copyright">© {currentYear} Rajiv Kumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;