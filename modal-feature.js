// Modal functionality
const featureCards = document.querySelectorAll('.feature-card-container');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-modal');

// Open modal when clicking on a feature card
featureCards.forEach(card => {
  card.addEventListener('click', () => {
    const featureType = card.getAttribute('data-feature');
    const modal = document.getElementById(`modal-${featureType}`);
    modal.style.display = 'block';
  });
});

// Close modal when clicking on close button
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.style.display = 'none';
  });
});

// Close modal when clicking outside of modal content
window.addEventListener('click', (event) => {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});