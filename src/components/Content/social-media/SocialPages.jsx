"use client";

import React, { useState, FormEvent } from "react";
import { useWebContext } from "@/context/ContextProvider";

const SocialPages = ({ type }) => {
  const { getResponse } = useWebContext();
  const [formData, setFormData] = useState({
    description: "",
  });
  const { description } = formData;
  const [formError, setFormError] = useState<FormProps | null>(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) {
      setFormError({ description: "Description is required" });
      return;
    } else {
      setFormError({
        description: "",
      });

      let query = "";
      switch (type) {
        case "Hashtags":
          query = `Generate hashtags according to this description ${description}. Response should be in html paragraph with heading "HashTags:" in bold with linebreak.`;
          getResponse(query);
          break;
        case "Social post":
          query = `Generate social posts ready to be published on social platforms according to this description ${description}. I need response in html paragraph with bold strong in social media post format with emojis. Use linebreaks after paragraph terminates.`;
          getResponse(query);
          break;
        case "Social post caption":
          query = `Generate social posts caption ready to grab attention according to this description ${description}. Now, I want response in html paragraph with strong and bold tag for headings and subheadings represented by size and bullets with numbers. After paragraph, use <br/> for linebreaks.`;
          getResponse(query);
          break;
        case "Tweet":
          query = `Generate engaging tweets according to this description ${description}. Now, I want response in html paragraph with strong and bold tag for headings and subheadings. After paragraph, use <br/> for linebreaks.`;
          getResponse(query);
          break;
        case "Tweet thread":
          query = `Generate engaging twitter thread according to this description ${description}. Now, I want response in html paragraph with strong and bold tag for headings and subheadings represented by size and bullets with numbers. After paragraph, use <br/> for linebreaks.`;
          getResponse(query);
          break;
        case "Video description":
          query = `Generate compelling video descriptions according to this description ${description}. Now, I want response in html paragraph with strong and bold tag for headings and subheadings represented by size and bullets with numbers. After paragraph, use <br/> for linebreaks.`;
          getResponse(query);
          break;
        case "Video script":
          query = `Generate compelling video script according to this description ${description}. Now, I want response in html paragraph with strong and bold tag for headings and subheadings represented by size and bullets with numbers. After paragraph, use <br/> for linebreaks.`;
          getResponse(query);
          break;
        case "Video title":
          query = `Generate compelling video titles according to this description ${description}. Now, I want response in html paragraph with strong and bold tag for headings and subheadings represented by size and bullets with numbers. After paragraph, use <br/> for linebreaks.`;
          getResponse(query);
          break;
        default:
          break;
      }
      
      setFormData({
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
            <label htmlFor="message" className="text-white mb-2 font-bold">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="i.e We strive to the best when it comes to content creation "
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

export default SocialPages;
