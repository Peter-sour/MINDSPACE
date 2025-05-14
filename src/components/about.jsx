import React from 'react';
import MoodTracker from '../modal_mood/MoodTracker'
import '../styles/mood.css';

function About() {
  return(
     <section id="about" class="section content user">
        <div className="container">
            <h2 className="section-title">About MindSpace</h2>
            <p className="section-subtitle">A safe space dedicated to teen mental health awareness, education, and support</p>

            <div className="mood-tracker reveal-from-top">
                <h3 className="mood-title">How are you feeling today?</h3>
                <MoodTracker />
            </div>
        </div>
    </section>
  );
}
export default About;