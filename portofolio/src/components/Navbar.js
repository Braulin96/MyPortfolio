import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [showNavIcon, setShowNavIcon] = useState(true); // to change the NavIcon to VerticalNav
  const [hideNavbar, setHideNavbar] = useState(true); // to hide the Horizontal nav and show de NavIcon when scrolling
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  console.log("showNavbar:", showNavIcon);

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
        setHideNavbar(false);
      } else {
        setHideNavbar(true);
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
      <div className="flex text-[#4F5853] justify-end h-12 my-auto transform transition-translate mt-4">
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
      <div className="flex flex-col bg-[#4f5853] text-white text-xl fixed right-0 w-full sm:w-60 md:w-72 h-full">
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
    );
  };

  const NavIcon = () => {
    return (
      <div className="my-auto justify-end flex flex-col gap-y-4 h-12  mt-4">
        <button
          onClick={() => setShowNavIcon(false)}
          className="bg-[#68736C] flex w-fit ml-auto p-3 rounded-full my-auto transition-all duration-300 ease-in-out"
        >
          <RxHamburgerMenu color="white" size={24} />
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-7xl relative">
      <div className="fixed flex w-auto sm:right-20 right-5">
        <div className="mx-auto h-full flex flex-col">
          {windowWidth <= 640 ? (
            showNavIcon ? (
              <NavIcon />
            ) : (
              <VerticalNavList />
            )
          ) : hideNavbar ? (
            <HorizontalNavList />
          ) : showNavIcon ? (
            <NavIcon />
          ) : (
            <VerticalNavList />
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
