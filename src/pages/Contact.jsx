import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInView } from '../hooks/useInView';
import './Contact.css';

const contactInfo = [
  { icon: '📌', label: 'Location', value: 'Bangalore, Karnataka, India', sub: 'Pan-India Service Coverage' },
  { icon: '✉', label: 'Email', value: 'info@jkis.in', sub: 'Respond within 24 hours' },
  { icon: '🌐', label: 'Website', value: 'www.jkis.in', sub: 'Visit us online' },
  { icon: '🕒', label: 'Business Hours', value: 'Mon – Sat: 9 AM – 6 PM', sub: 'Emergency support available' },
];

const services = [
  'Fire Alarm Systems',
  'Security Surveillance (CCTV)',
  'Access Control & Biometrics',
  'Network Infrastructure',
  'Building Management Systems',
  'Smart Office Automation',
  'Multiple Services',
];

export default function Contact() {
  const [heroRef, heroIn] = useInView();
  const [formRef, formIn] = useInView();
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | JK Integrated Solutions - Get a Free Quote</title>
        <meta name="description" content="Contact JKIS for fire alarm, CCTV, access control, biometrics & building automation solutions. Get a free site assessment and customized quote within 24 hours." />
        <link rel="canonical" href="https://www.jkis.in/contact" />
      </Helmet>

      <main className="contact-page">
        {/* PAGE HERO */}
        <section className="page-hero" ref={heroRef}>
          <div className="page-hero__bg" />
          <div className="container page-hero__content">
            <div className="label">Contact JKIS</div>
            <h1 className={`h1 fade-in ${heroIn ? 'visible' : ''}`}>
              Let's Secure Your<br /><span className="gold">Facility Together</span>
            </h1>
            <p className={`page-hero__sub fade-in delay-1 ${heroIn ? 'visible' : ''}`}>
              Get a free site assessment and customized quote within 24 hours.
              Our experts are ready to help you design the perfect safety & security solution.
            </p>
          </div>
        </section>

        <div className="divider" />

        {/* CONTACT GRID */}
        <section className="section contact-section" ref={formRef}>
          <div className="container contact-grid">

            {/* INFO SIDEBAR */}
            <div className="contact-info">
              <div className="label">Get In Touch</div>
              <h2 className={`h2 fade-in ${formIn ? 'visible' : ''}`}>
                We're Here<br /><span className="gold">to Help</span>
              </h2>
              <p className={`contact-info__sub muted fade-in delay-1 ${formIn ? 'visible' : ''}`}>
                Whether you have a question, need a quote, or want to discuss a complex project,
                our team is ready to assist.
              </p>

              <div className="contact-cards">
                {contactInfo.map((c, i) => (
                  <div key={c.label} className={`contact-card fade-in delay-${i + 1} ${formIn ? 'visible' : ''}`}>
                    <span className="contact-card__icon">{c.icon}</span>
                    <div>
                      <div className="contact-card__label">{c.label}</div>
                      <div className="contact-card__value">{c.value}</div>
                      <div className="contact-card__sub">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-promise">
                <div className="contact-promise__inner">
                  <h4>Our Promise</h4>
                  <ul>
                    <li>✓ Free site assessment</li>
                    <li>✓ Detailed proposal within 24 hrs</li>
                    <li>✓ No obligation quotation</li>
                    <li>✓ Dedicated project manager</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className={`contact-form-wrapper fade-in delay-2 ${formIn ? 'visible' : ''}`}>
              {submitted ? (
                <div className="form-success">
                  <div className="form-success__icon">OK</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will get back to you within 24 business hours.</p>
                  <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3 className="contact-form__title">Request a Free Quote</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" required placeholder="Rajesh Kumar"
                        value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" required placeholder="rajesh@company.com"
                        value={form.email} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210"
                        value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company / Organization</label>
                      <input id="company" name="company" type="text" placeholder="Your Company"
                        value={form.company} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Required *</label>
                    <select id="service" name="service" required value={form.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Details *</label>
                    <textarea id="message" name="message" required rows="5"
                      placeholder="Describe your facility, requirements, timeline and any specific needs..."
                      value={form.message} onChange={handleChange} />
                  </div>

                  <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Request →'}
                  </button>

                  <p className="form-note">
                    * We respect your privacy. Your information is never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
