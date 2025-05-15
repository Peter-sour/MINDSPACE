// src/components/MoodTracker.jsx
import React, { useState } from 'react';
import '../styles/mood.css';
import Modal from './modal';

const moodData = {
  happy: {
    emoji: "😊",
    message: "That's wonderful! Your positive energy can be contagious and uplift those around you.",
    tip: "Try to notice what contributed to your happiness today and make a mental note to repeat these activities."
  },
  okay: {
    emoji: "😐",
    message: "It's perfectly fine to feel neutral. Some days are just regular days, and that's okay!",
    tip: "Consider trying something small that usually brings you joy, like listening to a favorite song or taking a short walk."
  },
  sad: {
    emoji: "😔",
    message: "It's okay to feel sad sometimes. Remember that all emotions are temporary and valid.",
    tip: "Try reaching out to someone you trust or doing a gentle self-care activity that soothes you."
  },
  stressed: {
    emoji: "😫",
    message: "Stress is your body's way of responding to demands. Remember to take breaks and breathe.",
    tip: "Try a quick relaxation technique: take 5 deep breaths, counting to 4 as you inhale and 6 as you exhale."
  },
  anxious: {
    emoji: "😰",
    message: "Anxiety can be overwhelming, but you're not alone in feeling this way.",
    tip: "Ground yourself with the 5-4-3-2-1 technique: notice 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste."
  },
  tired: {
    emoji: "😴",
   message: "Listen to your body when it tells you it needs rest. It's okay to slow down.",
   tip: "Consider taking a short power nap (15-20 minutes) or going to bed a bit earlier tonight."
  },
};

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleTrack = () => {
    if (!selectedMood) return;

    const today = new Date().toISOString().slice(0, 10);
    const saved = JSON.parse(localStorage.getItem('moodData') || '{}');
    saved[today] = selectedMood;
    localStorage.setItem('moodData', JSON.stringify(saved));

    setShowModal(true);
  };

  return (
    <>
      <div className="mood-options" >
        {Object.entries(moodData).map(([mood, data]) => (
          <div
            key={mood}
            className={`mood-option ${selectedMood === mood ? 'selected' : ''}`}
            onClick={() => handleMoodSelect(mood)}
            data-mood={mood}
          >
            <div className="mood-emoji">{data.emoji}</div>
            <div className="mood-label">{mood.charAt(0).toUpperCase() + mood.slice(1)}</div>
          </div>
        ))}
      </div>
      <div className="mood-submit">
        <button
          id="trackButton"
          className="btn btn-primary"
          onClick={handleTrack}
          disabled={!selectedMood}
        >
          Track My Mood
        </button>
      </div>

      {showModal && (
        <Modal
          emoji={moodData[selectedMood].emoji}
          title={`Your Mood: ${selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1)}`}
          message={moodData[selectedMood].message}
          tip={moodData[selectedMood].tip}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default MoodTracker;
