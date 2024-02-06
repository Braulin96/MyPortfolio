const MyProjects = () => {
  return (
    <div style={{ height: "100vh", maxHeight:'1000px'}}>
      <div className="max-w-7xl h-full flex items-center justify-center mx-auto ">
        <div className="lg:flex items-center justify-center mx-auto px-4">
          <p className="sm:text-8xl text-6xl font-semibold text-primary-gray lg:leading-tight leading-none order-last">
            My
            <br />
            Projects
          </p>
          <p className="sm:text-4xl text-2xl text-secondary-gray font-extralight z-20 lg:mt-12 mt-6">
            Focused in turn ideas into visually striking websites with a focus
            on exceptional
            <span className="font-normal ml-2 text-primary-green">user experiences</span>.
          </p>
        </div>
      </div>
    </div>
  );
};
export default MyProjects;
