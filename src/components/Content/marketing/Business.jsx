"use client";

import { useWebContext } from "@/context/ContextProvider";
import React, { useState, FormEvent } from "react";

const Business = ({ type }) => {
  const { getResponse } = useWebContext();

  const [formData, setFormData] = useState({
    tagline: "",
    purpose: "",
  });

  const { tagline, purpose } = formData;

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
    if (!tagline) {
      setFormError({ tagline: "Business name is required" });
      return;
    } else if (!purpose) {
      setFormError({ purpose: "Business purpose is required" });
      return;
    } else {
      setFormError({
        tagline: "",
        purpose: "",
      });

      const prompt = `Write a business tagline having this tagline ${tagline} for the purpose ${purpose}. Response must be in html paragraph with strong tag for headings and <br/> for linebreaks.`;
      getResponse(prompt);

      setFormData({
        tagline: "",
        purpose: "",
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-start justify-center">
      <form onSubmit={handleSubmit} className="w-full justify-center flex border border-blue-900 backdrop-blur-md px-6 py-10 rounded-lg drop-shadow-lg">
        <div className="flex flex-col gap-4 w-full">

          <div className="flex flex-col">
            <label htmlFor="name" className="text-white mb-2 font-bold">
              Business Tagline <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="tagline"
              placeholder="i.e Enter business name"
              value={tagline}
              onChange={handleChange}
              className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
            />
          </div>
          {formError?.tagline && (
            <p className="text-red-400 text-[16px] p-2">
              {formError.tagline}
            </p>
          )}

          <div className="flex flex-col">
            <label htmlFor="name" className="text-white mb-2 font-bold">
              Business Purpose <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="purpose"
              placeholder="i.e Describe your business purpose"
              value={purpose}
              onChange={handleChange}
              className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
            />
          </div>
          {formError?.purpose && (
            <p className="text-red-400 text-[16px] p-2">
              {formError.purpose}
            </p>
          )}

          {/* <div className="flex flex-col">
              <label htmlFor="message" className="text-white mb-2 font-bold">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Enter your message"
                value={title}
                onChange={handleChange}
                className="contact-textarea bg-gradient-to-b from-[#0F1333] to-[#1D203F]"
              ></textarea>
            </div>
            {formError?.subheading && (
              <p className="text-red-400 text-[16px] p-2">
                {formError.subheading}
              </p>
            )} */}

          <button type="submit" className="bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] hover:opacity-90 transition-all duration-300 py-3 px-9 text-white font-semibold rounded-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Business;
