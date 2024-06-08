import React, { useEffect } from 'react';

export default function Preloader() {
  useEffect(() => {
    const preloader = document.querySelector('.preloader');

    // Set maximum time for preloader (in milliseconds)
    const maxPreloaderTime = 1500; // 1.5 seconds

    // Fade out the preloader after the maximum time
    setTimeout(() => {
      fadeOut(preloader);
    }, maxPreloaderTime);

    // Event listener to fade out preloader when content has finished loading
    window.addEventListener('load', () => {
      fadeOut(preloader);
    });
  }, []);

  function fadeOut(element) {
    element.style.opacity = 1;
    (function fade() {
      if ((element.style.opacity -= 0.1) < 0) {
        element.style.display = 'none';
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }
    
      return (
        <div className="preloader">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    };
