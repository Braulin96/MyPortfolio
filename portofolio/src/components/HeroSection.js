<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Shadows+Into+Light&family=Titillium+Web:wght@300;400;700&display=swap');
</style>;

// font-family: 'Open Sans', sans-serif;
// font-family: 'Shadows Into Light', cursive;
// font-family: 'Titillium Web', sans-serif;

const HeroSection = () => {
  return (
    <div>
      <div className="text-red-500 h-[800px] bg-blue-500">
        <div className="max-w-7xl bg-white mx-auto h-full flex flex-col">
          <div className="my-auto mx-auto text-center flex flex-col gap-y-4">
            <p
              className="text-7xl text-[#4F5853] font-thin"
              //style={{ fontFamily: "Shadows Into Light" }}
            >
              Braulin Pires
            </p>
            <p className="text-5xl text-[#4F5853] font-extralight"> Front-End Developer - Web Designer</p>
          </div>

          <div className="bg-[#F5F5F5] px-4 w-fit mx-auto rounded-full flex py-2 mb-12 gap-x-2">
            <button className="text-white mx-auto hover:bg-opacity-90 font-semibold w-fit bg-[#68736C] rounded-full px-8 py-1.5">
              Resume
            </button>
            <button className="my-auto px-2 text-[#5E6460] font-semibold">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
