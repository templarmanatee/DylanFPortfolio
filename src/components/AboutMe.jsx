import React from "react";

// A Component that holds the 'About Me' modal
function AboutMe() {
  return (
    <div class="group absolute z-10">
      {/* <div class="w-32 group-hover:hidden border-stone-900">About Me</div>
      <div class="w-128px hidden group-hover:flex border-2 border-stone-400 bg-slate-100 rounded-md overflow-hidden">
        <img src="/assets/pictureOfMe.png" alt="" className="h-64 p-4 left-5" />
        <p className="flex flex-wrap">
          Hi! I'm Dylan, a 23-year old software developer. Currently I work in
          jewelry doing custom design and client consultation but not for too
          much longer. I have a passion for server architecture and put a lot of
          value into unique and creative designs. I'm currently in Asheville,
          North Carolina but open to relocation. Software development has been a
          passion of mine since I was a teenager writing "Hello World" scripts,
          but really fell in love with creating websites and learning as much as
          I possibly could this year. Outside of coding, I enjoy spending time
          out in the mountains here in the Appalachians and crafting bonsai
          trees. I also hold a deep love for all forms of music and would love
          to branch into the music streaming industry.
        </p>
      </div> */}
      <button
        data-popover-target="popover-no-arrow"
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Default popover
      </button>
      <div
        data-popover
        id="popover-no-arrow"
        role="tooltip"
        className="absolute z-10 invisible inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
      >
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Popover no arrow
          </h3>
        </div>
        <div className="px-3 py-2">
          <p>And here's some amazing content. It's very engaging. Right?</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
