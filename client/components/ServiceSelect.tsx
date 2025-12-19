"use client";

import { useState } from "react";
import Image from "next/image";
import { ICONS } from "@/constants/icons";

interface ServiceSelectProps {
  selectedOption: string[];
  setSelectedOption: React.Dispatch<React.SetStateAction<string[]>>;
  children?: React.ReactNode;
}

export default function ServiceSelect({
  selectedOption,
  setSelectedOption,
  children,
}: ServiceSelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionSelect = (option: string) => {
    setSelectedOption((prev) => {
      if (!prev.includes(option)) {
        return [...prev, option];
      }
      return prev;
    });
    setIsOpen(false);
  };

  const handleRemoveOption = (option: string) => {
    setSelectedOption((prev) => prev.filter((item) => item !== option));
  };
  return (
    <div className="relative mb-4">
      <p className="font-semibold text-[7px] text-[#454545]">
        Service Offerings
      </p>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full min-h-4.75 border-[0.2px] border-[#888888] rounded-xs font-semibold text-left text-[7px] text-[#454545] px-1.5 py-1"
      >
        <div className="flex-1 flex flex-wrap gap-1">
          {selectedOption.length > 0 &&
            selectedOption.map((option, index) => (
              <p
                key={index}
                className="flex items-center gap-2 h-3.5 rounded-xs bg-[#F5F5F5] px-1"
              >
                {option}{" "}
                <button
                  onClick={() => handleRemoveOption(option)}
                  type="button"
                >
                  <Image src={ICONS.xMark} alt="x mark icon" />
                </button>
              </p>
            ))}
        </div>
        <Image
          src={ICONS.downArrowSm}
          alt="down arrow icon"
          className={`${isOpen ? "" : "rotate-180"}`}
        />
      </div>
      <ul
        className={`absolute top-full w-full max-h-32.25 bg-white x-shadow-5 rounded-[1px] overflow-y-scroll p-1 z-10 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li
          onClick={() => handleOptionSelect("Company Secretary Subscription")}
          className={`flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${
            selectedOption.includes("Company Secretary Subscription")
              ? "bg-[#F5F5F5]"
              : ""
          }`}
        >
          <Image src={ICONS.user} alt="user icon" />
          <div>
            <h6 className="font-semibold text-[7px] text-[#181818]">
              Company Secretary Subscription
            </h6>
            <p className="font-semibold text-[5.5px] text-[#888888] -mt-px">
              Enjoy 1 month free Company Secretary Subscription
            </p>
          </div>
        </li>
        <li
          onClick={() => handleOptionSelect("Opening of a Bank Account")}
          className={`flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${
            selectedOption.includes("Opening of a Bank Account")
              ? "bg-[#F5F5F5]"
              : ""
          }`}
        >
          <Image src={ICONS.bank} alt="user icon" />
          <div>
            <h6 className="font-semibold text-[7px] text-[#181818]">
              Opening of a Bank Account
            </h6>
            <p className="font-semibold text-[5.5px] text-[#888888] -mt-px">
              Complimentary Corporate Bank Account Opening
            </p>
          </div>
        </li>
        <li
          onClick={() =>
            handleOptionSelect("Access Company Records and SSM Forms")
          }
          className={`flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${
            selectedOption.includes("Access Company Records and SSM Forms")
              ? "bg-[#F5F5F5]"
              : ""
          }`}
        >
          <Image src={ICONS.file} alt="user icon" />
          <div>
            <h6 className="font-semibold text-[7px] text-[#181818]">
              Access Company Records and SSM Forms
            </h6>
            <p className="font-semibold text-[5.5px] text-[#888888] -mt-px">
              24/7 Secure Access to Statutory Company Records
            </p>
          </div>
        </li>
        <li
          onClick={() => handleOptionSelect("Priority Filling")}
          className={`flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${
            selectedOption.includes("Priority Filling") ? "bg-[#F5F5F5]" : ""
          }`}
        >
          <Image src={ICONS.light} alt="user icon" />
          <div>
            <h6 className="font-semibold text-[7px] text-[#181818]">
              Priority Filling
            </h6>
            <p className="font-semibold text-[5.5px] text-[#888888] -mt-px">
              Documents are prioritized for submission and swift processing -
              within 24 hours
            </p>
          </div>
        </li>
        <li
          onClick={() => handleOptionSelect("Registered Office Address Use")}
          className={`flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${
            selectedOption.includes("Registered Office Address Use")
              ? "bg-[#F5F5F5]"
              : ""
          }`}
        >
          <Image src={ICONS.location} alt="user icon" />
          <div>
            <h6 className="font-semibold text-[7px] text-[#181818]">
              Registered Office Address Use
            </h6>
            <p className="font-semibold text-[5.5px] text-[#888888] -mt-px">
              Use of SSM-Compliant Registered Office Address with Optional Mail
              Forwarding
            </p>
          </div>
        </li>
        <li
          onClick={() => handleOptionSelect("Compliance Calendar Setup")}
          className={`flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${
            selectedOption.includes("Compliance Calendar Setup")
              ? "bg-[#F5F5F5]"
              : ""
          }`}
        >
          <Image src={ICONS.calender} alt="user icon" />
          <div>
            <h6 className="font-semibold text-[7px] text-[#181818]">
              Compliance Calendar Setup
            </h6>
            <p className="font-semibold text-[5.5px] text-[#888888] -mt-px">
              Get automated reminders for all statutory deadlines
            </p>
          </div>
        </li>
        <li
          onClick={() =>
            handleOptionSelect("First Share Certificate Issued Free")
          }
          className={`flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${
            selectedOption.includes("First Share Certificate Issued Free")
              ? "bg-[#F5F5F5]"
              : ""
          }`}
        >
          <Image src={ICONS.certificate} alt="user icon" />
          <div>
            <h6 className="font-semibold text-[7px] text-[#181818]">
              First Share Certificate Issued Free
            </h6>
            <p className="font-semibold text-[5.5px] text-[#888888] -mt-px">
              Receive your company’s first official share certificate at no cost{" "}
            </p>
          </div>
        </li>
        <li
          onClick={() => handleOptionSelect("CTC Delivery & Courier Handling")}
          className={`flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${
            selectedOption.includes("CTC Delivery & Courier Handling")
              ? "bg-[#F5F5F5]"
              : ""
          }`}
        >
          <Image src={ICONS.van} alt="user icon" />
          <div>
            <h6 className="font-semibold text-[7px] text-[#181818]">
              CTC Delivery & Courier Handling
            </h6>
            <p className="font-semibold text-[5.5px] text-[#888888] -mt-px">
              Have your company documents and certified copies delivered
              securely to you
            </p>
          </div>
        </li>
        <li
          onClick={() => handleOptionSelect("Chat Support")}
          className={`flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${
            selectedOption.includes("Chat Support") ? "bg-[#F5F5F5]" : ""
          }`}
        >
          <Image src={ICONS.support} alt="user icon" />
          <div>
            <h6 className="font-semibold text-[7px] text-[#181818]">
              Chat Support
            </h6>
            <p className="font-semibold text-[5.5px] text-[#888888] -mt-px">
              Always-On Chat Support for Compliance, Filing, and General Queries
            </p>
          </div>
        </li>
      </ul>
      {children}
    </div>
  );
}
