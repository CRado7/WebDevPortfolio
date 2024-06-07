import React, { useEffect } from 'react';
// import WOW from 'wowjs';
import '../vendor/bootstrap/js/bootstrap.bundle.min.js';

import profilePic from '../assets/profile-pic.png';
import mountainBackground from '../assets/background.jpg';

import Nav from '../components/Nav';
import Preloader from '../components/Preloader';
import BackToTop from '../components/BackToTop';

import About from './About';
import Proficiences from './Proficiences';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

// import '../vendor/wow/wow.min.js';


export default function Home() {

  useEffect(() => {
    // Tooltip initialization
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Smooth scrolling
    const smoothScrollHandler = (event) => {
      event.preventDefault();
      const sectionTo = event.currentTarget.getAttribute('href');
      const offset = document.body.classList.contains('side-header') ? 0 : -50;
      const targetElement = document.querySelector(sectionTo);
      const targetOffsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const scrollToPosition = targetOffsetTop + offset;

      window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
      });
    };

    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', smoothScrollHandler);
    });

    // WOW.js initialization
    // const initWow = () => {
    //   if (!window.MutationObserver) {
    //       console.warn('MutationObserver is not supported by your browser. Some features may not work properly.');
    //   } else if (window.innerWidth > 767) {
    //       const wow = new WOW.WOW({
    //           boxClass: 'wow',
    //           animateClass: 'animated',
    //           offset: 0,
    //           mobile: false,
    //           live: true
    //       });
    //       wow.init();
    //     }
    // };

    // initWow();

    // window.addEventListener('resize', initWow);

    // return () => {
    //     window.removeEventListener('resize', initWow);
    //     smoothScrollLinks.forEach(link => {
    //         link.removeEventListener('click', smoothScrollHandler);
    //     });
    // };
  }, []);

  return (
    <section id="home">
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
                <a href="#about" className="btn btn-primary rounded-0 smooth-scroll wow fadeInUp">About Me</a>
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
      <Preloader />
      <Nav />
      <About />
      <Proficiences />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTop />
    </section>
  );
}
