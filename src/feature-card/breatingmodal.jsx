import React, { useState, useEffect } from 'react';
import '../styles/breat.css';

const BreathingModal = ({ isOpen, onClose }) => {
  const [breathState, setBreathState] = useState('idle');
  const [isBreathing, setIsBreathing] = useState(false);
  const [showAchievement, setShowAchievement] = useState(false);

  useEffect(() => {
    if (!isBreathing) return;

    setBreathState('in');
    const hold = setTimeout(() => setBreathState('hold'), 4000);
    const out = setTimeout(() => setBreathState('out'), 8000);
    const done = setTimeout(() => {
      setBreathState('complete');
      setShowAchievement(true);
      setIsBreathing(false);
      setTimeout(() => {
        setShowAchievement(false);
        onClose();
      }, 3000);
    }, 16000);

    return () => {
      clearTimeout(hold);
      clearTimeout(out);
      clearTimeout(done);
    };
  }, [isBreathing]);

  if (!isOpen) return null;

  const startBreathing = () => {
    if (!isBreathing) {
      setIsBreathing(true);
      setBreathState('in');
    }
  };

  return (
    <div className="modal modal-second" onClick={() => !isBreathing && onClose()}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-modal" onClick={() => !isBreathing && onClose()}>&times;</span>

        <div
          className={`breathing-circle ${breathState}`}
          onClick={startBreathing}
        >
          <div className="circle-text">
            {{
              idle: 'Click to Start',
              in: 'Inhale',
              hold: 'Hold',
              out: 'Exhale',
              complete: 'Finish',
            }[breathState]}
          </div>
        </div>

        {!isBreathing && <button onClick={startBreathing}>Start Breathing</button>}
        {showAchievement && <div className="achievement">Finished!</div>}
      </div>
    </div>
  );
};

export default BreathingModal;
