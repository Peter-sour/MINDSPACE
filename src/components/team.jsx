import React from 'react';
import '../styles/team.css';

function Team(){
  return(
     <section class="team" id="team">
        <div class="container">
            <div class="section-title" data-aos="fade-up">
                <h3>Tim Profesional Kami</h3>
            </div>
            <div class="row-team">
                <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div class="team-card">
                        <div class="team-img">
                            <img src="https://i.pinimg.com/736x/2d/1b/a5/2d1ba5a50ff7e00332d47dcc93c884e6.jpg" alt="Team Member"/>
                            <div class="team-social">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="team-info">
                            <h3>Dr. Anita Wijaya</h3>
                            <p>Psikolog Klinis</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div class="team-card">
                        <div class="team-img">
                            <img src="https://i.pinimg.com/736x/f2/f1/fa/f2f1fa3a611dfb4f4be81396ebca56eb.jpg" alt="Team Member"/>
                            <div class="team-social">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="team-info">
                            <h3>Budi Santoso</h3>
                            <p>Psikiater Remaja</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div class="team-card">
                        <div class="team-img">
                            <img src="https://i.pinimg.com/736x/96/a7/78/96a77846a2d25d9a2ee928ef8f522fbf.jpg" alt="Team Member"/>
                            <div class="team-social">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="team-info">
                            <h3>Sari Purnama</h3>
                            <p>Konselor Remaja</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div class="team-card">
                        <div class="team-img">
                            <img src="https://i.pinimg.com/736x/62/1e/8d/621e8d2d449889b602c4f0ea09c055ac.jpg" alt="Team Member"/>
                            <div class="team-social">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="team-info">
                            <h3>Dr. Rama Putra</h3>
                            <p>Ahli Terapi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Team;