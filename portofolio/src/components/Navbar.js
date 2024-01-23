import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  return (
    <div className="max-w-7xl bg-white mx-auto h-full flex flex-col shadow-md">
      <div className="my-auto justify-end mr-12 mt-12 flex flex-col gap-y-4 h-16">
        {showNav ? (
          <button
            onClick={() => setShowNav(false)}
            className="bg-[#68736C] flex w-fit ml-auto p-3 rounded-full my-auto transition-all duration-300 ease-in-out"
          >
            <RxHamburgerMenu color="white" size={24} />
          </button>
        ) : (
          <button
            onClick={() => setShowNav(true)}
            className="my-auto transition-all duration-300 ease-in-out w-fit flex ml-auto"
          >
            <IoCloseSharp className="ml-auto " size={36} color="#68736C" />
          </button>
        )}
      </div>
    </div>
  );
};
export default Navbar;
