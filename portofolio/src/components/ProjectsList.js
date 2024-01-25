import { BsDot } from "react-icons/bs";
import LaptopTWD from "assets/images/laptopTWD.png";
import SecondLaptop from "assets/images/laptopTWDnoBorder.png"
import { GoArrowUpRight } from "react-icons/go";

const ProjectsList = () => {
  return (
    <div>
      <div className="max-w-7xl  flex items-center mx-auto ">
        <div className="flex bg-white h-full gap-x-12">
          <div
            className="flex flex-col gap-y-20  bg-white h-full"
            style={{
              position: "sticky",
              top: 0,
              height: "100Vh",
              //height: "100vh", // Adjust the height accordingly
              //maxHeight: "calc(100vh - 40px)", // Set a maximum height if needed
              overflowY: "auto",
            }}
          >
            <div className="my-auto text-[#4F5853] font-light">
              <div className="bg-[#F5F5F5] rounded-full w-10 aspect-square flex items-center">
                <p className="mx-auto text-lg">01</p>
              </div>
              <div className="flex flex-col ml-4 py-28">
                <p className="text-5xl ml-4">Dashboard TWD</p>
                <div className="flex mt-12">
                  <BsDot className="my-auto" size={30} color="#9EABA2" />
                  <p className="text-3xl my-auto">Front-End developer</p>
                </div>
                <p className="ml-4 mt-4 text-xl">
                  Multi-brand e-commerce design system for websites and native
                  mobile applications.
                </p>

                <div className="bg-[#F5F5F5] px-4 w-fit mt-12 rounded-full flex py-2 mb-12 gap-x-2">
                  <button className="text-white mx-auto hover:bg-opacity-90 font-semibold w-fit bg-[#68736C] rounded-full px-6 py-1.5 flex gap-x-1">
                    <p className="text-lg">Watch live</p>
                    <GoArrowUpRight size={20} className="my-auto" />
                  </button>
                  <button className="my-auto px-2 text-[#5E6460] font-semibold hover:opacity-90 text-lg">
                    GitHub
                  </button>
                </div>
              </div>
              <p className="text-xl underline">React App</p>
            </div>
          </div>

          <div className="flex flex-col   my-auto gap-y-20">
            <div
              className="flex h-full flex-col my-auto items-center justify-center
               "
              style={{ height: "100vh" }}
            >
              <img
                className=" animate-fade-left animate-duration-1000 animate-delay-1000"
                src={SecondLaptop}
                alt="Laptop version TWD"
              />
            </div>
            <div
              className="flex h-full flex-col my-auto items-center justify-center"
              style={{ height: "100vh" }}
            >
              <img className="" src={SecondLaptop} alt="Laptop version TWD" />
            </div>
            <div
              className="flex h-full flex-col my-auto items-center justify-center"
              style={{ height: "100vh" }}
            >
              <img className="" src={LaptopTWD} alt="Laptop version TWD" />
            </div>
            <div
              className="flex h-full flex-col my-auto items-center justify-center"
              style={{ height: "100vh" }}
            >
              <img className="" src={LaptopTWD} alt="Laptop version TWD" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsList;
