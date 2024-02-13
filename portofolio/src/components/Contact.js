//Note : Icon:
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <div style={{ height: "100vh", maxHeight:'1000px'}}>
    <div className="max-w-7xl h-full flex items-center justify-center mx-auto px-4"
      >
      <div className="flex flex-col items-center justify-center mx-auto px-4 gap-y-4 lg:gap-x-8 w-full">
        <p className="lg:text-8xl md:text-7xl text-6xl font-semibold text-white w-full sm:text-center lg:ml-56">
         Contact
        </p>
        <div className="flex sm:gap-x-14 gap-x-10 lg:mr-56 w-full sm:w-auto">
            <FaGithub size={45} color="#EEEEEE"/>
            <IoIosMail size={45} color="#EEEEEE"/>
            <FaLinkedinIn size={45} color="#EEEEEE"/>
            <AiFillInstagram size={45} color="#EEEEEE"/>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Contact