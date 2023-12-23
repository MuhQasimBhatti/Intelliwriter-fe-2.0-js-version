"use client";

import React, { ReactNode, useState, useEffect, FormEvent } from "react";
import Select from "react-select";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { TbSend } from "react-icons/tb";
import { FiEye, FiX } from "react-icons/fi";
import Image from "next/image";
import { HiOutlineDownload } from "react-icons/hi";
import axios from "axios";

type Image = {
  id: number;
  prompt: string;
  images: string[];
};

type Option = {
  value: string;
  label: string;
};

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [messageID, setMessageID] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [dots, setDots] = useState<number>(1);
  const [waitResponse, setWaitResponse] = useState<boolean>(false);
  const [progressImageUrls, setProgressImageUrls] = useState<Image[]>([]);
  const [prompt, setPrompt] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<Option>({
    value: "1:1",
    label: "1:1",
  });
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const tokens = process.env.NEXT_PUBLIC_IMAGE_API_KEY as string;
  const url1 = process.env.NEXT_PUBLIC_IMAGE_GENERATOR_URL1 as string;
  const url2 = process.env.NEXT_PUBLIC_IMAGE_GENERATOR_URL2 as string;

  useEffect(() => {
    const storedProgressImageUrls = sessionStorage.getItem("progressImageUrls");
    if (storedProgressImageUrls) {
      setProgressImageUrls(JSON.parse(storedProgressImageUrls));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      "progressImageUrls",
      JSON.stringify(progressImageUrls)
    );
  }, [progressImageUrls]);

  const handleDownload = async (imageUrl: string) => {
    try {
      const response = await axios.get(imageUrl, {
        responseType: "arraybuffer",
      });

      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `intelliwriter_ai`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  const handlePreview = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWaitResponse(true);
    setButtonDisabled(true);
    const inputValue =
      e.currentTarget.querySelector("input")!.value +
      ` --ar ${selectedOption.value}`;
    setPrompt(e.currentTarget.querySelector("input")!.value);
    try {
      const response = await axios.post(
        url1,
        {
          msg: inputValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokens}`,
          },
        }
      );

      setMessageID(response.data.messageId);
      setPrompt(e.currentTarget.querySelector("input")!.value);
    } catch (error) {
      console.error(error);
    }
  };

  const generateImages = async () => {
    try {
      const response = await axios.get(`${url2}/${messageID}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokens}`,
        },
      });
      setProgress(response.data.progress);
      if (response.data.progress < 100) {
        setTimeout(() => generateImages(), 1000);
      } else {
        setProgressImageUrls((prev) => [
          ...prev,
          {
            id: progressImageUrls.length,
            prompt: prompt,
            images: response.data.response.imageUrls,
          },
        ]);
        setMessageID("");
        setWaitResponse(false);
        setProgress(0);
        setButtonDisabled(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (messageID !== "" && waitResponse) {
      generateImages();
    }
    return () => {};
  }, [messageID]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots === 4 ? 1 : prevDots + 1));
    }, 400);
    return () => clearInterval(intervalId);
  }, []);

  const progressDone = (): string => {
    if (progress >= 90) {
      return "Almost done! 🙈";
    } else if (progress >= 75) {
      return "Finalizing image! 🤩";
    } else if (progress >= 50) {
      return "Processing on the query! 🙈";
    } else if (progress >= 30) {
      return "Start executing your prompt! 🤩";
    } else {
      return "Getting things ready! 😍";
    }
  };

  const option: Option[] = [
    { value: "1:1", label: "1:1" },
    { value: "1:2", label: "1:2" },
    { value: "1:3", label: "1:3" },
  ];

  const styles = {
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? "#00BBFE"
        : state.isSelected
        ? "#00BBFE"
        : "transparent",
    }),
  };

  return (
    <div className="layout">
      <main>{children}</main>
      <div className="absolute top-14 right-0 md:px-20 md:py-5 p-6 w-full lg:w-[calc(100%-250px)] text-white">
        <div className="flex justify-center w-full flex-col h-full text-white md:py-10 py-5 -mt-6">
          {/* Prompt box */}
          <div className="text-base text-slate-400 font-light p-2 flex items-center gap-2">
            <Link href="/user/home">Home</Link>
            <FaChevronRight className="text-sm" />
            <Link href="/user/social-media">Image Generator</Link>
          </div>
          <h2 className="text-3xl font-semibold p-2 pb-3">Image Generator</h2>
          <div className=" w-full flex flex-col justify-between items-center gap-5 py-5">
            {/* Prompt Form */}
            <form
              onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
              className="w-full border border-gray-600 rounded-md bg-[rgba(32,45,72,0.41)]"
            >
              {/* Upper prompt field */}
              <div className="w-full lg:p-5 p-3 border-b border-b-gray-600 flex md:flex-row flex-col gap-3 justify-between items-center">
                <input
                  className="w-11/12 md:py-5 p-2 outline-none bg-transparent"
                  placeholder="Describe your image, including objects, colors and locations!"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] font-semibold  px-4 py-2 rounded-md h-fit flex justify-between items-center gap-2 hover:opacity-90"
                  disabled={buttonDisabled}
                >
                  {buttonDisabled ? (
                    "Processing..."
                  ) : (
                    <>
                      Go <TbSend className="text-white text-xl" />
                    </>
                  )}
                </button>
              </div>

              {/* Lower portion */}
              <div className="xl:w-1/3 lg:1/3 md:w-1/2 w-full p-5">
                <div className="w-full flex md:flex-row flex-col gap-3 sm:justify-start justify-between items-center">
                  <label className="opacity-60 font-thin text-sm">
                    Aspect Ratio
                  </label>
                  <Select
                    className="w-[120px]"
                    defaultValue={selectedOption}
                    onChange={(e) => setSelectedOption(e as Option)}
                    options={option}
                    styles={styles}
                  />
                </div>
              </div>
            </form>

            {/* Response box */}
            {waitResponse && (
              <div className="w-full flex flex-col items-center justify-center">
                <div className="text-center flex items-center gap-2">
                  <span className="font-thin py-5">
                    {progress}% - {progressDone()}
                  </span>
                  <div>
                    {Array.from({ length: dots }).map((_, index) => (
                      <span key={index}>.</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center sm:w-fit w-full">
                  <div className="sm:grid w-full flex flex-col justify-center xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 lg:gap-10px gap-5 py-2">
                    <div className="bg-[rgba(32,45,72,0.41)] lg:w-[235px] lg:h-[235px] md:w-[250px] md:h-[250px] sm:w-[220px] sm:h-[220px] w-full h-[350px] rounded-lg card-reload"></div>
                    <div className="bg-[rgba(32,45,72,0.41)] lg:w-[235px] lg:h-[235px] md:w-[250px] md:h-[250px] sm:w-[220px] sm:h-[220px] w-full h-[350px] rounded-lg card-reload"></div>
                    <div className="bg-[rgba(32,45,72,0.41)] lg:w-[235px] lg:h-[235px] md:w-[250px] md:h-[250px] sm:w-[220px] sm:h-[220px] w-full h-[350px] rounded-lg card-reload"></div>
                    <div className="bg-[rgba(32,45,72,0.41)] lg:w-[235px] lg:h-[235px] md:w-[250px] md:h-[250px] sm:w-[220px] sm:h-[220px] w-full h-[350px] rounded-lg card-reload"></div>
                  </div>
                </div>
              </div>
            )}
            {progressImageUrls.length < 1
              ? ""
              : progressImageUrls
                  .slice()
                  .reverse()
                  .map((img) => (
                    <div
                      key={img.id}
                      className="flex items-center justify-center flex-col gap-2"
                    >
                      <p className="opacity-70">&quot;{img.prompt}&quot;</p>
                      <div className="sm:grid w-full flex flex-col xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 lg:gap-10px gap-5 py-2">
                        {img.images.map((item, i) => (
                          <div
                            key={i}
                            className="md:w-[220px] sm:w-[240px] w-full rounded-lg overflow-hidden relative group"
                          >
                            <img src={item} alt={`Image ${i}`} />

                            <div className="w-full h-full absolute top-0 left-0 flex items-end justify-end gap-2 group-hover:opacity-100 opacity-0 transition-all duration-200 bg-gradient-to-t from-0% from-black/60 to-transparent p-3">
                              <FiEye
                                className="text-white text-2xl cursor-pointer"
                                onClick={() => handlePreview(item)}
                              />
                              <HiOutlineDownload
                                className="text-white text-2xl cursor-pointer"
                                onClick={() => handleDownload(item)}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
          </div>

          {/* Image Preview Modal */}
          {selectedImage && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
              <div className="md:h-4/5 md:w-auto w-4/5 relative z-10">
                <div className="rounded-md md:max-w-screen-md w-full h-full overflow-hidden">
                  <Image src={selectedImage} alt="Preview" fill />
                </div>
              </div>
              <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={handleCloseModal}
              >
                <FiX className="text-white  p-2 rounded-full text-5xl" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
