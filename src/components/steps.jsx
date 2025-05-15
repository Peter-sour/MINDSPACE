import React from 'react';
import '../styles/global.css'


function Step(){
  return(
     <section className="how-it-works" id="how-it-works">
        <div className="container">
            <h2 className="section-title">How MindSpace Works</h2>
            <p className="section-subtitle">Your journey to better mental health is just a few simple steps away.</p>

            <div className="steps-container animate-line" >
                <div className="step" data-aos="fade-up"data-aos-duration="3000">
                    <div className="step-number">1</div>
                    <h3 className="step-title">Create Your Space</h3>
                    <p className="step-description">Sign up and customize your personal MindSpace to reflect your unique personality and goals.</p>
                </div>

                <div className="step" data-aos="fade-up"
     data-aos-duration="3000">
                    <div className="step-number">2</div>
                    <h3 className="step-title">Discover Resources</h3>
                    <p className="step-description">Explore our tailored recommendations based on your interests and mental health needs.</p>
                </div>

                <div className="step" data-aos="fade-up"
     data-aos-duration="3000">
                    <div className="step-number">3</div>
                    <h3 className="step-title">Engage & Practice</h3>
                    <p className="step-description">Participate in activities, connect with the community, and implement healthy habits.</p>
                </div>

                <div className="step" data-aos="fade-up"
     data-aos-duration="3000">
                    <div className="step-number">4</div>
                    <h3 className="step-title">Track Progress</h3>
                    <p className="step-description">Monitor your growth and celebrate the positive changes in your mental well-being.</p>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Step;