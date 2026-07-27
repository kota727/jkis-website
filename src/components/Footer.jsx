import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const services = [
  'Access Control & Biometrics',
  'Fire Alarm Systems',
  'Security Surveillance (CCTV)',
  'Smart Office Automation',
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/jkis-logo.png" alt="JK Integrated Solutions" className="footer__logo-img" />
          </div>
          <p className="footer__tagline">
            End-to-end smart integrations for safety, security & automation — trusted across India since 2021.
          </p>
          <div className="footer__social">
            <a href="mailto:info@jkis.in" aria-label="Email">✉</a>
            <a href="tel:91 9742761520" aria-label="Phone">☎</a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Navigation</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <h4>Our Services</h4>
          {services.map(s => (
            <Link key={s} to="/services">{s}</Link>
          ))}
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <p>Bangalore, Karnataka, India</p>
          <p>info@jkis.in</p>
          <p>Works pan-India</p>
          <Link to="/contact" className="btn btn-primary footer__cta">Request a Quote →</Link>
        </div>
      </div>

      <div className="divider" />

      <div className="footer__bottom container">
        <p>© {new Date().getFullYear()} JK Integrated Solutions. All rights reserved.</p>
        <p>Designed with precision · Delivered with excellence</p>
      </div>
    </footer>
  );
}
