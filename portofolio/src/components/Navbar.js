import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [listNavbar, setListNavbar] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  console.log("showNavbar:", showNavbar);

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

  // useEffect to update the scroll y value
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setListNavbar(false);
      } else {
        setListNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const HorizontalNavList = () => {
    return (
      <div className="flex text-[#4F5853] justify-end h-12 my-auto">
        <ul className="my-auto flex gap-x-16">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  };

  const VerticalNavList = () => {
    return (
      <div
        className={`flex flex-col bg-[#4f5853] text-white text-xl fixed right-0 w-full sm:w-60 md:w-72`}
        style={{
          height: "100vh",
          transform: showNavbar ? "translateX(0px)" : "translateX(1000px)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <button>
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
    );
  };

  const NavIcon = () => {
    return (
      <div className="my-auto justify-end flex flex-col gap-y-4 h-12">
        <button
          //onClick={() => setShowNavbar(false)}
          className="bg-[#68736C] flex w-fit ml-auto p-3 rounded-full my-auto transition-all duration-300 ease-in-out"
        >
          <RxHamburgerMenu color="white" size={24} />
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-7xl relative">
      {/* <VerticalNavList /> */}
      <div className="fixed flex w-auto sm:right-20 right-5 top-4">
        <div className="mx-auto h-full flex flex-col">
          {windowWidth <= 640 ? (
            <div>
              <NavIcon />
            </div>
          ) : listNavbar ? (
            <HorizontalNavList />
          ) : (
            <NavIcon />
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
