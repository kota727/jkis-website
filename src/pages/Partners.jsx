import React from 'react';
import { PARTNERS } from '../data/siteData';
import { useInView } from '../hooks/useInView';
import './Partners.css';

const TYPE_COLORS = {
  channel:    { bg: 'rgba(212,168,75,0.1)',  border: 'rgba(212,168,75,0.3)',  color: '#d4a84b' },
  associate:  { bg: 'rgba(79,142,247,0.1)',  border: 'rgba(79,142,247,0.3)',  color: '#4f8ef7' },
  technology: { bg: 'rgba(155,108,247,0.1)', border: 'rgba(155,108,247,0.3)', color: '#9b6cf7' },
  authorized: { bg: 'rgba(34,211,238,0.1)',  border: 'rgba(34,211,238,0.3)',  color: '#22d3ee' },
};

function PartnerCard({ partner, index }) {
  const [ref, inView] = useInView();
  const colors = TYPE_COLORS[partner.type] || TYPE_COLORS.associate;

  return (
    <article
      className={`partner-card fade-in ${inView ? 'visible' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* top badge */}
      <div
        className="partner-card__type"
        style={{ background: colors.bg, border: `1px solid ${colors.border}`, color: colors.color }}
      >
        {partner.typeLabel}
      </div>

      {/* logo / name */}
      <div className="partner-card__logo-wrap">
        {partner.logo ? (
          <img
            src={partner.logo}
            alt={partner.name}
            className="partner-card__logo"
          />
        ) : (
          <div className="partner-card__logo-placeholder">
            {partner.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
          </div>
        )}
      </div>

      <h3 className="partner-card__name">{partner.name}</h3>
      {partner.tagline && (
        <p className="partner-card__tagline">{partner.tagline}</p>
      )}

      <p className="partner-card__desc">{partner.desc}</p>

      <div className="partner-card__footer">
        {partner.region && (
          <span className="partner-card__region">
            <span className="partner-card__region-dot" />
            {partner.region}
          </span>
        )}
        {partner.website && (
          <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="partner-card__link"
          >
            Visit Site →
          </a>
        )}
      </div>
    </article>
  );
}

export default function Partners() {
  const [ref, inView] = useInView();

  return (
    <section className="partners-section" ref={ref}>
      {/* background glow */}
      <div className="partners-section__bg" />

      <div className="container">
        {/* header */}
        <div className={`partners-header fade-in ${inView ? 'visible' : ''}`}>
          <div className="label">Our Network</div>
          <h2 className="h2">
            Trusted <span className="gold">Partner Network</span>
          </h2>
          <p className="muted partners-header__sub">
            JKIS works with carefully selected channel and associate partners to extend
            our reach and deliver the same standard of excellence across every region.
          </p>
        </div>

        {/* cards */}
        <div className="partners-grid">
          {PARTNERS.map((partner, i) => (
            <PartnerCard key={partner.id} partner={partner} index={i} />
          ))}
        </div>

        {/* partnership CTA */}
        <div className={`partners-cta fade-in ${inView ? 'visible' : ''}`}>
          <p className="muted">Interested in becoming a JKIS partner?</p>
          <a href="/contact" className="btn btn-outline" style={{ marginTop: 14 }}>
            Enquire About Partnership →
          </a>
        </div>
      </div>
    </section>
  );
}