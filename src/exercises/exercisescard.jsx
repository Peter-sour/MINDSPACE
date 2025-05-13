import { useState } from 'react';

export default function ExerciseCard({ title, subtitle, steps, onComplete }) {
  const [inProgress, setInProgress] = useState(false);

  const handleClick = () => {
    setInProgress(true);
    setTimeout(() => {
      alert(`${title} completed! Great job taking care of your mental health.`);
      setInProgress(false);
      // onComplete(); // Trigger progress update
       if (onComplete) {
        onComplete(); // ⬅️ Panggil fungsi dari parent
      }
    }, 3000);
  };

  return (
    <div className="exercise-card">
      <div className="exercise-header">
        <h3 className="exercise-title">{title}</h3>
        <p className="exercise-subtitle">{subtitle}</p>
      </div>
      <div className="exercise-body">
        <ul className="exercise-steps">
          {steps.map((step, index) => (
            <li className="exercise-step" key={index}>{step}</li>
          ))}
        </ul>
        <button className="exercise-btn" onClick={handleClick} disabled={inProgress}>
          {inProgress ? 'In Progress...' : 'Start Exercise'}
        </button>
      </div>
    </div>
  );
}
