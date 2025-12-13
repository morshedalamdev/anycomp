import { useState } from 'react';
import downArrowIcon from '../assets/icons/down-arrow-sm.svg';

export default function Dropdown({ id, list, label, defaultValue }) {
     const [isOpen, setIsOpen] = useState(false);
     const [selectedOption, setSelectedOption] = useState(defaultValue);

     const handleOptionSelect = (option) => {
          setSelectedOption(option);
          setIsOpen(false);
     }
     return (
          <div className="relative">
               <label htmlFor={id} className="font-semibold text-[7px] text-[#454545]">{label}</label>
               <select name={id} id={id} value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="hidden">
                    {list && list.map((option, index) => (
                         <option key={index} value={option}>{option}</option>
                    ))}
               </select>
               <button onClick={() => setIsOpen(!isOpen)} type="button" className="flex items-center justify-between w-full min-h-4.75 border-[0.2px] border-[#888888] rounded-xs h-4.75 font-semibold text-left text-[7px] text-[#181818] px-1.5">
                    <span className="flex-1 overflow-hidden line-clamp-1">{selectedOption}</span>
                    <img src={downArrowIcon} alt="down arrow icon" className={`${isOpen ? '' : 'rotate-180'}`} />
               </button>
               <ul className={`absolute top-full w-full max-h-32.25 bg-white x-shadow-5 rounded-[1px] overflow-y-scroll p-1 z-10 ${isOpen ? 'block' : 'hidden'}`}>
                    {list && list.map((option, index) => (
                         <li key={index} onClick={() => handleOptionSelect(option)} className={`font-semibold text-[7px] text-[#181818] rounded-xs h-6 cursor-pointer px-1 leading-6 ${selectedOption === option ? 'bg-[#F5F5F5]' : ''}`}>{option}</li>
                    ))}
               </ul>
          </div>
     );
}