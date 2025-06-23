import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import posData from '../assets/data/pos';
import './SoftwareDetailsPage.css';

const getInitials = (name) => {
  if (!name) return '';
  return name.split(' ').map((n) => n[0]).join('').toUpperCase();
};

const SoftwareDetailsPage = () => {
  const { slug } = useParams();
  const product = posData.products.find(p =>
    (p.software.name.toLowerCase().replace(/\s+/g, '-') === slug)
  );
  if (!product) {
    return <div className="software-details-notfound">Software not found.</div>;
  }
  const s = product.software;
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [tabIdx, setTabIdx] = useState(0);

  // Ratings and downloads (mocked for now)
  const avgRating = s.testimonials && s.testimonials.length > 0 ? (
    s.testimonials.reduce((acc, t) => acc + (t.rating || 0), 0) / s.testimonials.length
  ).toFixed(1) : '4.8';
  const reviewCount = s.testimonials ? s.testimonials.length : 0;
  const downloads = s.downloads || '10K+';

  // Feature chips (first 4 features)
  const featureChips = s.features ? s.features.slice(0, 4) : [];

  return (
    <section className="software-details-section playstore-style">
      {/* Banner/hero section */}
      <div className="software-details-hero" style={{
        background: (!s.videos || s.videos.length === 0 || !s.videos[0].url) && s.images && s.images[0] ? `url('${s.images[0].url}') center/cover no-repeat` : undefined,
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '2rem',
        padding: '2.2rem 2.5rem 2.2rem 2.5rem',
      }}>
        {/* Video background if available */}
        {s.videos && s.videos.length > 0 && s.videos[0].url && (
          <video
            className="software-details-hero-video-bg"
            src={s.videos[0].url.startsWith('http') ? s.videos[0].url : `${import.meta.env.BASE_URL || '/'}videos/pos-vid/${s.videos[0].url.replace(/^.*[\\/]/, '')}`}
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0
            }}
          />
        )}
        {/* Optional: overlay for readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(1, 87, 76, 0.5)',
          zIndex: 1
        }} />
       
        <div className="software-details-hero-info" style={{zIndex: 2}}>
          <Link to="/softwares" className="software-details-back">&larr; Back to Softwares</Link>
          <h1 className="software-details-title">{s.name}</h1>
          <div className="software-details-tagline">{s.tagline}</div>
          <div className="software-details-ratingsbar">
            <span className="software-details-rating">
              <span className="star">★</span> {avgRating}
            </span>
            <span className="software-details-reviews">{reviewCount} reviews</span>
            <span className="software-details-downloads">{downloads} downloads</span>
          </div>
          <div className="software-details-platforms">
            {s.platforms && s.platforms.map((p, i) => (
              <span className="software-details-platform" key={i}>{p}</span>
            ))}
          </div>
          <div className="software-details-featurechips">
            {featureChips.map((f, i) => (
              <span className="software-details-chip" key={i}>{f}</span>
            ))}
          </div>
          <div className="software-details-actions">
            {s.webLink && (
              <a href={`https://${s.webLink}`} target="_blank" rel="noopener noreferrer" className="software-details-demo main-action-btn">
                Live Demo
              </a>
            )}
            {s.playstoreLink && (
              <a href={s.playstoreLink} target="_blank" rel="noopener noreferrer" className="software-details-demo secondary-action-btn">
                Google Play
              </a>
            )}
            {s.apkLink && (
              <a href={`https://${s.apkLink}`} target="_blank" rel="noopener noreferrer" className="software-details-demo secondary-action-btn">
                Download APK
              </a>
            )}
          </div>
        </div>
      </div>
      {/* Main content split into left and right */}
      <div className="software-details-main-content">
        <div className="software-details-main-left">
          {/* Tab Navigation */}
          <div className="software-details-tabs">
            {['Overview', 'FAQs', 'Ratings & Reviews'].map((tab, idx) => (
              <button
                key={tab}
                className={`software-details-tab${tabIdx === idx ? ' active' : ''}`}
                onClick={() => setTabIdx(idx)}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Tab Content */}
          {tabIdx === 0 && (
            <>
              {/* Screenshots carousel */}
              {s.images && s.images.length > 1 && (
                <div className="software-details-screenshots">
                  <div className="software-details-screenshots-scroll">
                    {s.images.map((img, i) => (
                      <img src={img.url} alt={img.description || s.name} key={i} className="software-details-screenshot" />
                    ))}
                  </div>
                </div>
              )}
              {/* About section */}
              <div className="software-details-section-block">
                <div className="software-details-about-title">About this app</div>
                <div className={`software-details-overview ${aboutExpanded ? 'expanded' : ''}`}>{s.overview}</div>
                {s.overview && s.overview.length > 120 && (
                  <button className="software-details-readmore" onClick={() => setAboutExpanded(!aboutExpanded)}>
                    {aboutExpanded ? 'Read less' : 'Read more'}
                  </button>
                )}
              </div>
              {/* Features */}
              <div className="software-details-section-block">
                <div className="software-details-section-title">Key Features</div>
                <ul className="software-details-features">
                  {s.features && s.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
              {/* Pricing */}
              <div className="software-details-section-block">
                <div className="software-details-section-title">Pricing</div>
                <div className="software-details-pricing-grid">
                  {s.pricing && s.pricing.map((plan, i) => (
                    <div className="software-details-pricing-card" key={i}>
                      <div className="software-details-pricing-plan">{plan.plan}</div>
                      <div className="software-details-pricing-price">{plan.price}</div>
                      <div className="software-details-pricing-target">{plan.targetUser}</div>
                      <ul className="software-details-pricing-features">
                        {plan.coreFunctionality && plan.coreFunctionality.map((cf, j) => (
                          <li key={j}>{cf}</li>
                        ))}
                      </ul>
                      <button className="software-details-pricing-cta">Choose {plan.plan}</button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          {tabIdx === 1 && (
            s.faqs && s.faqs.length > 0 ? (
              <div className="software-details-section-block">
                <div className="software-details-section-title">FAQs</div>
                <div className="software-details-faqs">
                  {s.faqs.map((faq, i) => (
                    <details key={i} className="software-details-faq">
                      <summary>{faq.question}</summary>
                      <div>{faq.answer}</div>
                    </details>
                  ))}
                </div>
              </div>
            ) : <div className="software-details-section-block">No FAQs available.</div>
          )}
          {tabIdx === 2 && (
            s.testimonials && s.testimonials.length > 0 ? (
              <div className="software-details-section-block">
                <div className="software-details-section-title">User Reviews</div>
                <div className="software-details-reviews">
                  {s.testimonials.map((t, i) => (
                    <div className="software-details-review" key={i}>
                      <div className="software-details-review-avatar">{getInitials(t.customerName)}</div>
                      <div className="software-details-review-content">
                        <div className="software-details-review-header">
                          <span className="software-details-review-name">{t.customerName}</span>
                          <span className="software-details-review-rating">{'★'.repeat(t.rating)}{'☆'.repeat(5-t.rating)}</span>
                        </div>
                        <div className="software-details-review-type">{t.businessType}</div>
                        <div className="software-details-review-text">{t.feedback}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : <div className="software-details-section-block">No reviews yet.</div>
          )}
        </div>
        <div className="software-details-main-right">
          <div className="software-details-other-title">Other POS Softwares</div>
          <div className="software-details-other-list">
            {posData.products.filter(p => p.software.name.toLowerCase().replace(/\s+/g, '-') !== slug).slice(0, 4).map((p, i) => (
              <div className="software-details-other-card" key={i}>
                <img src={p.software.images && p.software.images[0] ? p.software.images[0].url : '/vite.svg'} alt={p.software.name} className="software-details-other-img" />
                <div className="software-details-other-info">
                  <div className="software-details-other-name">{p.software.name}</div>
                  <div className="software-details-other-tagline">{p.software.tagline}</div>
                  <Link to={`/softwares/${p.software.name.toLowerCase().replace(/\s+/g, '-')}`} className="software-details-other-viewmore">View more</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareDetailsPage;
