import React, {useState} from 'react';
import '../styles/features.css';
import BreathingModal from './breatingmodal';
import StellarJournal from './stellarjournal';

const FeatureModal = ({ isOpen, onClose, feature }) => {
  const [showBreathingModal, setShowBreathingModal] = useState(false);
  const [isJournalOpen, setIsJournalOpen] = useState(false);

  if (!isOpen || !feature) return null;

   const openBreathing = () => setShowBreathingModal(true);
   const closeBreathing = () => setShowBreathingModal(false);

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
          {/* Cek apakah fitur ini punya CTA ke breathing */}
         {feature.type === 'breathing' ? (
            <button onClick={openBreathing}>Start Breathing</button>
          ) : feature.type === 'tracking' ? (
            <button className="cta-button"
            onClick={() => {
            onClose(); // Tutup modal
            setTimeout(() => {
              const target = document.getElementById('about'); // Ganti dengan ID elemen yang ingin dituju
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }, 300); // beri delay agar modal sempat tertutup dulu
          }}
            >{feature.ctaText}</button>
          )
          : feature.type === 'expert' ? (
            <button className='cta-button'
            onClick={() => {
              onClose(); // Tutup modal
              setTimeout(() => {
                const target = document.getElementById('team');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }, 300); // beri delay agar modal sempat tertutup dulu
            }}
            >{feature.ctaText}</button>

          )
          : feature.type === 'challenges' ? (
             <button className='cta-button'
            onClick={() => {
              onClose(); // Tutup modal
              setTimeout(() => {
                const target = document.getElementById('exercises');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }, 300); // beri delay agar modal sempat tertutup dulu
            }}
            >{feature.ctaText}</button>
          )
          : feature.type === 'library' ? (
             <button className='cta-button'
            onClick={() => {
              onClose(); // Tutup modal
              setTimeout(() => {
                const target = document.getElementById('resources');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }, 300); // beri delay agar modal sempat tertutup dulu
            }}
            >{feature.ctaText}</button>
          )
          : feature.type === 'journal' ? (
            <button onClick={() => setIsJournalOpen(true)}>
              {feature.ctaText}
           </button>
          )
          : (
            <button className="cta-button">{feature.ctaText}</button>
          )}
        </div>
      </div>
       <BreathingModal isOpen={showBreathingModal} onClose={closeBreathing} />
             <StellarJournal
        isOpen={isJournalOpen}
        onClose={() => setIsJournalOpen(false)}
      />

    </div>
  );
};

export default FeatureModal;