//Note; Components:
import TypeIt from "typeit-react";
import { Link, animateScroll as scroll } from "react-scroll";
//Note : Icon:
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
  return (
      <div id="home" style={{ height: "100vh", maxHeight: "1000px" }}>
        <div className="max-w-7xl mx-auto h-full flex flex-col">
          <div className="my-auto mx-auto text-center flex flex-col gap-y-4">
            <div className="hidden sm:flex">
              <TypeIt
                options={{
                  waitUntilVisible: true,
                  speed: 50,
                  //loop: true,
                  //cursor: false,
                }}
                getBeforeInit={(instance) => {
                  instance
                    .type(
                      '<span class="text-8xl text-white font-extralight" style="font-family: Allura, cursive;">Braulin Pires</span>'
                    )
                    .pause(250)
                    .break({ delay: 200 })
                    .type(
                      '<span class="text-4xl text-white font-extralight">Front-Ennd Dev</span>',
                      {
                        speed: 100,
                      }
                    )
                    .pause(250)
                    .move(-6)
                    .pause(250)
                    .delete(1)
                    .pause(250)
                    .move(null, { to: "END" })
                    .pause(250)
                    .type(
                      '<span class="text-4xl text-white font-extralight">eloper - Web Designer</span>',
                      {
                        speed: 100,
                      }
                    )
                    .pause(250)
                    .exec(() => {
                      // Hide cursor when typing animation is complete
                      document.querySelector(".ti-cursor").style.visibility =
                        "hidden";
                    });
                  return instance;
                }}
              />
            </div>
            <div className="sm:hidden flex flex-col">
              {/* <TypeIt
                getBeforeInit={(instance) => {
                  instance
                    .type(
                      '<span class="text-8xl text-secondary-blue font-extralight" style="font-family: Allura, cursive;">Braulin Piress</span>',
                      { speed: 10 }
                    ) // First text with default speed
                    .pause(750)
                    .delete(1)
                    .pause(750)

                    .break({ delay: 500 })
                    .type(
                      '<span class="text-3xl text-secondary-gray font-extralight">Front-Ennd Developer</span>',
                      {
                        speed: 100,
                      }
                    )
                    .pause(750)
                    .move(-11)
                    .pause(750)
                    .delete(1)
                    .pause(750)
                    .move(null, { to: "END" })
                    .pause(750)
                    .break({ delay: 500 })
                    .type(
                      '<span class="text-3xl text-secondary-gray font-extralight">Web Designer</span>',
                      {
                        speed: 100,
                      }
                    )
                    .pause(750)
                    .exec(() => {
                      // Hide cursor when typing animation is complete
                      document.querySelector(".ti-cursor").style.display = "none";
                    });

                  return instance;
                }}
              /> */}
              <p
                className="text-8xl text-white font-extralight"
                style={{ fontFamily: "Allura, cursive" }}
              >
                Braulin Pires
              </p>
              <p className="text-3xl text-white font-extralight mx-auto ">
                Front-End Developer <br /> Web Designer
              </p>
            </div>
          </div>
          <div className="bg-white bg-opacity-5 px-4 w-fit mx-auto rounded-full flex mb-12 gap-x-2 animate-fade-up animate-delay-[7s] animate-duration-[1s]">
            <button className="fade ml-4 cursor-pointer px-6 py-1.5 rounded-full my-auto flex">
              <p className="font-semibold text-lg">Resume</p>
              <GoArrowUpRight size={20} className="my-auto" />
            </button>
            <Link to="contact" spy={true} smooth={true} duration={1000} className="secondaryButton my-auto px-2 text-white hover:opacity-90 text-lg cursor-pointer">
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
  
  );
};
export default HeroSection;
