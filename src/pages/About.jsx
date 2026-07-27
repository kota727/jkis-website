import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from '../hooks/useInView';
import Partners from './Partners';
import './About.css';

const values = [
  { title: 'Our Mission', desc: 'To promptly attend to the fire safety and protection needs of our customers based on the nature of their business, in line with government regulations, using well-trained human resources and internationally certified systems.' },
  { title: 'Our Vision', desc: 'To become one of the leaders in the Indian safety and security systems industry in such a way that others will follow our proven practices and principles.' },
  { title: 'Our Values', desc: 'Focus on quality and innovation. Honour our commitments. Conduct business in a responsible, ethical and sustainable way. Lead by example. Work as a team.' },
];

const principles = [
  'Leading by example in every project we undertake',
  'Work as a team, listen to all stakeholders',
  'Transcend our potential through continuous learning',
  'Deliver our promises, aim to excel',
];

const milestones = [
  { year: '2021', event: 'Founded in Bangalore with a vision to transform safety & security' },
  { year: '2022', event: 'Expanded service portfolio to include advanced fire and security integrations' },
  { year: '2023', event: 'Achieved 16+ prestigious client partnerships across India' },
  { year: '2024', event: '500+ successful projects delivered pan-India' },
  { year: '2025', event: 'Recognized as trusted integrator by leading MNC brands' },
];

export default function About() {
  const [heroRef, heroIn] = useInView();
  const [missionRef, missionIn] = useInView();
  const [timelineRef, timelineIn] = useInView();

  return (
    <>
      <Helmet>
        <title>About Us | JK Integrated Solutions - Smart Safety Systems India</title>
        <meta name="description" content="JKIS was founded in 2021 in Hyderabad. We are an emerging leader in fire safety, security surveillance, access control, biometrics & building automation across India." />
        <link rel="canonical" href="https://www.jkis.in/about" />
      </Helmet>

      <main className="about-page">
        {/* PAGE HERO */}
        <section className="page-hero about-hero" ref={heroRef}>
          <div className="page-hero__bg" />
          <div className="container page-hero__content">
            <div className="label">About JKIS</div>
            <h1 className={`h1 fade-in ${heroIn ? 'visible' : ''}`}>
              The Story Behind<br /><span className="gold">JK Integrated Solutions</span>
            </h1>
            <p className={`page-hero__sub fade-in delay-1 ${heroIn ? 'visible' : ''}`}>
              Established in 2021, JKIS is an emerging leader in providing systems integration
              and maintenance services across India. We specialize in personalized, user-friendly,
              innovative, and integrated solutions for safety, security, and automation.
            </p>
          </div>
        </section>

        <div className="divider" />

        {/* PROFESSIONAL SUMMARY */}
        <section className="section about-summary">
          <div className="container about-summary__grid">
            <div className={`about-summary__img fade-in ${heroIn ? 'visible' : ''}`}>
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=700&q=80"
                alt="JKIS team working on security infrastructure"
                loading="lazy"
              />
              <div className="about-summary__badge">
                <span className="about-summary__badge-num">5</span>
                <span>Years of Excellence</span>
              </div>
            </div>
            <div className="about-summary__text">
              <div className="label">Professional Summary</div>
              <h2 className="h2">Who We Are</h2>
              <span className="gold-line" />
              <p>
                JK Integrated Solutions (JKIS) is a Bangalore-based systems integrator offering end-to-end
                solutions in fire safety & protection, security surveillance, access control, biometrics,
                fire protection, security, and intelligent automation.
              </p>
              <p style={{marginTop:'16px'}}>
                We are a customer-driven, high-performance company powered by skilled connectivity
                professionals — consultants, project managers, and technicians — with strong field
                experience and a successful track record across diverse industries including healthcare,
                retail, manufacturing, government, and real estate.
              </p>
              <p style={{marginTop:'16px'}}>
                Our highly-efficient team is dedicated to delivering on-time and on-budget solutions.
                Backed by our maintenance and service support, your investment is protected for the
                long term. We operate pan-India, supporting clients from single locations to multi-site
                enterprise deployments.
              </p>
              <ul className="about-summary__points">
                <li>✓ Specialized in fire protection and safety projects</li>
                <li>✓ UL / ULC / CE certified product portfolio</li>
                <li>✓ Partnerships with Bosch, HikVision, Honeywell & more</li>
                <li>✓ Pan-India installation, commissioning & AMC support</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* MISSION VISION VALUES */}
        <section className="section mvv-section" ref={missionRef}>
          <div className="container">
            <div className="section-header" style={{textAlign:'center', maxWidth:'580px', margin:'0 auto 56px'}}>
              <div className="label">Core Pillars</div>
              <h2 className={`h2 fade-in ${missionIn ? 'visible' : ''}`}>
                Mission, Vision &<br /><span className="gold">Values</span>
              </h2>
            </div>
            <div className="mvv__grid">
              {values.map((v, i) => (
                <div key={v.title} className={`mvv-card fade-in delay-${i+1} ${missionIn ? 'visible' : ''}`}>
                  <h3 className="h3">{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* GUIDING PRINCIPLES */}
        <section className="section principles-section">
          <div className="container principles-inner">
            <div className="principles-left">
              <div className="label">Guiding Principles</div>
              <h2 className="h2">How We <span className="gold">Operate</span></h2>
              <p className="muted" style={{marginTop:'16px', lineHeight:'1.8'}}>
                Every project we undertake is guided by a clear set of principles that ensure
                our clients receive consistent, exceptional service.
              </p>
            </div>
            <ul className="principles-list">
              {principles.map((p, i) => (
                <li key={i} className="principle-item">
                  <span className="principle-num">0{i+1}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="divider" />

        {/* TIMELINE */}
        <section className="section timeline-section" ref={timelineRef}>
          <div className="container">
            <div className="label" style={{justifyContent:'center', marginBottom:'16px'}}>Our Journey</div>
            <h2 className={`h2 fade-in ${timelineIn ? 'visible' : ''}`} style={{textAlign:'center', marginBottom:'56px'}}>
              Built for <span className="gold">Excellence</span>
            </h2>
            <div className="timeline">
              {milestones.map((m, i) => (
                <div key={m.year} className={`timeline__item ${i % 2 === 0 ? 'left' : 'right'} fade-in ${timelineIn ? 'visible' : ''} delay-${i+1}`}>
                  <div className="timeline__dot" />
                  <div className="timeline__card">
                    <span className="timeline__year">{m.year}</span>
                    <p>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* CTA */}
        <section className="section-sm">
          <div className="container" style={{textAlign:'center'}}>
            <h2 className="h2">Ready to Partner with <span className="gold">JKIS?</span></h2>
            <p className="muted" style={{margin:'16px auto 32px', maxWidth:'500px', fontSize:'1rem'}}>
              Let us assess your facility and design a customized safety & security solution.
            </p>
            <Link to="/contact" className="btn btn-primary">Get in Touch →</Link>
          </div>
        </section>
        <Partners />
      </main>
    </>
  );
}
