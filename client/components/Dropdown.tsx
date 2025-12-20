import { useEffect, useState } from "react";
import { ICONS } from "@/constants/icons";
import Image from "next/image";

interface DropdownProps {
  id: string;
  labels: string[];
  values: string[] | number[];
  label: string;
  defaultValue?: string | number;
  children?: React.ReactNode;
}

export default function Dropdown({
  id,
  label,
  labels,
  values,
  defaultValue,
  children,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<
    string | number | undefined
  >(defaultValue);

  useEffect(() => {
    setSelectedOption(defaultValue);
  }, [defaultValue]);

  const handleOptionSelect = (option: string | number) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className="relative mb-4">
      <label htmlFor={id} className="font-semibold text-[7px] text-[#454545]">
        {label}
      </label>
      <select
        name={id}
        id={id}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="hidden"
      >
        {labels &&
          labels.map((option, index) => (
            <option key={index} value={values[index]}>
              {option}
            </option>
          ))}
      </select>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="flex items-center justify-between w-full min-h-4.75 border-[0.2px] border-[#888888] rounded-xs h-4.75 font-semibold text-left text-[7px] text-[#181818] px-1.5"
      >
        <span className="flex-1 overflow-hidden line-clamp-1">
          {selectedOption}
        </span>
        <Image
          src={ICONS.downArrowSm}
          alt="down arrow icon"
          className={`${isOpen ? "" : "rotate-180"}`}
        />
      </button>
      <ul
        className={`absolute top-full w-full max-h-32.25 bg-white x-shadow-5 rounded-[1px] overflow-y-scroll p-1 z-10 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {labels &&
          labels.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionSelect(values[index])}
              className={`font-semibold text-[7px] text-[#181818] rounded-xs h-6 cursor-pointer px-1 leading-6 ${
                selectedOption === values[index] ? "bg-[#F5F5F5]" : ""
              }`}
            >
              {option}
            </li>
          ))}
      </ul>
      {children}
    </div>
  );
}
