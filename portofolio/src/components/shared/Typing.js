import React, { useState } from "react";
import TypeIt from "typeit-react";

const SuperStrong = ({ children }) => {
  return <strong style={{ fontSize: "80px" }}>{children}</strong>;
};

const Typing = () => {
  //const [buttonText, setButtonText] = useState("Freeze");
  const [instance, setInstance] = useState(null);

  return (
    <>
      {/* <div className="App">
        <TypeIt>This will be typed in a `span` element!</TypeIt>
      </div> */}
      <TypeIt>
        Weak text. <SuperStrong>Super strong text.</SuperStrong>
      </TypeIt>
      {/* <TypeIt
        options={{
          strings: ["This will be typed!"],
          speed: 10,
          waitUntilVisible: true,
        }}
      /> */}

      <TypeIt
        getBeforeInit={(instance) => {
          instance
            .type("Hi, I'm Alxe")
            .pause(750)
            .delete(2)
            .pause(500)
            .type("ex!");

          // Remember to return it!
          return instance;
        }}
      />

      {/* <TypeIt
                options={{ loop: true }}
                getAfterInit={(instance) => {
                    setInstance(instance);
                    return instance;
                }}
            >
                This will just keep on going.
            </TypeIt> */}
    </>
  );
};
export default Typing;
