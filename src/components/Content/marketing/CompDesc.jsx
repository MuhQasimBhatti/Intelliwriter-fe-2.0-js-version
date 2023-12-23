"use client";

import { useWebContext } from "@/context/ContextProvider";
import React, { useState, FormEvent } from "react";

interface Props {
  type: string;
}
interface FormProps {
  company?: string;
  description?: string;
}

const CompDesc = ({ type }: Props) => {
  const { getResponse } = useWebContext();

  const [formData, setFormData] = useState({
    company: "",
    description: "",
  });

  const { company, description } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formError, setFormError] = useState<FormProps | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!company) {
      setFormError({ company: "Company name is required" });
      return;
    } else if (!description) {
      setFormError({ description: "Description is required" });
      return;
    } else {
      setFormError({
        company: "",
        description: "",
      });

      let prompt = ""
      switch (type) {
        case "mission-statement":
          prompt = `Write a mission statement having this company ${company} and the description is this ${description}. Response must be in html paragraph with strong tag for headings and <br/> for linebreaks.`;
          getResponse(prompt);
          break;
        case "vision-statement":
          prompt = `Write a vision statement having this company ${company} and the description is this ${description}. Response must be in html paragraph with strong tag for headings and <br/> for linebreaks.`;
          getResponse(prompt);
          break;
        case "welcome-email":
          prompt = `Write a welcome email having this company ${company} and the description is this:"${description}". Response must be html paragraph with strong tag for headings and subheadings, list points in numbers & <br/> for linebreaks.`;
          getResponse(prompt);
          break;

        default:
          break;
      }
      setFormData({
        company: "",
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
            <label htmlFor="message" className="text-white mb-2 font-bold">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="i.e The best places to visit in this summer"
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

export default CompDesc;
