import React from "react";
import ParticlesBackground from "./particle";
import Dotlottie from '../globe/dotlottie';

import "../styles/global.css"
function Hero() {
  return(
    <section className="hero" id="home"  style={{ position: "relative", overflow: "hidden" }}>
        <ParticlesBackground/>
        <div className="globe">
            <Dotlottie />
        </div>
        <div className="container hero-container" style={{ position: "relative", zIndex: 1 }}>
            <div className="hero-content">
                <h1 className="hero-title">Navigate Your Mental Wellness Journey</h1>
                <p className="hero-subtitle">MindSpace is a safe digital haven where teens can explore, understand, and nurture their mental health with personalized resources, supportive community, and expert guidance.</p>
                <div className="hero-buttons">
                    <a href="#start" className="btn btn-primary">Get Started Now</a>
                    <a href="#how-it-works" className="btn btn-outline">Learn More</a>
                </div>
            </div>
            <div className="hero-image">
                {/* <img src="/api/placeholder/600/500" alt="Mental wellness illustration" class="hero-img"/> */}
                {/* <div className="floating-bubble bubble-1"></div>
                <div className="floating-bubble bubble-2"></div>
                <div className="floating-bubble bubble-3"></div>
                <div className="floating-bubble bubble-4"></div> */}
            </div>
        </div>
    </section>
  );
}
export default Hero;