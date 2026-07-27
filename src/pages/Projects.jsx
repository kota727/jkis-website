import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/siteData';
import { useInView } from '../hooks/useInView';
import './Services.css';

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__img-wrap">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-card__overlay">
          <Link to="/contact" className="project-card__cta">Request a Quote →</Link>
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
          <Link to="/contact" className="project-card__link">Contact Us →</Link>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <>
      <Helmet>
        <title>Projects | JK Integrated Solutions</title>
        <meta name="description" content="Explore featured JKIS projects in fire safety, CCTV, access control, biometrics and smart automation across India." />
        <link rel="canonical" href="https://www.jkis.in/projects" />
      </Helmet>

      <main className="projects-page">
        <section className="page-hero" ref={ref}>
          <div className="page-hero__bg" />
          <div className="container page-hero__content">
            <div className="label">Featured Projects</div>
            <h1 className={`h1 fade-in ${inView ? 'visible' : ''}`}>
              Real Results<br /><span className="gold">Delivered Across India</span>
            </h1>
            <p className={`page-hero__sub fade-in delay-1 ${inView ? 'visible' : ''}`}>
              View completed case studies that highlight our integrated approach to fire safety,
              security surveillance, access control and automation for leading enterprises.
            </p>
          </div>
        </section>

        <section className="section featured-projects" ref={ref}>
          <div className="container">
            <div className={`featured-projects__header fade-in ${inView ? 'visible' : ''}`}>
              <div className="label">Our Work</div>
              <h2 className="h2">All <span className="gold">Projects</span></h2>
              <p className="muted featured-projects__sub">
                Browse a curated selection of our most impactful commercial, healthcare,
                and industrial installations.
              </p>
            </div>

            <div className="projects-grid">
              {PROJECTS.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
