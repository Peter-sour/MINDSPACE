import React, { useState, useEffect } from 'react';
import '../styles/stelarjournal.css'; // Import your CSS styles here

const StellarJournal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('write');
  const [journalEntry, setJournalEntry] = useState('');
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [entries, setEntries] = useState([]);
  const [currentEntryId, setCurrentEntryId] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('Journal entry saved successfully!');

  const cosmicPrompts = [
    "If your emotions were celestial bodies, which ones would be the brightest today? Describe why they shine so brightly in your inner sky.",
    "Imagine your mind as a vast galaxy. What stars, planets, or phenomena exist there today?",
    "If you could send a message in a space capsule to your future self, what would it say?",
    "Visualize a supernova of emotions. What feeling is exploding within you, and what new elements might it create?",
    "If your thoughts were constellations, what patterns would they form in your mental sky?",
    "Imagine you're an astronaut looking back at Earth. How does this perspective change how you feel about your current challenges?"
  ];

  const getRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * cosmicPrompts.length);
    return cosmicPrompts[randomIndex];
  };

  const setNewPrompt = () => {
    setCurrentPrompt(getRandomPrompt());
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const saveEntry = (content, prompt) => {
    if (currentEntryId) {
      // Update existing entry
      setEntries(prev => prev.map(entry =>
        entry.id === currentEntryId
          ? { ...entry, content, prompt, updated: new Date().toISOString() }
          : entry
      ));
    } else {
      // Create new entry
      const newEntry = {
        id: Date.now(),
        date: new Date().toISOString(),
        content,
        prompt
      };
      setEntries(prev => [...prev, newEntry]);
    }

    // Show success notification
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    // Reset form
    setCurrentEntryId(null);
    setJournalEntry('');
    setNewPrompt();
  };

  const deleteEntry = (id) => {
    if (!window.confirm('Are you sure you want to delete this entry?')) return;

    setEntries(prev => prev.filter(entry => entry.id !== id));

    if (currentEntryId === id) {
      setJournalEntry('');
      setCurrentEntryId(null);
      setNewPrompt();
    }

    setSuccessMessage('Entry deleted successfully');
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSuccessMessage('Journal entry saved successfully!');
    }, 3000);
  };

  const loadEntry = (entry) => {
    setCurrentEntryId(entry.id);
    setJournalEntry(entry.content);
    setCurrentPrompt(entry.prompt);
    setActiveTab('write');
  };

  const handleSave = () => {
    const content = journalEntry.trim();
    if (content) {
      saveEntry(content, currentPrompt);
    }
  };

  const handleDelete = () => {
    if (currentEntryId) {
      deleteEntry(currentEntryId);
    }
  };

  const handleModalClick = (e) => {
    // Prevent closing when clicking inside the modal
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen && !journalEntry && !currentPrompt) {
      setNewPrompt();
      setCurrentEntryId(null);
    }
  }, [isOpen]);

  const sortedEntries = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));

  if (!isOpen) return null;

  return (
    <div className="stellar-modal-overlay" onClick={onClose}>
      <div className="stellar-modal" onClick={handleModalClick}>
        {/* Header */}
        <div className="stellar-modal-header">
          <h2 className="stellar-modal-title">
            <svg className="stellar-icon" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
            </svg>
            Stellar Journal
          </h2>
          <button
            onClick={onClose}
            className="stellar-modal-close"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="stellar-modal-content">
          <h3 className="stellar-content-title">
            Guided Journaling with Cosmic Prompts
          </h3>
          <p className="stellar-content-description">
            Embark on a journey through your inner universe with our guided journaling experience.
            Express your emotions among the stars and find clarity in the cosmic void.
          </p>

          {/* Success Message */}
          {showSuccess && (
            <div className="stellar-success-message">
              {successMessage}
            </div>
          )}

          {/* Tabs */}
          <div className="stellar-tabs">
            <button
              onClick={() => setActiveTab('write')}
              className={`stellar-tab ${activeTab === 'write' ? 'stellar-tab-active' : ''}`}
            >
              Write
            </button>
            <button
              onClick={() => setActiveTab('entries')}
              className={`stellar-tab ${activeTab === 'entries' ? 'stellar-tab-active' : ''}`}
            >
              Past Entries
            </button>
          </div>

          {/* Write Tab */}
          {activeTab === 'write' && (
            <div className="stellar-write-tab">
              <div className="stellar-prompt-section">
                <h4 className="stellar-prompt-title">Today's Cosmic Prompt:</h4>
                <p className="stellar-prompt-text">{currentPrompt}</p>
                <button onClick={setNewPrompt} className="stellar-new-prompt-btn">
                  New Prompt
                </button>
              </div>

              <div className="stellar-textarea-section">
                <label className="stellar-textarea-label">
                  Your Cosmic Thoughts
                </label>
                <textarea
                  value={journalEntry}
                  onChange={(e) => setJournalEntry(e.target.value)}
                  rows={8}
                  className="stellar-textarea"
                  placeholder="Start your stellar journey here..."
                />
              </div>
            </div>
          )}

          {/* Past Entries Tab */}
          {activeTab === 'entries' && (
            <div className="stellar-entries-tab">
              <h4 className="stellar-entries-title">Your Cosmic Journey</h4>
              {sortedEntries.length === 0 ? (
                <p className="stellar-empty-message">
                  Your cosmic journey has not yet begun. Create your first entry!
                </p>
              ) : (
                <div className="stellar-entries-list">
                  {sortedEntries.map((entry) => (
                    <div
                      key={entry.id}
                      className="stellar-entry-item"
                      onClick={() => loadEntry(entry)}
                    >
                      <div className="stellar-entry-header">
                        <div className="stellar-entry-date">
                          {formatDate(entry.date)}
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteEntry(entry.id);
                          }}
                          className="stellar-entry-delete"
                          title="Delete entry"
                        >
                          <svg fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                          </svg>
                        </button>
                      </div>
                      <div className="stellar-entry-preview">
                        {entry.content.substring(0, 100)}{entry.content.length > 100 ? '...' : ''}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="stellar-modal-footer">
          <div className="stellar-footer-left">
            {currentEntryId && (
              <button
                onClick={handleDelete}
                className="stellar-delete-btn"
              >
                <svg fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                Delete Entry
              </button>
            )}
          </div>
          <div className="stellar-footer-right">
            <button
              onClick={onClose}
              className="stellar-close-btn"
            >
              Close
            </button>
            <button
              onClick={handleSave}
              className="stellar-save-btn"
              disabled={!journalEntry.trim()}
            >
              Save Entry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default StellarJournal;