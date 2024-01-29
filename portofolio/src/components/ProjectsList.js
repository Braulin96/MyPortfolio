import { BsDot } from "react-icons/bs";
import LaptopTWD from "assets/images/laptopTWD.png";
import SecondLaptop from "assets/images/laptopTWDnoBorder.png";
import { GoArrowUpRight } from "react-icons/go";

const TWDImages = [
  { id: 1, src: SecondLaptop, alt: "Laptop version TWD" },
  { id: 2, src: LaptopTWD, alt: "Laptop version TWD" },
  { id: 3, src: SecondLaptop, alt: "Laptop version TWD" },
];

const ModuleProject = ({
  number,
  projectName,
  rule,
  description,
  liveLink,
  gitHub,
}) => {
  return (
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
          <p className="mx-auto text-lg">{number}</p>
        </div>
        <div className="flex flex-col ml-4 py-28">
          <p className="text-5xl ml-4">{projectName}</p>
          <div className="flex mt-12">
            <BsDot className="my-auto" size={30} color="#9EABA2" />
            <p className="text-3xl my-auto">{rule}</p>
          </div>
          <p className="ml-4 mt-4 text-xl">{description}</p>

          <div className="bg-[#F5F5F5] px-4 w-fit mt-12 rounded-full flex py-2 mb-12 gap-x-2">
            <a className="text-white mx-auto hover:bg-opacity-90 font-semibold w-fit bg-[#68736C] rounded-full px-6 py-1.5 flex gap-x-1">
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg"
              >
                Watch live
              </a>
              <GoArrowUpRight size={20} className="my-auto" />
            </a>
            <a
              href={gitHub}
              target="_blank"
              rel="noopener noreferrer" // This is important for security reasons
              className="my-auto px-2 text-[#5E6460] font-semibold hover:opacity-90 text-lg"
            >
              GitHub
            </a>
          </div>
        </div>
        <p className="text-xl underline">React App</p>
      </div>
    </div>
  );
};

const ProjectsList = () => {
  return (
    <div>
      <div className="max-w-7xl  flex items-center mx-auto ">
        <div className="flex bg-white h-full gap-x-12">
          <ModuleProject
            number="01"
            projectName="Dashboard TWD"
            rule="Front-End Developer"
            description="Multi-brand e-commerce design system for websites and native
                  mobile applications."
            liveLink="https://www.abola.pt/"
            gitHub="https://sureshmurali.github.io/"
          />
          <div className="flex flex-col my-auto gap-y-20">
            {TWDImages.map((image) => (
              <div
                key={image.id}
                className="flex h-full flex-col my-auto items-center justify-center"
                style={{ height: "100vh" }}
              >
                <img
                  className="animate-fade-left animate-duration-1000 animate-delay-1000"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsList;
