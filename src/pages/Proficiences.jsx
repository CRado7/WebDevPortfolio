import { useEffect } from 'react';

import Illustartor from '../assets/proficiencies/adobeillustrator.svg';
import Photoshop from '../assets/proficiencies/adobephotoshop.svg';
import Bootstrap from '../assets/proficiencies/bootstrap.svg';
import CSS from '../assets/proficiencies/css3.svg';
import Express from '../assets/proficiencies/express.svg';
import GitHub from '../assets/proficiencies/github.svg';
import HTML from '../assets/proficiencies/html5.svg';
import JavaScript from '../assets/proficiencies/javascript.svg';
import MongoDB from '../assets/proficiencies/mongodb.svg';
import NodeJS from '../assets/proficiencies/nodedotjs.svg';
import ReactJS from '../assets/proficiencies/react.svg';
import VisualCode from '../assets/proficiencies/visualstudiocode.svg';

// Array of image paths
const images = [
  Illustartor,
  Photoshop,
  Bootstrap,
  CSS,
  Express,
  GitHub,
  HTML,
  JavaScript,
  MongoDB,
  NodeJS,
  ReactJS,
  VisualCode
];

export default function Proficiences() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }

    function addAnimation(scrollers) {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller-inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <section id="proficiences" className="section bg-light">
      <div className="container"> 
        <p className="text-center mb-2 wow fadeInUp"><span className="bg-primary text-dark px-2">What I Know</span></p>
        <h2 className="text-10 text-dark fw-600 text-center mb-5 wow fadeInUp">My Proficiencies</h2>
        
        <div className="horizontal-scroll">
          <div className="scroller wow fadeInUp" data-speed="fast">
            <div className="scroller-inner">
              {images.map((image, index) => (
                <img key={index} className="scroll" src={image} alt={`Proficiency ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}