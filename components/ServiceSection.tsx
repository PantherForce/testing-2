// components/ServiceSection.tsx
import React from "react";
import Image from "next/image";
import { services } from "./services";
import { Service } from "./service";
import ContentContainer from "./ContentContainer";

const ServiceSection: React.FC = () => {
  return (
    <div id="services" className="py-8 mx-8 md:mx-52">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`flex flex-col ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center gap-8 md:gap-16 mb-16`}
        >
          <div className="w-auto md:w-[600px]">
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={100}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col w-full md:[600px] md:flex-1">
            <h3 className="md:text-3xl text-lg text-black font-semibold mb-4">
              {service.title}
            </h3>
            <p className="mb-4">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;
