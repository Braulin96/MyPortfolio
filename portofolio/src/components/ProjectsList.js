import { BsDot } from "react-icons/bs";
import LaptopTWD from "assets/images/laptopTWD.png";
import SecondLaptop from "assets/images/laptopTWDnoBorder.png";
import { GoArrowUpRight } from "react-icons/go";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
  EffectCards,
  EffectCoverflow,
  EffectCube,
  EffectFade,
} from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/effect-cube";
import "swiper/css/navigation";

const TWDImages = [
  { id: 1, src: SecondLaptop, alt: "Laptop version TWD" },
  { id: 2, src: LaptopTWD, alt: "Laptop version TWD" },
  { id: 3, src: SecondLaptop, alt: "Laptop version TWD" },
];

const SlideCarousel = () => {
  const swiperRef = useRef();
  return (
    <div className="relative  animate-once animate-fade-left animate-duration-[2s]"style={{maxWidth:"calc(100w - 10px)", width:'calc(100vw - 2rem)'}}>
      <Swiper
        className="flex w-full justify-center items-center mx-auto"
        slidesPerView={2}
        loop={true}
        centeredSlides={true}
        spaceBetween={5}
        effect={"coverflow"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[
          EffectCube,
          Pagination,
          EffectCoverflow,
          Autoplay,
          Navigation,
          Scrollbar,
        ]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <img
          className="h-full"
            width={400}
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className="my-auto">
          <img
          className="h-full my-auto"
          height={400}
            width={400}
            src={LaptopTWD}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            width={400}
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            width={400}
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </SwiperSlide>
      </Swiper>
      <div className="z-50 absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full">
        <button className="bg-white shadow-lg border rounded-full p-1" onClick={() => swiperRef.current?.slidePrev()}>
          <HiArrowSmallLeft className="opacity-70 hover:opacity-100" size={20} />
        </button>
      </div>
      <div className="z-50 absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full">
        <button className="bg-white shadow-lg border rounded-full p-1" onClick={() => swiperRef.current?.slideNext()}>
          <HiArrowRight className="opacity-70 hover:opacity-100" size={20} />
        </button>
      </div>
    </div>
  );
};

const ModuleProject = ({
  number,
  projectName,
  rule,
  description,
  liveLink,
  gitHub,
}) => {
  return (
    <div className="max-w-7xl flex items-center mx-auto px-4">
    <div className="flex bg-white h-full gap-x-12">
    
    <div
      className="flex flex-col gap-y-20 md:sticky bg-white md:h-[100vh]"
      style={{
        top: 0,
      }}
    >
      <div className="my-auto text-[#4F5853] font-light">
        <div className="bg-[#F5F5F5] rounded-full w-10 aspect-square md:flex hidden items-center">
          <p className="mx-auto text-lg">{number}</p>
        </div>
        <div className="flex flex-col md:py-28 py-0">
          <p className="text-5xl ml-4">{projectName}</p>
          <div className="flex mt-12">
            <BsDot className="my-auto" size={30} color="#9EABA2" />
            <p className="text-3xl my-auto">{rule}</p>
          </div>
          <p className="ml-4 mt-4 text-xl">{description}</p>

          <div className="md:hidden flex flex-col justify-center pt-12 overflow-hidden">
            <SlideCarousel />
            <p className="text-sm mt-8 underline flex md:hidden">React App</p>
           
          </div>

          <div className="bg-[#F5F5F5] px-4 w-fit md:mt-12 mt-6 rounded-full flex py-2 mb-12 gap-x-2 md:mx-0 mx-auto">
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
        <p className="text-xl underline md:flex hidden">React App</p>
      </div>
    </div>

    <div className="md:flex flex-col hidden my-auto gap-y-20">
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
  );
};

const ProjectsList = () => {
  return (
    <div>
      
          
          <ModuleProject
            number="01"
            projectName="Dashboard TWD"
            rule="Front-End Developer"
            description="Multi-brand e-commerce design system for websites and native
                  mobile applications."
            liveLink="https://www.abola.pt/"
            gitHub="https://sureshmurali.github.io/"
          />

          
     
      {/* <SwiperProject /> */}
    </div>
  );
};
export default ProjectsList;
