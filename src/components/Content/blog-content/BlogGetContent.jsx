"use client";

import React, { useState, FormEvent } from "react";
import { useWebContext } from "@/context/ContextProvider";


const BlogGetContent = ({ type }) => {
  const { getResponse } = useWebContext();
  const [formData, setFormData] = useState({
    content: "",
  });
  const { content } = formData;
  const [formError, setFormError] = useState<FormProps | null>(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      setFormError({ content: "Content is required" });
      return;
    } else {
      setFormError({
        content: "",
      });

      let query = "";
      switch (type) {
        case "Blog title":
          query = `Write blog title having this content ${content}. Now, I want response in strong tag for headings.`;
          getResponse(query);
          break;
        case "Content grammar":
          query = `Correct the grammar of this ${content}. Now, I want response in html paragraph with strong and bold tag for headings and subheadings represented by size and bullets with numbers. After paragraph, use <br/> for linebreaks.`;
          getResponse(query);
          break;
        case "Content rewriter":
          query = `Rewrite the this ${content} into something amazing. Now, I want response in html paragraph with strong and bold tag for headings and subheadings represented by size and bullets with numbers. After paragraph, use <br/> for linebreaks.`;
          getResponse(query);
          break;
        case "Content summary":
          query = `Write short summary of this ${content}. Now, I want response in html paragraph with strong and bold tag for headings and subheadings represented by size and bullets with numbers. After paragraph, use <br/> for linebreaks.`;
          getResponse(query);
          break;
        default:
          break;
      }

      setFormData({
        content: "",
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-start justify-center">
      <form onSubmit={handleSubmit} className="w-full justify-center flex border border-blue-900 backdrop-blur-md px-6 py-10 rounded-lg drop-shadow-lg">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col">
            <label htmlFor="message" className="text-white mb-2 font-bold">
              Content <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="The best places to visit in this summer"
              name="content"
              value={content}
              onChange={(e) => setFormData((prev) => ({
                ...prev,
                content: e.target.value
              }))}
              className="contact-textarea bg-gradient-to-b from-[#0F1333] to-[#1D203F]"
            ></textarea>
          </div>
          {formError?.content && (
            <p className="text-red-400 text-[16px] p-2">
              {formError.content}
            </p>
          )}

          <button type="submit" className="bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] hover:opacity-90 transition-all duration-300 py-3 px-9 text-white font-semibold rounded-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogGetContent;
