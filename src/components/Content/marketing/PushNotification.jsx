"use client";

import React, { useState, FormEvent } from "react";
import { useWebContext } from "@/context/ContextProvider";




const PushNotification = ({ type }) => {
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

      const prompt = `Write a push notification having the description ${description}. Response must be in html paragraph with strong tag for headings and <br/> for linebreaks.`;
      getResponse(prompt);

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
                  content: e.target.value,
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

export default PushNotification;
