//Note : Components
import Lottie from "lottie-react";
import FadeOnScroll from "./shared/FadeOnScroll";
//Note : Icons:
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Robot from "../assets/images/robot.json";

const Contact = () => {
  return (
    <div id="contact" style={{ height: "100vh", maxHeight: "1000px" }}>
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
        <FadeOnScroll data="fade" duration="1600" delay="1500" offset="400">
          <div className="flex my-auto sm:mr-12 bg-white  bg-opacity-10 rounded-full p-5 shadow-md sm:mx-0 mx-4 sm:mt-0 mt-8">
            <Lottie
              className="my-auto opacity-80"
              animationData={Robot}
              loop={true}
              style={{ maxWidth: "600px" }}
            />
          </div>
        </FadeOnScroll>
      </div>
    </div>
  );
};
export default Contact;
