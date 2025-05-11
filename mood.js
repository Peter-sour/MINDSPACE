// MindSpace Mood Tracker JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const moodOptions = document.querySelectorAll('.mood-option');
  const trackButton = document.getElementById('trackButton');
  const modal = document.getElementById('moodModal');
  const closeButton = document.querySelector('.close-button');
  const modalEmoji = document.getElementById('modalEmoji');
  const modalTitle = document.getElementById('modalTitle');
  const modalMessage = document.getElementById('modalMessage');
  const modalTip = document.getElementById('modalTip');

  let selectedMood = null;

  // Mood messages and tips
  const moodData = {
      happy: {
          message: "That's wonderful! Your positive energy can be contagious and uplift those around you.",
          tip: "Try to notice what contributed to your happiness today and make a mental note to repeat these activities."
      },
      okay: {
          message: "It's perfectly fine to feel neutral. Some days are just regular days, and that's okay!",
          tip: "Consider trying something small that usually brings you joy, like listening to a favorite song or taking a short walk."
      },
      sad: {
          message: "It's okay to feel sad sometimes. Remember that all emotions are temporary and valid.",
          tip: "Try reaching out to someone you trust or doing a gentle self-care activity that soothes you."
      },
      stressed: {
          message: "Stress is your body's way of responding to demands. Remember to take breaks and breathe.",
          tip: "Try a quick relaxation technique: take 5 deep breaths, counting to 4 as you inhale and 6 as you exhale."
      },
      anxious: {
          message: "Anxiety can be overwhelming, but you're not alone in feeling this way.",
          tip: "Ground yourself with the 5-4-3-2-1 technique: notice 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste."
      },
      tired: {
          message: "Listen to your body when it tells you it needs rest. It's okay to slow down.",
          tip: "Consider taking a short power nap (15-20 minutes) or going to bed a bit earlier tonight."
      }
  };

  // Add click event to mood options
  moodOptions.forEach(option => {
      option.addEventListener('click', function() {
          // Remove selected class from all options
          moodOptions.forEach(opt => opt.classList.remove('selected'));

          // Add selected class to clicked option
          this.classList.add('selected');

          // Enable track button
          trackButton.disabled = false;

          // Store selected mood
          selectedMood = this.getAttribute('data-mood');
      });
  });

  // Track button click event
  trackButton.addEventListener('click', function() {
      if (selectedMood) {
          // Display modal with appropriate content
          modalEmoji.textContent = document.querySelector(`.mood-option[data-mood="${selectedMood}"] .mood-emoji`).textContent;
          modalTitle.textContent = `Your Mood: ${selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1)}`;
          modalMessage.textContent = moodData[selectedMood].message;
          modalTip.textContent = moodData[selectedMood].tip;

          // Show modal
          modal.style.display = 'flex';

          // Save mood to localStorage (optional)
          saveMood(selectedMood);
      }
  });

  // Close modal when clicking the close button
  closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  // Close modal when clicking outside the modal content
  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });

  // Function to save mood (basic implementation)
  function saveMood(mood) {
      const today = new Date().toISOString().slice(0, 10);
      const moodData = JSON.parse(localStorage.getItem('moodData') || '{}');

      moodData[today] = mood;

      localStorage.setItem('moodData', JSON.stringify(moodData));
  }
});