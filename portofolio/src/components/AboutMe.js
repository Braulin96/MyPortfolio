import React from "react";

function AboutMe() {
  return (
    <div className="text-red-500" style={{ height: "100vh" }}>
      <div className="max-w-7xl h-full flex items-center justify-center mx-auto ">
        <div className="lg:flex items-center justify-center mx-auto px-4">
          <p className="sm:text-8xl text-6xl font-semibold text-[#BDD1C5] opacity-50 lg:leading-tight leading-none">
            About
            <br />
            Me
          </p>
          <p className="sm:text-4xl text-2xl text-[#4F5853] font-extralight lg:-ml-36 lg:mt-12 mt-4 z-20">
            A front-End Developer who loves creating websites that are not only
            visually appealing but also
            <span className="font-normal ml-2">user-friendly</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
