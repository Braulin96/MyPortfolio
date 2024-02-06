import React, { useRef, useEffect } from "react";
import LaptopTWD from "assets/images/laptopTWD.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import './GsapAnimation.scss';

gsap.registerPlugin(ScrollTrigger);

const GsapAnimation = () => {
  let image = useRef(null);
  let container = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  let tl = gsap.timeline({
    paused: true // Pause the timeline initially
  });

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } });
    tl.to(imageReveal, 1.4, { width: "0%", ease: "power2.inOut" });
    tl.from(image, 1.4, {
      scale: 1.6,
      ease: "power2.inOut",
      delay: -1.4
    });

    // Create a ScrollTrigger for the section
    ScrollTrigger.create({
      trigger: container,
      start: "top 80%", // Adjust the start position as needed
      onEnter: () => tl.play() // Play the timeline when the section is entered
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [tl, container, image, imageReveal]); // Add tl, container, image, and imageReveal to dependency array

  return (
    <section className="main">
      <p>GSAP IMAGE REVEAL</p>
      <div className="container" ref={el => (container = el)}>
        <div className="img-container">
          <img
            ref={el => {
              image = el;
            }}
            src={LaptopTWD}
            alt="Laptop"
          />
        </div>
      </div>
    </section>
  );
};

export default GsapAnimation;
