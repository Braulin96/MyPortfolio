// Note: hooks:
import { useEffect } from "react";
// Note: components:
import AOS from "aos";
import "aos/dist/aos.css";

const FadeOnScroll = ({ data,duration, delay, children }) => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
    });
  }, []);
  return (
    <div
      data-aos={data}
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {children}
    </div>
  );
};
export default FadeOnScroll;
