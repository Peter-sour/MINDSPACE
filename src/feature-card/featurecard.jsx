import React from 'react';
import '../styles/features.css';


const FeatureCard = ({icon, title, frontText, backText, featureKey, onClick }) => {
  return(
    <div className="feature-card-container" onClick={() => onClick(featureKey)}>
          <div className="feature-card-inner" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
            <div className="feature-card-front">
              <div className="feature-icon">
                <i className={`fas ${icon}`}></i>
              </div>
              <h3 className="feature-title">{title}</h3>
              <p className="feature-description">{frontText}</p>
            </div>
            <div className="feature-card-back">
               <div className="feature-icon">
                <i className={`fas ${icon}`}></i>
              </div>
              <h3 className="feature-title">{title}</h3>
              <p className="back-details">{backText}</p>
              <p className="click-info">Click for more details</p>
            </div>
          </div>
    </div>
  );
}
export default FeatureCard;