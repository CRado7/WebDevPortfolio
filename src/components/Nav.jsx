import React, { useEffect } from 'react';

import Signiture from '../assets/portfolio-sig.svg'

export default function Nav() {

  useEffect(() => {
    const handleScroll = () => {
        const stickyTop = document.querySelector('#header.sticky-top .bg-transparent');
        const stickyTopSlide = document.querySelector('#header.sticky-top-slide');

        if (stickyTop) {
            if (window.scrollY > 1) {
                stickyTop.classList.add('sticky-on-top');
                stickyTop.querySelector('.logo img').src = stickyTop.querySelector('.logo img').getAttribute('data-sticky-logo');
            } else {
                stickyTop.classList.remove('sticky-on-top');
                stickyTop.querySelector('.logo img').src = stickyTop.querySelector('.logo img').getAttribute('data-default-logo');
            }
        }

        if (stickyTopSlide) {
            if (window.scrollY > 180) {
                stickyTopSlide.querySelector('.primary-menu').classList.add('sticky-on');
                stickyTopSlide.querySelector('.logo img').src = stickyTopSlide.querySelector('.logo img').getAttribute('data-sticky-logo');
            } else {
                stickyTopSlide.querySelector('.primary-menu').classList.remove('sticky-on');
                stickyTopSlide.querySelector('.logo img').src = stickyTopSlide.querySelector('.logo img').getAttribute('data-default-logo');
            }
        }
    };

    const handleNavbarToggleClick = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler) {
            navbarToggler.classList.toggle('show');
        }
    };

    const handleNavbarLinkClick = () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarCollapse && navbarToggler) {
            navbarCollapse.classList.remove('show');
            navbarToggler.classList.remove('show');
        }
    };

    const handleCollapseToggle = (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('data-bs-target'));
        if (target) {
            target.classList.toggle('show');
        }
    };

    window.addEventListener('scroll', handleScroll);
    document.querySelector('.navbar-toggler')?.addEventListener('click', handleNavbarToggleClick);
    document.querySelectorAll('.navbar-nav a')?.forEach(link => {
        link.addEventListener('click', handleNavbarLinkClick);
    });
    document.querySelectorAll('.navbar-side-open .collapse, .navbar-overlay .collapse')?.forEach(collapse => {
        collapse.addEventListener('show.bs.collapse', (e) => e.preventDefault());
        collapse.addEventListener('hide.bs.collapse', (e) => e.preventDefault());
    });
    document.querySelectorAll('[data-bs-toggle="collapse"]')?.forEach(toggle => {
        toggle.addEventListener('click', handleCollapseToggle);
    });

    return () => {
        window.removeEventListener('scroll', handleScroll);
        document.querySelector('.navbar-toggler')?.removeEventListener('click', handleNavbarToggleClick);
        document.querySelectorAll('.navbar-nav a')?.forEach(link => {
            link.removeEventListener('click', handleNavbarLinkClick);
        });
        document.querySelectorAll('.navbar-side-open .collapse, .navbar-overlay .collapse')?.forEach(collapse => {
            collapse.removeEventListener('show.bs.collapse', (e) => e.preventDefault());
            collapse.removeEventListener('hide.bs.collapse', (e) => e.preventDefault());
        });
        document.querySelectorAll('[data-bs-toggle="collapse"]')?.forEach(toggle => {
            toggle.removeEventListener('click', handleCollapseToggle);
        });
    };
}, []);


  return (
  <header id="header" className="sticky-top"> 

    <nav className="primary-menu navbar navbar-expand-lg text-uppercase navbar-line-under-text fw-600">
      <div className="container position-relative">
        <div className="col-auto col-lg-2 d-inline-flex ps-lg-0"> 

          <a href="#home"><img className="logo" src={Signiture} alt="Christopher"/></a>

        </div>
        <div className="col col-lg-8 navbar-accordion px-0">
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"><span></span><span></span><span></span></button>
          <div id="header-nav" className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav">
			        <li className="nav-item"><a className="nav-link smooth-scroll" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link smooth-scroll" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link smooth-scroll" href="#proficiences">Proficiences</a></li>
              <li className="nav-item"><a className="nav-link smooth-scroll" href="#resume">Resume</a></li>
              <li className="nav-item"><a className="nav-link smooth-scroll" href="#portfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link smooth-scroll" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="col-auto col-lg-2 d-flex justify-content-end ps-0">
          <ul className="social-icons">
            <li className="social-icons-github"><a data-bs-toggle="tooltip" href="https://github.com/CRado7" target="_blank" title="" data-bs-original-title="GitHub"><i className="fab fa-github"></i></a></li>
            <li className="social-icons-linkedin"><a data-bs-toggle="tooltip" href="https://www.linkedin.com/in/christopher-ferraro-7a3883170/" target="_blank" title="" data-bs-original-title="linkedin"><i className="fab fa-linkedin"></i></a></li>
            {/* <li className="social-icons-twitter"><a data-bs-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="" data-bs-original-title="Twitter"><i className="fab fa-twitter"></i></a></li>
            <li className="social-icons-instagram"><a data-bs-toggle="tooltip" href="http://www.instagram.com/" target="_blank" title="" data-bs-original-title="Instagram"><i className="fab fa-instagram"></i></a></li> */}
          </ul>
        </div>
      </div>
    </nav>
  </header>
  );
}