const Repeat = () => {
  return (
    <div className="bg-[#80898E] bg-opacity-50 mx-auto md:w-96 w-full h-80 py-2 px-4 rounded-lg flex flex-col shrink-0 z-20 shadow-lg">
      <div className="flex justify-between">
        <div className="flex space-x-1">
          <div className="w-3 h-3 rounded-full bg-red-500 bg-opacity-70"></div>
          <div className="w-3 h-3 rounded-full bg-gray-50 bg-opacity-70"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 bg-opacity-70"></div>
        </div>
        <div>
          <p className="text-xs font-light text-white"> Motivation.txt</p>
        </div>
      </div>

      <div className="border-t my-auto">
        <p
          className="mt-4 flex flex-col gap-y-1 text-lg font-semibold text-gray-100"
          dangerouslySetInnerHTML={{
            __html: `
                (function repeat ()  {<br/>
                    <span> eat ();</span>
                    <span>code ();</span>
                    <span>workout ();</span>
                    <span>love_yourself();</span>
                    <span> sleep ();</span>
                })();
                `,
          }}
        ></p>
      </div>
      <p className="text-xs font-light text-white mt-auto flex">
        #Programming#Selfcare
      </p>
    </div>
  );
};

const Progress = () => {
  return (
    <div style={{ height: "100vh", maxHeight:'1000px'}}>
      <div className="max-w-7xl h-full flex mx-auto">
        <div className="flex md:flex-row flex-col items-center w-full px-4 justify-center gap-y-12">
          <div className="order-last md:order-first md:w-auto w-full">
            <Repeat />
          </div>
          <p className="lg:text-8xl md:text-7xl text-6xl font-semibold text-[#BDD1C5] opacity-50 lg:leading-tight leading-none md:ml-8">
            Slow Progress is better than no progress
          </p>
        </div>
      </div>
    </div>
  );
};
export default Progress;
