import React, { useEffect, useState } from 'react';
import profilePic from '../assets/profile-pic.png';
import mountainBackground from '../assets/background.jpg';

import Nav from '../components/Nav';
import Preloader from '../components/Preloader';
import BackToTop from '../components/BackToTop';
import Cursor from '../components/Cursor';

import About from './About';
import Proficiences from './Proficiences';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

import '../styles/ArtChoice.css'

export default function Home() {
  const [showCoolArt, setShowCoolArt] = useState(null);
  const [modalOpen, setModalOpen] = useState(true); // Initially, show the modal

  useEffect(() => {
    // Disable scrolling until a choice is made
    document.body.style.overflow = 'hidden';

    // Cleanup function
    return () => {
      // Re-enable scrolling
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    // If the screen size is less than 991px, do not show the modal and enable scrolling
    if (window.innerWidth < 991) {
      setModalOpen(false);
      document.body.style.overflow = 'unset';
    }

    // If the user has made a choice, close the modal
    if (showCoolArt !== null) {
      setModalOpen(false);
      // Re-enable scrolling
      document.body.style.overflow = 'unset';
    }
  }, [showCoolArt]);

  const handleChoice = (choice) => {
    setShowCoolArt(choice);
  };

  return (
    <section id="home">
      {modalOpen && (
        <div className="art-modal-overlay">
          <div className="art-modal">
            <Cursor />
            <h2>Do you want to see some cool art pieces in the layout of this portfolio or keep it simple?</h2>
            <button className="btn btn-outline-primary shadow-none rounded-0 smooth-scroll wow fadeInUp m-2" onClick={() => handleChoice(true)}>Ya! Lets see some cool art.</button>
            <button className="btn btn-outline-primary shadow-none rounded-0 smooth-scroll wow fadeInUp m-2" onClick={() => handleChoice(false)}>No , I like a modern layout.</button>
          </div>
        </div>
      )}

      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark"></div>
        <div className="hero-bg parallax" style={{backgroundImage: `url(${mountainBackground})`}}></div>
        <div className="hero-content d-flex flex-column fullscreen py-5">
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <div className="bg-white shadow rounded-pill p-2 mb-4 d-inline-block wow zoomIn">
                  <img className="img-fluid rounded-pill d-block profile-pic" src={profilePic} title="This is Christopher" alt="Profile Picture" />
                </div>
                <h2 className="text-10 text-white text-uppercase fw-600 mb-4 wow fadeInUp">Hello! I'm Christopher Ferraro</h2>
                <h2 className="text-8 text-white text-uppercase fw-400 mb-4 wow fadeInUp">Web Developer & Graphic Designer</h2>
                <p className="text-5 text-light pb-3 wow fadeInUp">based in Springfield, MA.</p>
                <a href="#about" className="btn btn-outline-primary shadow-none rounded-0 smooth-scroll wow fadeInUp m-4">About Me</a>
                <a href="#portfolio" className="btn btn-outline-primary shadow-none rounded-0 smooth-scroll wow fadeInUp m-4 hide-btn">View My Work</a>
                <a href="#contact" className="btn btn-outline-primary shadow-none rounded-0 smooth-scroll wow fadeInUp m-4 hide-btn">Get In Touch</a>
              </div>
            </div>
          </div>
          <div className="container py-2 text-center">
            <a href="#about" className="scroll-down-arrow text-white smooth-scroll">
              <span className="animated">
                <i className="fas fa-arrow-down"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <Cursor />
      <Preloader />
      <Nav />
      <About showCoolArt={showCoolArt} />
      <Proficiences />
      <Resume showCoolArt={showCoolArt} />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTop />
    </section>
  );
}