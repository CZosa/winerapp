import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="about section">
          About Us
          <hr className="linebreak" />
          <p>
            Winer is a web app designed to make the perfect wine selection for
            your next meal.
          </p>
        </div>
        <div className="contact section">
          Contact Info
          <hr className="linebreak" />
          <i className="fas fa-envelope"></i> <span>zosachris@gmail.com</span>
        </div>
        <div className="signup section">
          Free Sign Up
          <hr className="linebreak" />
          <p>Please sign in using a gmail account</p>
        </div>
        <div className="social section">
          Socialize
          <hr className="linebreak" />
          <a
            href="https://www.linkedin.com/in/czosa/"
            target="_blank"
            rel="noopener"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/CZosa/" target="_blank" rel="noopener">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="solid-bar"></div>
    </div>
  );
};

export default Footer;
