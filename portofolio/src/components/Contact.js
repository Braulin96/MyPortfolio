//Note : Components
import Lottie from "lottie-react";
import FadeOnScroll from "./shared/FadeOnScroll";
//Note : Icons:
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Animation from "../assets/images/contactAnimation.json";
import Second from "../assets/images/second.json";
import Mobile from "../assets/images/mobileAnimeSecond.json";

const Contact = () => {
  return (
    <div
     
      style={{ height: "100vh", maxHeight: "1000px" }}
    >
      <div className="max-w-7xl my-auto h-full flex sm:flex-row flex-col items-center mx-auto">
        
        <div className="flex flex-col px-4 gap-y-12 w-full pt-20 sm:py-0">
          <FadeOnScroll data="fade" duration="1000" delay="0">
          <p className="lg:text-8xl md:text-7xl text-6xl font-semibold text-white w-full">
            Contact
          </p>
          </FadeOnScroll>
         
          <div className="flex sm:gap-x-20 gap-x-10 sm:justify-center">
          <FadeOnScroll data="fade" duration="1000" delay="500">
            <FaGithub size={50} color="#EEEEEE" />
            </FadeOnScroll>
            <FadeOnScroll data="fade" duration="1000" delay="700">
            <IoIosMail size={50} color="#EEEEEE" />
            </FadeOnScroll>
            <FadeOnScroll data="fade" duration="1000" delay="900">
            <FaLinkedinIn size={50} color="#EEEEEE" />
            </FadeOnScroll>
            <FadeOnScroll data="fade" duration="1000" delay="1200">
            <AiFillInstagram size={50} color="#EEEEEE" />
            </FadeOnScroll>
          </div>
          
        </div>
        
        <div className="flex my-auto sm:mr-12">
        <FadeOnScroll data="fade" duration="1200" delay="1600">
          <Lottie
            className="my-auto opacity-80"
            animationData={Mobile}
            loop={true}
            //style={{ maxWidth: "800px" }}
          />
          </FadeOnScroll>
        </div> 
      </div>
    </div>
  );
};
export default Contact;
