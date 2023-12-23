"use client";

import { useWebContext } from "@/context/ContextProvider";
import React, { useState, FormEvent } from "react";


const NewsLetter = ({ type }) => {
  const { getResponse } = useWebContext();
  const [formData, setFormData] = useState({
    company: "",
    subject: "",
  });

  const { company, subject } = formData;

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
    if (!company) {
      setFormError({ company: "Company name is required" });
      return;
    } else if (!subject) {
      setFormError({ subject: "Subject is required" });
      return;
    } else {
      setFormError({
        company: "",
        subject: "",
      });

      const prompt = `Write a newsletter having this company name ${company} and related to this subject ${subject}. Response must be in html paragraph with strong tag for headings and <br/> for linebreaks.`;
      getResponse(prompt);

      setFormData({
        company: "",
        subject: "",
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
              Company <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="company"
              placeholder="i.e Youtube, Netflix, Disney"
              value={company}
              onChange={handleChange}
              className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
            />
          </div>
          {formError?.company && (
            <p className="text-red-400 text-[16px] p-2">{formError.company}</p>
          )}

          <div className="flex flex-col">
            <label htmlFor="name" className="text-white mb-2 font-bold">
              Subject <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="subject"
              placeholder="i.e Discover our newly released product "
              value={subject}
              onChange={handleChange}
              className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
            />
          </div>
          {formError?.subject && (
            <p className="text-red-400 text-[16px] p-2">{formError.subject}</p>
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

export default NewsLetter;
