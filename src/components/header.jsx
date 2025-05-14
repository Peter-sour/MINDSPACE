import React, { useEffect, useState } from 'react';
import '../styles/global.css'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup saat komponen unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* header */}
      <header id="header" className={isScrolled ? "normal" : "transparent"}>
        <div className="container">
          <nav>
            <a href="#logo" className="logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
              Mind<span>Space</span>
            </a>
            <ul className={`nav-links ${menuOpen ? 'open': ''}`}>
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#resources">Resources</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}


export default Header;
