//Note : Icon:
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <div>
      <div className="text-red-500" style={{height:'100vh'}}>
        <div className="max-w-7xl bg-white mx-auto h-full flex flex-col">
          <div className="my-auto mx-auto text-center flex flex-col gap-y-4">
            <p
              className="text-8xl text-[#4F5853] font-extralight"
              style={{ fontFamily: "Allura, cursive" }}
            >
              Braulin Pires
            </p>
            <p className="text-3xl text-[#4F5853] font-extralight animate-once animate-jump-in hidden sm:flex ">
              Front-End Developer - Web Designer
            </p>
            <p className="text-3xl text-[#4F5853] font-extralight animate-once animate-jump-in mx-auto sm:hidden flex ">
              Front-End Developer <br/> Web Designer
            </p>
          </div>
          <div className="bg-[#F5F5F5] px-4 w-fit mx-auto rounded-full flex py-2 mb-12 gap-x-2">
            <button className="text-white mx-auto hover:bg-opacity-90 font-semibold w-fit bg-[#68736C] rounded-full px-6 py-1.5 flex gap-x-1 text-lg">
              <p>Resume</p>
              <GoArrowUpRight size={20} className="my-auto" />
            </button>
            <button className="my-auto px-2 text-[#5E6460] font-semibold hover:opacity-90 text-lg">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
