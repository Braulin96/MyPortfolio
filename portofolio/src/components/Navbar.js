import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

const OpenNavbar = () => {
  return (
    <>
      <div>
        <ul className="flex gap-x-16 text-[#4F5853] justify-end mt-4">
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
  return (
    <div className="max-w-7xl bg-white mx-auto h-full flex flex-col">
      <OpenNavbar />
      <div className="my-auto justify-end mt-4 flex flex-col gap-y-4 h-16">
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
    </div>
  );
};
export default Navbar;
