import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SERVICES, CLIENTS, STATS, REVIEWS, WHY_CHOOSE } from '../data/siteData';
import { useInView } from '../hooks/useInView';
import './Home.css';

/* ─── HERO ─── */
function Hero() {
  const heroServices = [
    { id: 'fire-alarm', title: 'Fire Alarm Systems' },
    { id: 'sprinkler', title: 'Fire Sprinkler System' },
    { id: 'surveillance', title: 'CCTV' },
    { id: 'access-control', title: 'Access Control' },
  ];

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__bg" />
      <div className="hero__grid" />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="hero__content container">
        <div className="hero__left">
          <div className="label fade-in visible">Trusted Across India Since 2021</div>
          <h1 className="h1 hero__headline fade-in visible delay-1">
            End-to-End<br />
            <span className="gold">Smart</span><br />
            Solutions
          </h1>
          <p className="hero__sub fade-in visible delay-2">
            JK Integrated Solutions delivers mission-critical fire safety, security,
            networking & building automation systems. Engineered for reliability.
            Built to last.
          </p>
          <div className="hero__actions fade-in visible delay-3">
            <Link to="/services" className="btn btn-primary">Explore Services →</Link>
            <Link to="/contact" className="btn btn-outline">Get Free Quote</Link>
          </div>
          <div className="hero__badges fade-in visible delay-4">
            <div className="hero__badge">Pan-India Coverage</div>
            <div className="hero__badge">500+ Projects</div>
            <div className="hero__badge">UL/CE Certified Products</div>
          </div>
        </div>
        <div className="hero__right fade-in visible delay-2">
          <div className="hero__card-grid">
            {heroServices.map(service => (
              <div key={service.id} className="hero__mini-card">
                <span className="hero__mini-label">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hero__scroll">
        <div className="hero__scroll-dot" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

/* ─── STATS ─── */
function StatsBar() {
  const [ref, inView] = useInView();
  const [counts, setCounts] = useState(STATS.map(() => 0));

  useEffect(() => {
    if (!inView) return;
    STATS.forEach((stat, i) => {
      let start = 0;
      const step = Math.ceil(stat.value / 40);
      const timer = setInterval(() => {
        start = Math.min(start + step, stat.value);
        setCounts(prev => { const n = [...prev]; n[i] = start; return n; });
        if (start >= stat.value) clearInterval(timer);
      }, 30);
    });
  }, [inView]);

  return (
    <section className="stats section-sm" ref={ref}>
      <div className="container stats__grid">
        {STATS.map((s, i) => (
          <div key={s.label} className={`stats__item fade-in ${inView ? 'visible' : ''} delay-${i + 1}`}>
            <div className="stats__value">{counts[i]}{s.suffix}</div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── SERVICES PREVIEW ─── */
function ServicesPreview() {
  const [ref, inView] = useInView();
  return (
    <section className="section services-prev" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="label">What We Offer</div>
          <h2 className={`h2 fade-in ${inView ? 'visible' : ''}`}>
            Comprehensive Smart<br /><span className="gold">Integration Services</span>
          </h2>
          <p className={`section-sub fade-in delay-1 ${inView ? 'visible' : ''}`}>
            From fire safety to intelligent building automation — we engineer, install,
            and maintain systems that protect people and assets.
          </p>
        </div>
        <div className="services-prev__grid">
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              className={`service-card fade-in delay-${(i % 3) + 1} ${inView ? 'visible' : ''}`}
            >
              <div className="service-card__img" style={{ backgroundImage: `url(${s.image})` }} />
              <div className="service-card__body">
                <h3 className="h3">{s.title}</h3>
                <p className="service-card__sub">{s.subtitle}</p>
                <p className="service-card__desc">{s.shortDesc}</p>
                <Link to="/services" className="service-card__link">Learn more →</Link>
              </div>
            </article>
          ))}
        </div>
        <div className="services-prev__cta">
          <Link to="/services" className="btn btn-outline">View All Services</Link>
        </div>
      </div>
    </section>
  );
}

/* ─── WHY CHOOSE US ─── */
function WhyChoose() {
  const [ref, inView] = useInView();
  return (
    <section className="section why-section" ref={ref}>
      <div className="why-section__bg" />
      <div className="container">
        <div className="why-section__inner">
          <div className="why-section__left">
            <div className="label">Why Choose JKIS</div>
            <h2 className={`h2 fade-in ${inView ? 'visible' : ''}`}>
              The JKIS<br /><span className="gold">Difference</span>
            </h2>
            <p className={`fade-in delay-1 ${inView ? 'visible' : ''}`}
              style={{ lineHeight: '1.8', marginTop: '16px', color: '#475569' }}>
              We combine deep technical expertise with a genuine commitment to our clients'
              safety and success. Every project is treated as if it's our own facility.
            </p>
            <Link
              to="/about"
              className={`btn btn-primary fade-in delay-2 ${inView ? 'visible' : ''}`}
              style={{ marginTop: '32px' }}
            >
              About JKIS →
            </Link>
          </div>
          <div className="why-section__grid">
            {WHY_CHOOSE.map((w, i) => (
              <div
                key={w.title}
                className={`why-card fade-in delay-${(i % 3) + 1} ${inView ? 'visible' : ''}`}
              >
                <h4 className="why-card__title">{w.title}</h4>
                <p className="why-card__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── REVIEWS ─── */
function Reviews() {
  const [ref, inView] = useInView();
  return (
    <section className="section reviews-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="label">Client Testimonials</div>
          <h2 className={`h2 fade-in ${inView ? 'visible' : ''}`}>
            What Our <span className="gold">Clients Say</span>
          </h2>
          <p className={`section-sub fade-in delay-1 ${inView ? 'visible' : ''}`}>
            Trusted by enterprises, hospitals, government bodies, and retail leaders across India.
          </p>
        </div>
        <div className="reviews__grid">
          {REVIEWS.map((r, i) => (
            <article
              key={r.id}
              className={`review-card fade-in delay-${(i % 3) + 1} ${inView ? 'visible' : ''}`}
            >
              <div className="review-card__stars">{'★'.repeat(r.rating)}</div>
              <p className="review-card__text">"{r.text}"</p>
              <div className="review-card__author">
                <div className="review-card__avatar">{r.avatar}</div>
                <div>
                  <div className="review-card__name">{r.name}</div>
                  <div className="review-card__role">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CLIENTS ─── */
function Clients() {
  const [ref, inView] = useInView();
  return (
    <section className="section-sm clients-section" ref={ref}>
      <div className="container">
        <div className="label" style={{ justifyContent: 'center', marginBottom: '40px' }}>
          Our Prestigious Clients
        </div>
        <div className="clients__marquee-wrapper">
          <div className="clients__marquee">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <div key={`${c.name}-${i}`} className="client-logo">
                <img
                  src={c.logo}
                  alt={`${c.name} - JKIS client`}
                  loading="lazy"
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <span className="client-logo__fallback" style={{ display: 'none' }}>
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA BANNER ─── */
function CTABanner() {
  const [ref, inView] = useInView();
  return (
    <section className="cta-banner section-sm" ref={ref}>
      <div className="cta-banner__bg" />
      <div className="container cta-banner__inner">
        <div className={`fade-in ${inView ? 'visible' : ''}`}>
          <h2 className="h2">
            Ready to Secure Your <span className="gold">Facility?</span>
          </h2>
          <p style={{ marginTop: '12px', fontSize: '1.05rem', color: '#475569' }}>
            Get a free site assessment and customized quote within 24 hours.
          </p>
        </div>
        <div className={`cta-banner__actions fade-in delay-2 ${inView ? 'visible' : ''}`}>
          <Link to="/contact" className="btn btn-primary">Request Free Quote →</Link>
          <Link to="/services" className="btn btn-outline">Our Services</Link>
        </div>
      </div>
    </section>
  );
}

/* ─── HOME PAGE ─── */
export default function Home() {
  return (
    <>
      <Helmet>
        <title>JK Integrated Solutions | Smart Safety & Security Systems India</title>
        <meta
          name="description"
          content="JKIS delivers end-to-end fire alarm, CCTV surveillance, access control, biometrics, and intelligent automation across India. 500+ projects delivered."
        />
        <link rel="canonical" href="https://www.jkis.in/" />
      </Helmet>
      <main>
        <Hero />
        <div className="divider" />
        <StatsBar />
        <div className="divider" />
        <ServicesPreview />
        <div className="divider" />
        <WhyChoose />
        <div className="divider" />
        <Reviews />
        <div className="divider" />
        <Clients />
        <div className="divider" />
        <CTABanner />
      </main>
    </>
  );
}