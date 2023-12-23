"use client";

import React, { useState, FormEvent } from "react";
import { useWebContext } from "@/context/ContextProvider";



const BlogBody = ({ type }) => {
  const { getResponse } = useWebContext();
  const [formData, setFormData] = useState({
    title: "",
    subheading: "",
  });
  const { title, subheading } = formData;

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
    } else if (!subheading) {
      setFormError({ subheading: "Subheading is required" });
      return;
    } else {
      setFormError({
        title: "",
        subheading: "",
      });

      let query = ""
      switch (type) {
        case "Blog paragraph":
          query = `Write blog paragraph having this title ${title} and the subhead is this ${subheading}. Now, I want response in html paragraph with strong and bold tag for headings and subheadings represented by size and bullets with numbers. After paragraph, use <br/> for linebreaks.`;
          getResponse(query);
          break;
        case "Blog section":
          query = `Write blog section having this title ${title} and the subhead is this ${subheading}. Now, I want response in html paragraph with strong and bold tag for headings and subheadings represented by size and bullets with numbers. After paragraph, use <br/> for linebreaks.`;
          getResponse(query);
          (query);
          break;
        case "Blog talkings points":
          query = `Write blog talkings points having this title ${title} and the subhead is this ${subheading}. Now, I want response in html paragraph with strong and bold tag for headings and subheadings represented by size and bullets with numbers. After paragraph, use <br/> for linebreaks.`;
          getResponse(query);
          (query);
          break;
        default:
          break;
      }

      setFormData({
        title: "",
        subheading: "",
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
              placeholder="i.e For instance: Ocean, Beach & Hotel"
              value={title}
              onChange={handleChange}
              className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
            />
          </div>
          {formError?.title && (
            <p className="text-red-400 text-[16px] p-2">{formError.title}</p>
          )}

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-white mb-2 font-bold">
              Subheading <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="i.e Enter your phone"
              name="subheading"
              value={subheading}
              onChange={handleChange}
              className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
            />
          </div>
          {formError?.subheading && (
            <p className="text-red-400 text-[16px] p-2">
              {formError.subheading}
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

export default BlogBody;
