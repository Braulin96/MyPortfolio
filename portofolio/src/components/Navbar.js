import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

const NavList = () => {
  return (
    <>
      <div className="flex text-[#4F5853] justify-end h-12 my-auto">
        <ul className="my-auto flex gap-x-16">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [listNavbar, setListNavbar] = useState(true);
  console.log("listNavbar:", listNavbar);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust the threshold based on your design
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

  return (
    <div className="max-w-7xl relative">
      <div className="fixed flex w-auto right-20 top-4">
        <div className="bg-white mx-auto h-full flex flex-col">
          {listNavbar ? (
            <NavList />
          ) : (
            <div className="my-auto justify-end flex flex-col gap-y-4 h-12">
              {showNavbar ? (
                <button
                  onClick={() => setShowNavbar(false)}
                  className="bg-[#68736C] flex w-fit ml-auto p-3 rounded-full my-auto transition-all duration-300 ease-in-out"
                >
                  <RxHamburgerMenu color="white" size={24} />
                </button>
              ) : (
                <button
                  onClick={() => setShowNavbar(true)}
                  className="my-auto transition-all duration-300 ease-in-out w-fit flex ml-auto"
                >
                  <IoCloseSharp className="ml-auto" size={36} color="#68736C" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
