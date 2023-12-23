"use client";

import React, { ReactNode, useState, useEffect, useRef } from "react";
import { ChatItem } from "react-chat-elements";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import axios from "axios";
import { TbSend } from "react-icons/tb";

type ChatItemPosition = "left" | "right";
type ChatItemType = "text" | "image";

interface ChatItemProps {
  id?: number;
  position: ChatItemPosition;
  type: ChatItemType;
  title: string;
  subtitle: string;
  date: Date;
  avatar?: string;
}

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const Chat: React.FC<ChatItemProps | any> = ({ message, id }) => (
    <ChatItem {...message} key={id} className="bg-primary-two" />
  );

  const [messages, setMessages] = useState([
    {
      position: "right",
      type: "text",
      title: "Intelliwriter",
      subtitle: `Hi John, tell me how can i assist you today!`,
      date: new Date(),
      avatar: "/logo-min.png",
    },
  ]);

  const [inputText, setInputText] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollToBottom = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        // container.scrollTop = container.scrollHeight;
      }
    };

    scrollToBottom();
  }, [messages]);
  const [disableCards,setDisableCards] = useState("false");
  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;
    const userMessage = {
      position: "right",
      type: "text",
      title: "john@robx.ai",
      subtitle: inputText,
      date: new Date(),
      avatar: "/user.png",
    };

    setDisableCards("true");
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputText("");
    
    try {
      const response = await axios.get(`/api/gpt/chat?q=${inputText}`);
      const aiReply = response.data;

      const aiMessage = {
        position: "left",
        type: "text",
        title: "Intelliwriter",
        subtitle: aiReply,
        date: new Date(),
        avatar: "/logo-min.png",
      };

      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      alert(error);
    }
  };

  const handleInputChange = (event: any) => {
    setInputText(event.target.value);
  };
  interface cardProps {
    heading: string;
    text1: string;
    text2: string;
    text3: string;
  }

  const Card: React.FC<cardProps> = ({ heading, text1, text2, text3 }) => (
    <div className="bg-primary rounded-lg py-5 pl-5 pr-24 w-fit">
      <div className="text-3xl mb-1 font-semibold">
        {heading}
      </div>
      <div className="rounded-lg text-lg my-2 p-3 w-fit bg-primary-two text-white">
        {text1}
      </div>
      <div className="rounded-lg text-lg my-2 p-3 w-fit bg-primary-two text-white">
        {text2}
      </div>
      <div className="rounded-lg text-lg my-2 p-3 w-fit bg-primary-two text-white">
        {text3}
      </div>
    </div>
  );

  return (
    <div className="layout">
      <main>{children}</main>

      <div className="absolute top-14 right-0 md:px-20 md:py-10 p-6 w-full lg:w-[calc(100%-250px)] mx-auto text-white">
        <div className="text-base text-slate-400 font-light p-2 flex items-center gap-2">
          <Link href="/user/home">Home</Link>
          <FaChevronRight className="text-sm" />
          <Link href="/user/chat">Chat</Link>
        </div>

        <h2 className="text-3xl font-semibold p-2 pb-3">Chat</h2>
        <div className="mx-auto sm:p-10 py-5 bg-primary-two rounded-lg">
          <div
            className="space-y-4 h-[52vh] overflow-y-auto flex w-full gap-3 flex-col"
            ref={containerRef}
          >
            {messages.map((message, index) => (
              <Chat message={message} key={index} />
            ))}
            <div className={`w-[100%] h-[80%] flex items-center justify-center gap-4 ${disableCards==="false" ? "":"hidden"}`}>
              <Card heading="Percept" text1="Megladon" text2="Robotics" text3="Titanic" />
              <Card heading="Generate" text1="Megladon" text2="Robotics" text3="Report" />
              <Card heading="Explore" text1="Sunny Beach" text2="The Last Corner" text3="Dark World" />
            </div>
          </div>
          <div>
            <div className="input-container w-full flex mt-10">
              <input
                type="text"
                placeholder="Type to start a chat..."
                value={inputText}
                className="w-full border-opacity-40 rounded-full bg-primary-two focus:outline-1-none border-gray-200 border outline-none px-3 mx-3"
                onChange={handleInputChange}
                onKeyUp={(event) => {
                  if (event.key === "Enter") {
                    handleSendMessage();
                  }
                }}
              />

              <button
                onClick={handleSendMessage}
                className="mx-2 flex gap-1 px-3 py-2 rounded-xl font-medium bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] text-white"
              >
                Send <TbSend className="text-white text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
