import React from 'react';

function Footer(){
  return(
     <footer>
        <div className="container">
            <div className="footer-container">
                <div className="footer-about">
                    <a href="#" className="footer-logo">Mind<span>Space</span></a>
                    <p>Empowering teens to understand, nurture, and prioritize their mental well-being through innovative tools and supportive community.</p>
                    <div className="social-links">
                        <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div className="footer-links-container">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#how-it-works">How It Works</a></li>
                        <li><a href="#resources">Resources</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-links-container">
                    <h3 className="footer-title">Resources</h3>
                    <ul className="footer-links">
                        <li><a href="#">Anxiety Support</a></li>
                        <li><a href="#">Depression Resources</a></li>
                        <li><a href="#">Mindfulness Practices</a></li>
                        <li><a href="#">Crisis Support</a></li>
                        <li><a href="#">Parent Resources</a></li>
                    </ul>
                </div>

                <div className="footer-links-container">
                    <h3 className="footer-title">Contact Us</h3>
                    <ul className="footer-links">
                        <li><a href="mailto:support@mindspace.com">support@mindspace.com</a></li>
                        <li><a href="tel:+1800123456">+1 800 123 456</a></li>
                        <li><a href="#">Live Chat Support</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
            </div>

            <div className="copyright">
                <p>&copy; 2025 MindSpace. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
            </div>
        </div>
    </footer>
  );
}
export default Footer