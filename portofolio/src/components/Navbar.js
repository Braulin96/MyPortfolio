import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

const OpenNavbar = () => {
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

  return (
    <>
      <div>
        <button onClick={() => setListNavbar(!listNavbar)}>testingNav</button>
      </div>
      <div className="max-w-7xl bg-white mx-auto h-full flex flex-col">
        {listNavbar ? (
          <OpenNavbar />
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
    </>
  );
};
export default Navbar;
