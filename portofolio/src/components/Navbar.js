import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

const DesktopNavbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false); //state to control show or hide the Navbar
  const [prevScrollY, setPrevScrollY] = useState(0); //state to control the scrolling y position

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Determine the scrolling direction
    const isScrollingDown = currentScrollY > prevScrollY;

    // Check the scroll position and update hideNavbar accordingly
    if (currentScrollY > 100) {
      setHideNavbar(isScrollingDown);
    } else {
      setHideNavbar(false);
    }
    // Update the previous scroll position
    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]); // Include prevScrollY in the dependency array

  //Styles to set the position for the current Navbar
  const hideDesktopNavbar = {
    width: "100%",
    transform: hideNavbar ? "translate(0px, -100px)" : "translate(0px, 0px)",
    transition: "transform 0.4s ease-in-out",
  };
  return (
    <div
      className="flex text-[#4F5853] justify-end h-12 my-auto bg-white"
      style={hideDesktopNavbar}
    >
      <ul className="my-auto flex gap-x-16 mt-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

const MobileNavbar = () => {
  const [showNavIcon, setShowNavIcon] = useState(true); // to change the NavIcon to VerticalNav
  return (
    <>
      {showNavIcon ? (
        <div className="my-auto justify-end flex flex-col gap-y-4 h-12 mt-4 animate-delay-50 animate-once animate-fade-left">
          <button
            onClick={() => setShowNavIcon(false)}
            className="bg-[#68736C] flex w-fit ml-auto p-3 rounded-full my-auto transition-all duration-300 ease-in-out"
          >
            <RxHamburgerMenu color="white" size={24} />
          </button>
        </div>
      ) : (
        <div
          className="flex flex-col bg-[#4f5853] text-white text-xl fixed right-0 w-full sm:w-60 md:w-72 h-full
    animate-delay-100 animate-duration-1000 animate-once animate-flip-down"
        >
          <button onClick={() => setShowNavIcon(true)}>
            <IoCloseSharp size={30} className="ml-auto mt-3 mr-3" />
          </button>

          <ul className="my-auto flex flex-col gap-10 mx-auto text-center">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </>
  );
};

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect to update the window size
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" fixed flex sm:right-20 right-5 w-full z-30">
      <div className="w-full flex max-w-7xl mx-auto">
        <div className=" h-full flex flex-col ml-auto">
          {windowWidth <= 640 ? <MobileNavbar /> : <DesktopNavbar />}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
