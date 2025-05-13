import React from 'react';
import '../styles/mood.css'; // kalau modal pakai CSS yang sama

const Modal = ({ emoji, title, message, tip, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-emoji">{emoji}</div>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-message">{message}</p>
        <p className="modal-tip"><strong>Tip:</strong> {tip}</p>
      </div>
    </div>
  );
};

export default Modal;
