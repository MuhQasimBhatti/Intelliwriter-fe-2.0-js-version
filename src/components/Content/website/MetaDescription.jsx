"use client";

import { useWebContext } from "@/context/ContextProvider";
import React, { useState, FormEvent } from "react";


const MetaDescription = ({ type }) => {
  const { getResponse } = useWebContext();

  const [formData, setFormData] = useState({
    title: "",
    keywords: "",
    description: "",
  });

  const { title, keywords, description } = formData;

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
      setFormError({ title: "Title is required" });
      return;
    } else if (!keywords) {
      setFormError({ keywords: "Keywords are required" });
      return;
    } else if (!description) {
      setFormError({ description: "Description is required" });
      return;
    } else {
      setFormError({
        title: "",
        keywords: "",
        description: "",
      });

      const query = `Write Meta Description having this title ${title} according to this keywords ${keywords} the Description is ${description}. Now, I want response in html paragraph with strong and bold tag for headings and subheadings represented by size and bullets with numbers. After paragraph, use <br/> for linebreaks.`;
      getResponse(query);

      setFormData({
        title: "",
        keywords: "",
        description: "",
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
              Title <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="title"
              placeholder="i.e The best summer destination"
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
              Keywords <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="keywords"
              placeholder="i.e Ocean, Beach & Hotel"
              value={keywords}
              onChange={handleChange}
              className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
            />
          </div>
          {formError?.keywords && (
            <p className="text-red-400 text-[16px] p-2">{formError.keywords}</p>
          )}

          <div className="flex flex-col">
            <label htmlFor="message" className="text-white mb-2 font-bold">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="The best places to visit in this summer"
              name="description"
              value={description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="contact-textarea bg-gradient-to-b from-[#0F1333] to-[#1D203F]"
            ></textarea>
          </div>
          {formError?.description && (
            <p className="text-red-400 text-[16px] p-2">
              {formError.description}
            </p>
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

export default MetaDescription;
