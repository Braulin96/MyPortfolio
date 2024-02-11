//Note : Icon:
import { GoArrowUpRight } from "react-icons/go";
import TypeIt from "typeit-react";
//import { TypeAnimation } from "react-type-animation";


const HeroSection = () => {
  return (
    <div>
      <div style={{ height: "100vh", maxHeight: "1000px" }}>
        <div className="max-w-7xl bg-white mx-auto h-full flex flex-col">
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .type(
                  '<span class="text-8xl text-secondary-blue font-extralight" style="font-family: Allura, cursive;">Braulin Piress</span>',
                  { speed: 100 }
                ) // First text with default speed
                .pause(750)
                .delete(1)
                .pause(750)

                .break({ delay: 500 })
                .type(
                  '<span class="text-4xl text-secondary-gray font-extralight">Front-Ennd Dev</span>',
                  {
                    speed: 100,
                  }
                )
                .pause(750)
                .move(-6)
                .pause(750)
                .delete(1)
                .pause(750)
                .move(null, { to: "END" })
                .pause(750)
                .type(
                  '<span class="text-4xl text-secondary-gray font-extralight">eloper - Web Designer</span>',
                  {
                    speed: 100,
                  }
                )
                .pause(750)
                .exec(() => {
                  // Hide cursor when typing animation is complete
                  document.querySelector(".ti-cursor").style.display = "none";
                });
              const cursorElement = document.querySelector(".ti-cursor");

              // .exec(() => {
              //   // Hide cursor after animation completes
              //   instance.setOptions({ cursor: false });
              // });

              // .pause(750)
              // .move(-4)
              // .pause(750)
              // .delete(3)
              // .pause(750)
              // .move(null, { to: "END" })

              // Remember to return it!
              return instance;
            }}
          />

          <div className="my-auto mx-auto text-center flex flex-col gap-y-4">
            <p
              className="text-8xl text-secondary-blue font-extralight"
              style={{ fontFamily: "Allura, cursive" }}
            >
              Braulin Pires
            </p>
            <p className="text-3xl font-extralight hidden sm:flex text-secondary-gray">
              Front-End Developer - Web Designer
            </p>
            <p className="text-3xl text-secondary-gray font-extralight mx-auto sm:hidden flex ">
              Front-End Developer <br /> Web Designer
            </p>
          </div>
          <div className="bg-[#F5F5F5] px-4 w-fit mx-auto rounded-full flex py-2 mb-12 gap-x-2">
            <button className="text-white mx-auto hover:bg-opacity-90 font-semibold w-fit bg-primary-green rounded-full px-6 py-1.5 flex gap-x-1 text-lg">
              <p>Resume</p>
              <GoArrowUpRight size={20} className="my-auto" />
            </button>
            <button className="my-auto px-2 text-secondary-gray hover:opacity-90 text-lg font-bold">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
