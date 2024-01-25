import { BsDot } from "react-icons/bs";
import LaptopTWD from "assets/images/laptopTWD.png";

const ProjectsList = () => {
  return (
    <div style={{ height: "100vh", overflowY: "auto" }}>
      <div className="max-w-7xl  flex items-center mx-auto bg-gray-900">
        <div className="flex bg-green-600">
          <div
            className="flex flex-col gap-y-20 bg-red-500 sticky top-0"
            style={{
              //position: "sticky",
              //top: 0,

              height: "100vh",
              //height: "100vh", // Adjust the height accordingly
              //maxHeight: "calc(100vh - 40px)", // Set a maximum height if needed
              overflowY: "auto",
            }}
          >
            <div className="my-auto">
              <p>01</p>
              <div className="flex flex-col gap-y-10">
                <p className="text-4xl">Dashboard TWD</p>
                <div className="flex gap-x-4">
                  <BsDot />
                  <p className="text-3xl">Front-End developer</p>
                </div>
                <p>
                  Multi-brand e-commerce design system for websites and native
                  mobile applications.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col  bg-blue-500 my-auto gap-y-20">
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
