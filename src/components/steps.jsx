import React from 'react';
import '../styles/global.css'

function Step(){
  return(
     <section class="how-it-works" id="how-it-works">
        <div class="container">
            <h2 class="section-title">How MindSpace Works</h2>
            <p class="section-subtitle">Your journey to better mental health is just a few simple steps away.</p>

            <div class="steps-container">
                <div class="step">
                    <div class="step-number">1</div>
                    <h3 class="step-title">Create Your Space</h3>
                    <p class="step-description">Sign up and customize your personal MindSpace to reflect your unique personality and goals.</p>
                </div>

                <div class="step">
                    <div class="step-number">2</div>
                    <h3 class="step-title">Discover Resources</h3>
                    <p class="step-description">Explore our tailored recommendations based on your interests and mental health needs.</p>
                </div>

                <div class="step">
                    <div class="step-number">3</div>
                    <h3 class="step-title">Engage & Practice</h3>
                    <p class="step-description">Participate in activities, connect with the community, and implement healthy habits.</p>
                </div>

                <div class="step">
                    <div class="step-number">4</div>
                    <h3 class="step-title">Track Progress</h3>
                    <p class="step-description">Monitor your growth and celebrate the positive changes in your mental well-being.</p>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Step;