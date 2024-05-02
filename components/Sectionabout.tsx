import React from "react";
import Image from "next/image";
import img from "../public/img/Picture.svg";

const Sectionabout = () => {
  return (
    <div id="about" className="md:mx-52 mx-10 mb-4 md:mb-10">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 w-full">
          <Image
            className="rounded-3xl object-cover md:w-[400px] 2xl:w-[550px] h-[450px]"
            src={img}
            alt=""
          />
        </div>
        <div className="md:w-1/2 w-full">
          <div className="flex flex-col md:gap-12">
            <h1 className="text-xl mt-4 md:mt-0 md:text-3xl font-bold">
              About Us
            </h1>
            <p className="text-lg">
              At Candidate Compass, we believe in revolutionizing the
              recruitment process by humanizing those aspects that need human
              intervention. Gone are the days of merely skimming through
              profiles; we are here to help you find the perfect fit for your
              team.Our innovative approach ensures that you connect with
              individuals who not only have the right skills but also align with
              your company culture and values.With Candidate Compass, your
              talent search will always be different again!
            </p>
            <p className="text-[#0CB865] text-xl">Contact us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionabout;
