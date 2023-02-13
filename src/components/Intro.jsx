import React from "react";

// A Component that holds the 'Intro' section
function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-5">
      <img src="/assets/WatercolorSplash.png" alt="watercolor-bg" className="absolute h-56"/>
      <div className="z-10">
        <h1 className="text-3xl md:text-5xl mb-1 md:mb-4">Dylan Freeman</h1>
        <p className="text-base md:text-xl mb-4 font-bold">
          Software Engineer and Web Developer
        </p>
        <p className="text-sm max-w-xl mb-6 font-medium">
          “The bird fights its way out of the egg. The egg is the world. Who
          would be born must first destroy a world." ― Hermann Hesse
        </p>
      </div>
    </div>
  );
}

export default Intro;
