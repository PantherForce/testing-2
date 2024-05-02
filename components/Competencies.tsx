import type { NextPage } from "next";
import Head from "next/head";

// Define the competency data type
type Competency = {
  title: string;
  description: string;
  contactText: string;
};

// Sample data for competencies
const competencies: Competency[] = [
  {
    title: "Innovation in Recruitment Technology",
    description:
      "We’re at the forefront of redefining recruitment with our cutting-edge technology and innovative solutions. From AI-powered candidate matching to predictive analytics, we leverage the latest advancements to stay ahead of the curve and deliver exceptional results for our clients.",
    contactText: "Contact us",
  },
  {
    title: "Personalization and Tailored Solutions",
    description:
      "We recognize that every company is unique, with its own set of hiring challenges and objectives. That’s why we offer personalized solutions tailored to meet your specific needs. Whether a small startup or a multinational corporation, we work closely with you to understand your requirements and provide customized solutions that drive success.",
    contactText: "Contact us",
  },
  {
    title: "Efficiency and Time-Saving Tools",
    description:
      "Streamline your talent search and save valuable time with our intuitive platform and efficient tools. From automated candidate screening to streamlined communication workflows, we help you eliminate manual tasks and focus on what matters most – finding the right talent for your team.",
    contactText: "Contact us",
  },
  {
    title: "Candidate-Centric Approach",
    description:
      "We prioritize the candidate experience, recognizing that happy candidates make for successful hires. By providing transparent communication, timely feedback, and a user-friendly application process, we foster positive interactions and build lasting relationships with candidates, enhancing your employer brand in the process.",
    contactText: "Contact us",
  },
];

const Competencies: NextPage = () => {
  return (
    <div id="services" className="px-4 py-8">
      <div className="mx-2 md:mx-52">
        <h1 className="text-3xl text-center mt-6  flex justify-center items-center font-bold mb-6 md:mb-12">
          Key Competencies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competencies.map((comp, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg md:text-2xl font-semibold text-green-600">
                {comp.title}
              </h2>
              <p className="mt-4 text-gray-600">{comp.description}</p>
              <button className="mt-14 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                {comp.contactText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competencies;
