import React, { useRef, useEffect } from "react";
import LaptopTWD from "assets/images/laptopTWD.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import "./GsapAnimation.scss";

gsap.registerPlugin(ScrollTrigger);

const GsapAnimation = ({ children }) => {
  let image = useRef(null);
  let container = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  let tl = gsap.timeline({
    paused: true, // Pause the timeline initially
  });

  useEffect(() => {
    tl.to(container, 0.2, { css: { visibility: "visible" } });
    tl.to(imageReveal, 1.4, { width: "0%", ease: "power2.inOut" });
    // tl.from(image, {
    //   scale: 1.4, // Escala inicial de 1.4
    //   ease: "power2.inOut",
    //   //duration: 1.4, // Duração da animação
    //   delay: 1.4, // Atraso antes do início da animação
    // });
    // // Adicionando uma etapa para restaurar a escala original após a animação
    // tl.to(image, { scale: 1, duration: 0.01 }); // Define a escala do elemento image para 1 (escala original)

    // Create a ScrollTrigger for the section
    ScrollTrigger.create({
      trigger: container,
      start: "top 70%", // Adjust the start position as needed
      onEnter: () => tl.play(), // Play the timeline when the section is entered
    });
    //tl.set(image, { scale: 1 });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [tl, container, image, imageReveal]); // Add tl, container, image, and imageReveal to dependency array

  return (
    <section className="main">
      <div className="container" ref={(el) => (container = el)}>
        <div className="img-container">
          <div
            ref={(el) => {
              image = el;
            }}
          />
          {children}
        </div>
      </div>
    </section>
  );
};

export default GsapAnimation;
