import React from 'react';
import '../styles/features.css';

const FeatureModal = ({ isOpen, onClose, feature }) => {
  if (!isOpen || !feature) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-modal" onClick={onClose}>&times;</span>
        <div className="modal-icon">
          <i className={`fas ${feature.icon}`}></i>
        </div>
        <h2 className="modal-title">{feature.title}</h2>
        <p className="modal-description">{feature.description}</p>
        <ul className="feature-benefits">
          {feature.benefits.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
        <div className="modal-buttons">
          <button className="cta-button">{feature.ctaText}</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureModal;