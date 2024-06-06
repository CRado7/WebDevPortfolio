import React, { useEffect } from 'react';

export default function Preloader() {
    useEffect(() => {
        window.addEventListener('load', function() {
          const loadingAnimation = document.querySelector('.lds-ellipsis');
          const preloader = document.querySelector('.preloader');
    
          if (loadingAnimation) {
            fadeOut(loadingAnimation);
          }
          if (preloader) {
            setTimeout(() => {
              fadeOut(preloader);
            }, 333);
          }
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
