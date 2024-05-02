import React from "react";

const Bottom = () => {
  return (
    <div className="bg-[#F8F8FF] h-auto md:h-[360px]">
      <div className="flex mx-10 md:mx-20 flex-col justify-center items-center">
        <h1 className="md:text-3xl mt-6 md:mt-20 font-bold text-xl ">
          Engage with Us
        </h1>
        <p className="mt-8 w-auto md:w-[900px] text-center text-sm md:text-lg">
          Discover how Candidate Compass can elevate your HR operations, making
          them more efficient, forward-thinking, and aligned with your
          organizational goals. Let’s connect and forge a path to excellence in
          HR together.
        </p>
        <button className="bg-[#0CB865] mb-3 px-2 py-2 mt-6 md:px-4 md:py-4 text-white font-bold">
          RQUEST A QUOTE
        </button>
      </div>
    </div>
  );
};

export default Bottom;
