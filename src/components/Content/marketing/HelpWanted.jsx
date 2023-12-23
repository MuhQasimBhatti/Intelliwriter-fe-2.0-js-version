"use client";

import { useWebContext } from "@/context/ContextProvider";
import React, { useState, FormEvent } from "react";

const HelpWanted = ({ type }) => {
  const { getResponse } = useWebContext();

  const [formData, setFormData] = useState({
    title: "",
    name: "",
    location: "",
  });

  const { title, name, location } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formError, setFormError] = useState<FormProps | null>(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      setFormError({ title: "Job title is required" });
      return;
    } else if (!name) {
      setFormError({ name: "Company name is required" });
      return;
    } else if (!location) {
      setFormError({ location: "Company's Location is required" });
      return;
    } else {
      setFormError({
        title: "",
        name: "",
        location: "",
      });

      const prompt = `Write a Help wanted ad having this title ${title} and the company name is this ${name} also with the company location ${location}. Response must be in html paragraph with strong tag for headings and <br/> for linebreaks.`;
      getResponse(prompt);

      setFormData({
        title: "",
        name: "",
        location: "",
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-start justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full justify-center flex border border-blue-900 backdrop-blur-md px-6 py-10 rounded-lg drop-shadow-lg"
      >
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white mb-2 font-bold">
              Job Title <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="title"
              placeholder="i.e Enter your job title"
              value={title}
              onChange={handleChange}
              className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
            />
          </div>
          {formError?.title && (
            <p className="text-red-400 text-[16px] p-2">{formError.title}</p>
          )}

          <div className="flex flex-col">
            <label htmlFor="name" className="text-white mb-2 font-bold">
              Company Name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="name"
              placeholder="i.e Enter your company name"
              value={name}
              onChange={handleChange}
              className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
            />
          </div>
          {formError?.name && (
            <p className="text-red-400 text-[16px] p-2">{formError.name}</p>
          )}

          <div className="flex flex-col">
            <label htmlFor="location" className="text-white mb-2 font-bold">
              Company's Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="i.e Enter company's location"
              name="location"
              value={location}
              onChange={handleChange}
              className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
            />
          </div>
          {formError?.location && (
            <p className="text-red-400 text-[16px] p-2">{formError.location}</p>
          )}

          <button
            type="submit"
            className="bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] hover:opacity-90 transition-all duration-300 py-3 px-9 text-white font-semibold rounded-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HelpWanted;
