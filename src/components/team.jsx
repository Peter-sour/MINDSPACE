import React from 'react';
import '../styles/team.css';

function Team(){
  return(
     <section className="team" id="team">
        <div className="container">
            <div className="section-title" data-aos="fade-up">
                <h3>Our Professional Team</h3>
            </div>
            <div className="row-team">
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="team-card">
                        <div className="team-img">
                            <img src="https://i.pinimg.com/736x/2d/1b/a5/2d1ba5a50ff7e00332d47dcc93c884e6.jpg" alt="Team Member"/>
                            <div className="team-social">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="team-info">
                            <h3>Dr. Anita Wijaya</h3>
                            <p>Clinical Psychologist</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="team-card">
                        <div className="team-img">
                            <img src="https://i.pinimg.com/736x/f2/f1/fa/f2f1fa3a611dfb4f4be81396ebca56eb.jpg" alt="Team Member"/>
                            <div className="team-social">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="team-info">
                            <h3>Budi Santoso</h3>
                            <p>Adolescent Psychiatrist</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="team-card">
                        <div className="team-img">
                            <img src="https://i.pinimg.com/736x/96/a7/78/96a77846a2d25d9a2ee928ef8f522fbf.jpg" alt="Team Member"/>
                            <div className="team-social">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="team-info">
                            <h3>Sari Purnama</h3>
                            <p>Counselor</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="team-card">
                        <div className="team-img">
                            <img src="https://i.pinimg.com/736x/62/1e/8d/621e8d2d449889b602c4f0ea09c055ac.jpg" alt="Team Member"/>
                            <div className="team-social">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="team-info">
                            <h3>Dr. Rama Putra</h3>
                            <p>Therapist</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Team;