import Lottie from "lottie-react";
//Note : Icons:
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Animation from '../assets/images/contactAnimation.json'
import Second from '../assets/images/second.json'

const Contact = () => {
  return (
    <div className="" style={{ height: "100vh", maxHeight:'1000px'}}>
    <div className="max-w-7xl h-full flex items-center mx-auto px-4"
      >
      <div className="flex flex-col items-center px-4 gap-y-12 w-full">
        <p className="lg:text-8xl md:text-7xl text-6xl font-semibold text-white w-full">
         Contact
        </p>
        <div className="flex sm:gap-x-20 gap-x-10 w-full ml-36">
            <FaGithub size={50} color="#EEEEEE"/>
            <IoIosMail size={50} color="#EEEEEE"/>
            <FaLinkedinIn size={50} color="#EEEEEE"/>
            <AiFillInstagram size={50} color="#EEEEEE"/>
        </div>
      </div>
      <div className="flex my-auto">
      <Lottie  className="my-auto opacity-40" animationData={Second} loop={true}   style={{ width: "500px" }} />

      </div>
    
    </div>
  </div>
  )
}
export default Contact