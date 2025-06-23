import React from 'react';
import posData from '../assets/data/pos';
import './SoftwaresPage.css';
import { Link } from 'react-router-dom';

const SoftwaresPage = () => {
  return (
    <section className="softwares-page-section">
      <h1 className="softwares-page-title">All Erudite Software Products</h1>
      <div className="softwares-grid">
        {posData.products.map((product) => {
          const s = product.software;
          return (
            <div className="software-card" key={s.name}>
              <div className="software-card-header">
                <img
                  src={s.images && s.images[0] ? s.images[0].url : '/vite.svg'}
                  alt={s.images && s.images[0] ? s.images[0].description : s.name}
                  className="software-card-img"
                />
                <h2 className="software-card-title">{s.name}</h2>
              </div>
              <div className="software-card-body">
                <p className="software-card-overview">{s.overview}</p>
                
              </div>
              <div className="software-card-footer">
                <Link to={`/softwares/${s.name.toLowerCase().replace(/\s+/g, '-')}`} className="software-details-btn">
                  View Details
                </Link>
                {s.webLink && (
                  <a href={`https://${s.webLink}`} target="_blank" rel="noopener noreferrer" className="software-demo-btn">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SoftwaresPage;
