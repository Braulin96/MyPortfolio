const Skills = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div className="max-w-7xl h-full flex mx-auto">
        <div className="lg:flex items-center w-full px-4 justify-center my-auto">
          <p className="sm:text-8xl text-6xl font-semibold text-[#BDD1C5] opacity-50">
            Skills
          </p>
          <div className="flex justify-between flex-wrap w-full gap-x-10 md:text-xl text-base lg:mt-0 mt-6 gap-y-12">
            <ul className="font-extralight flex flex-col gap-y-4">
              <li>React JS</li>
              <li>JavaScript</li>
              <li>Html & CSS</li>
              <li>TypeScript</li>
            </ul>

            <ul className="font-extralight flex flex-col gap-y-4 lg:mt-16">
              <li>Resilience</li>
              <li>Problem-solving</li>
              <li>Analytical Abilities</li>
              <li>Adaptability</li>
            </ul>

            <ul className="font-extralight flex flex-col gap-y-4">
              <li>Responsiveness</li>
              <li>NPM</li>
              <li>Git/Git Hub</li>
              <li>Figma</li>
            </ul>
            <ul className="font-extralight flex flex-col gap-y-4 lg:mt-16">
              <li>TeamWork</li>
              <li>Continuous Learning</li>
              <li>Project Management</li>
              <li>Creativity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
