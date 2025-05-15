import React from 'react';
import '../styles/global.css';

function Cta(){
  return(
     <section className="cta" data-aos="zoom-in-up">
        <div className="container">
            <div className="cta-container">
                <h2 className="cta-title">Start Your Wellness Journey Today</h2>
                <p className="cta-description">Join thousands of teens who are taking control of their mental health and building resilience for life. MindSpace provides the tools, community, and support you need.</p>
                <a href="#m" className="btn btn-cta">Create Your MindSpace Now</a>
            </div>
        </div>
    </section>
  );
}
export default Cta;
