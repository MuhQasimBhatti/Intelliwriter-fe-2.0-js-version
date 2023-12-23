"use client";

import { useWebContext } from "@/context/ContextProvider";
import React, { useState, FormEvent } from "react";


const Audience = ({ type }) => {
  const { getResponse} = useWebContext();
  const [formData, setFormData] = useState({
    product: "",
    audience: "",
  });

  const { product, audience } = formData;

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
    if (!product) {
      setFormError({ product: "Product is required" });
      return;
    } else if (!audience) {
      setFormError({ audience: "Audience is required" });
      return;
    } else {
      setFormError({
        product: "",
        audience: "",
      });

      let prompt = ""
      switch (type) {
        case "advertisement":
          prompt = `Write an advertisement having this title ${product} and the content is this ${audience}. Response must be in html paragraph with strong tag for headings and <br/> for linebreaks.`;
          getResponse(prompt);
          break;
        case "facebook-advertisement":
          prompt = `Write an advertisement for facebook based on the title ${product} and the content is this: "${audience}". Response contains html strong tag for title and sub-title and list points in numbers for listicles with <br /> linebreaks.`;
          getResponse(prompt);
          break;
        case "google-advertisement":
          prompt = `Write an advertisement for google based on title ${product} and the content is this:"${audience}". Response must be html paragraph with strong tag for headings and subheadings, list points in numbers & <br/> for linebreaks.`;
          getResponse(prompt);
          break;

        default:
          break;
      }
      setFormData({
        product: "",
        audience: "",
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-start justify-center">
      <form onSubmit={handleSubmit} className="w-full justify-center flex border border-blue-900 backdrop-blur-md px-6 py-10 rounded-lg drop-shadow-lg">
        <div className="flex flex-col gap-4 w-full">

          <div className="flex flex-col">
            <label htmlFor="name" className="text-white mb-2 font-bold">
              Product <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="product"
              placeholder="i.e Youtube, Netflix, Disney"
              value={product}
              onChange={handleChange}
              className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
            />
          </div>
          {formError?.product && (
            <p className="text-red-400 text-[16px] p-2">
              {formError.product}
            </p>
          )}

          <div className="flex flex-col">
            <label htmlFor="name" className="text-white mb-2 font-bold">
              Audience <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="audience"
              placeholder="i.e Musicians, filmakers, gamers"
              value={audience}
              onChange={handleChange}
              className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
            />
          </div>
          {formError?.audience && (
            <p className="text-red-400 text-[16px] p-2">
              {formError.audience}
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

export default Audience;
