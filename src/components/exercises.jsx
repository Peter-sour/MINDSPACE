import { useState } from 'react';
import ExerciseCard from '../exercises/exercisescard';
import WellnessProgress from '../exercises/progres_wellness';
import '../styles/exercises.css';
export default function Exercises() {
  const [completedCount, setCompletedCount] = useState(3); // misalnya sudah 3 hari selesai

  const handleComplete = () => {
    setCompletedCount(prev => Math.min(prev + 1, 7)); // max 7 hari
  };

  const exerciseData = [
    {
      title: '5-Minute Breathing Exercise',
      subtitle: 'Quick anxiety relief technique',
      steps: [
        'Find a comfortable seated position and close your eyes',
        'Breathe in slowly through your nose for 4 counts',
        'Hold your breath for 2 counts',
        'Exhale slowly through your mouth for 6 counts',
        'Repeat for 5 minutes, focusing only on your breath',
      ],
    },
    {
      title: 'Gratitude Journal',
      subtitle: 'Cultivate positive thinking',
      steps: [
        'Set aside 5-10 minutes at the end of each day',
        "Reflect on three things you're grateful for today",
        'Write them down with as much detail as possible',
        'Include why each thing makes you feel grateful',
        'Review your entries weekly to boost positive emotions',
      ],
    },
    {
      title: 'Progressive Muscle Relaxation',
      subtitle: 'Reduce physical tension',
      steps: [
        'Lie down in a comfortable position',
        'Tense your feet muscles for 5 seconds, then release',
        'Move up to your calves, thighs, and so on',
        'Work your way up to your face muscles',
        'Notice the difference between tension and relaxation',
      ],
    },
  ];

  return (
    <section id="exercises" className="section content user">
      <div className="container">
        <h2 className="section-title">Mental Wellness Exercises</h2>
        <p className="section-subtitle">
          Practical activities to improve your mental health and emotional wellbeing
        </p>

        <div className="features-container">
          {exerciseData.map((exercise, idx) => (
            <ExerciseCard key={idx} {...exercise} onComplete={handleComplete} />
          ))}
        </div>

        <WellnessProgress completedDays={completedCount} />
      </div>
    </section>
  );
}
