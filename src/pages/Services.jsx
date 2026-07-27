import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SERVICES, PROJECTS } from '../data/siteData';
import { useInView } from '../hooks/useInView';
import './Services.css';

function HowWeHelpTabs({ items }) {
  const [active, setActive] = useState(0);
  if (!items || items.length === 0) return null;
  return (
    <div className="how-we-help">
      <h4>How We Help</h4>
      <div className="hwh-tabs">
        {items.map((item, i) => (
          <button
            key={item.title}
            className={`hwh-tab ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="hwh-num">{String(i + 1).padStart(2, '0')}</span>
            {item.title}
          </button>
        ))}
      </div>
      <div className="hwh-panel">
        <strong>{items[active].title}</strong>
        <p>{items[active].desc}</p>
      </div>
    </div>
  );
}

function ServiceDetail({ service, isEven }) {
  const [ref, inView] = useInView();
  return (
    <article className={`service-detail ${isEven ? 'service-detail--even' : ''}`} ref={ref} id={service.id}>
      <div className="container service-detail__inner">
        <div className={`service-detail__img fade-in ${inView ? 'visible' : ''}`}>
          <img src={service.image} alt={service.title} loading="lazy" />
        </div>
        <div className={`service-detail__text fade-in delay-1 ${inView ? 'visible' : ''}`}>
          <div className="label">{service.subtitle}</div>
          <h2 className="h2">{service.title}</h2>
          <span className="gold-line" />
          <p>{service.longDesc}</p>

          <div className="service-detail__features">
            <h4>Key Features & Capabilities</h4>
            <ul>
              {service.features.map(f => (
                <li key={f}>
                  <span className="feature-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {service.howWeHelp && <HowWeHelpTabs items={service.howWeHelp} />}

          {service.brands && (
            <div className="service-detail__brands">
              <h4>Approved Brands</h4>
              <div className="brands-list">
                {service.brands.map(b => (
                  <span key={b} className="brand-chip">{b}</span>
                ))}
              </div>
            </div>
          )}

          <Link to="/contact" className="btn btn-primary" style={{marginTop:'28px'}}>
            Get Quote for This Service →
          </Link>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView();
  return (
    <article
      className={`project-card fade-in ${inView ? 'visible' : ''}`}
      ref={ref}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="project-card__img-wrap">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-card__overlay">
          <Link to="/contact" className="project-card__cta">Explore More →</Link>
        </div>
        <span className="project-card__category-badge">
          <span className="project-card__cat-tag">{project.categoryTag}</span>
          {project.category}
        </span>
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.desc}</p>
        <div className="project-card__tags">
          {project.services.map(s => (
            <span key={s} className="project-tag">{s}</span>
          ))}
        </div>
        <div className="project-card__footer">
          <span className="project-card__client">Client: {project.client}</span>
          <Link to="/contact" className="project-card__link">View Case →</Link>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  const [heroRef, heroIn] = useInView();
  const [projectsRef, projectsIn] = useInView();

  const scrollRef   = useRef(null);
  const isDown      = useRef(false);
  const startX      = useRef(0);
  const scrollLeft  = useRef(0);

  const onMouseDown = (e) => {
    isDown.current      = true;
    startX.current      = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current  = scrollRef.current.scrollLeft;
  };
  const onMouseLeave = () => { isDown.current = false; };
  const onMouseUp    = () => { isDown.current = false; };
  const onMouseMove  = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x    = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <>
      <Helmet>
        <title>Services | JK Integrated Solutions - Fire Safety, CCTV, Access Control India</title>
        <meta name="description" content="JKIS offers fire alarm systems, sprinkler systems, hydrant systems, CCTV surveillance, access control, biometrics, and smart office automation across India." />
        <link rel="canonical" href="https://www.jkis.in/services" />
      </Helmet>

      <main className="services-page">

        {/* PAGE HERO */}
        <section className="page-hero" ref={heroRef}>
          <div className="page-hero__bg" />
          <div className="container page-hero__content">
            <div className="label">Our Services</div>
            <h1 className={`h1 fade-in ${heroIn ? 'visible' : ''}`}>
              Comprehensive Smart<br /><span className="gold">Integration Services</span>
            </h1>
            <p className={`page-hero__sub fade-in delay-1 ${heroIn ? 'visible' : ''}`}>
              Six core service verticals engineered for reliability, backed by certified professionals
              and top-tier international brands.
            </p>
          </div>
        </section>

        {/* QUICK NAV */}
        <nav className="services-nav">
          <div className="container services-nav__inner">
            {SERVICES.map(s => (
              <a key={s.id} href={`#${s.id}`} className="services-nav__item">
                <span>{s.title.split('(')[0].trim()}</span>
              </a>
            ))}
          </div>
        </nav>

        <div className="divider" />

        {/* SERVICE DETAILS */}
        {SERVICES.map((service, i) => (
          <React.Fragment key={service.id}>
            <ServiceDetail service={service} isEven={i % 2 !== 0} />
            {i < SERVICES.length - 1 && <div className="divider" />}
          </React.Fragment>
        ))}

        <div className="divider" />

        {/* FEATURED PROJECTS */}
        <section className="featured-projects" ref={projectsRef}>
          <div className="container">
            <div className={`featured-projects__header fade-in ${projectsIn ? 'visible' : ''}`}>
              <div className="label">JKIS Solutions in Action</div>
              <h2 className="h2">Explore Our <span className="gold">Featured Projects</span></h2>
              <p className="muted featured-projects__sub">
                From healthcare campuses to industrial warehouses, our work speaks for itself.
              </p>
            </div>

            <div
              className="projects-scroll"
              ref={scrollRef}
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
            >
              {PROJECTS.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>

            <div className={`featured-projects__footer fade-in ${projectsIn ? 'visible' : ''}`}>
              <Link to="/projects" className="btn btn-outline">View All Projects →</Link>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* CTA */}
        <section className="section-sm" style={{textAlign:'center'}}>
          <div className="container">
            <h2 className="h2">Not Sure Which Service You Need?</h2>
            <p className="muted" style={{margin:'16px auto 32px', maxWidth:'500px'}}>
              Our experts will assess your facility and recommend the right integrated solution.
            </p>
            <Link to="/contact" className="btn btn-primary">Request a Free Assessment →</Link>
          </div>
        </section>

      </main>
    </>
  );
}