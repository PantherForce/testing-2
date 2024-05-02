"use client";
import React, { useState } from "react";
import ContentContainer from "./ContentContainer";

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const BlogForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [submissionemail, setSubmissionemail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailName, setEmailName] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    if (formData.email.endsWith("@gmail.com")) {
      setSubmissionemail("Please check your company email adress");
      return;
    }
    console.log(data);

    try {
      const response = await fetch(
        `https://script.google.com/macros/s/AKfycby4AZxgZTD_Khh6-v2m2V3NqL88fErRH5u6epdqRYW5K-Fbyaxl0aD7HLlTt-3IREQM/exec`,
        {
          method: "POST",
          body: data,
        }
      );
      if (response.ok) {
        setSubmissionMessage("Form data is successfully submitted.");
      } else {
        setSubmissionMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      setSubmissionMessage("An error occurred. Please try again.");
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === "FirstName" && !/\s/.test(value)) {
      setFirstName(value);
    }

    if (name === "lastName" && !/\s/.test(value)) {
      setLastName(value);
    }

    if (name === "email" && !/\s/.test(value)) {
      setEmailName(value);
    }
  };

  return (
    <>
      <div
        id="join"
        className="flex mt-4  md:mt-14 flex-col justify-center items-center"
      >
        <h2 className="text-3xl mb-4 font-bold">Join us</h2>
        <p className="text-xl mb-4 font-medium">Empower Your HR Journey</p>
        <p className="text-lbase mb-6 w-full md:w-[800px] text-center">
          We become part of a community that’s reshaping the world of human
          resources. Whether through our consulting services, strategic
          insights, or networking opportunities, HR Leaders Institute is your
          partner in HR excellence.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex flex-col justify-center items-center"
      >
        <div className="w-full flex flex-col justify-center items-center">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          ></label>
          <input
            type="text"
            name="FirstName"
            id="FirstName"
            placeholder="First name"
            value={firstName}
            required
            onChange={handleChange}
            className="mt-1 block w-1/2 border border-gray-300 p-2 shadow-sm"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          ></label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Your Designation"
            value={lastName}
            required
            onChange={handleChange}
            className="mt-1 block w-1/2 border border-gray-300 p-2 shadow-sm"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          ></label>
          <input
            type="email"
            name="email"
            value={emailName}
            placeholder="you@company.com"
            id="email"
            required
            onChange={handleChange}
            className="mt-1 block w-1/2 border border-gray-300 p-2 shadow-sm"
          />

          {submissionemail && (
            <div className="mt-2 text-[12px] text-red-500">
              {submissionemail}
            </div>
          )}
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <label
            htmlFor="countryCode"
            className="block text-sm font-medium text-gray-700"
          ></label>
          <div className="w-full flex flex-col justify-center items-center">
            <input
              type="textarea"
              name="phoneNumber"
              id="phoneNumber"
              onChange={handleChange}
              className="mt-1 block  w-1/2 border border-gray-300 p-2 shadow-sm"
              placeholder="Share your thoughts"
            />
          </div>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            id="submit"
            value="Submit"
            className="hover:bg-primary-dark bg-[#EA8219]  inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="mt-4 text-center text-green-700">
        {submissionMessage && <div>{submissionMessage}</div>}
      </div>
    </>
  );
};

export default BlogForm;
