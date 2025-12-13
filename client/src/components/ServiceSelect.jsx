import { useState } from 'react';
import downArrowIcon from '../assets/icons/down-arrow-sm.svg';
import xMarkIcon from '../assets/icons/x-mark-sm.svg';
import userIcon from '../assets/icons/user-plus.svg';
import bankIcon from '../assets/icons/bank.svg';
import fileIcon from '../assets/icons/file.svg';
import lightIcon from '../assets/icons/light.svg';
import locationIcon from '../assets/icons/location.svg';
import calenderIcon from '../assets/icons/calendar.svg';
import certificateIcon from '../assets/icons/certificate.svg';
import vanIcon from '../assets/icons/van.svg';
import supportIcon from '../assets/icons/support.svg';

export default function ServiceSelect() {
     const [isOpen, setIsOpen] = useState(false);
     const [selectedOption, setSelectedOption] = useState([]);

     const handleOptionSelect = (option) => {
          setSelectedOption((prev) => {
               if (!prev.includes(option)) {
                    return [...prev, option];
               }
               return prev;
          });
          setIsOpen(false);
     }

     const handleRemoveOption = (option) => {
          setSelectedOption((prev) => prev.filter((item) => item !== option));
     }
     return (
          <div className="relative">
               <label htmlFor="additionalOfferings" className="font-semibold text-[7px] text-[#454545]">Service Offerings</label>
               <input name="additionalOfferings" id="additionalOfferings" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="hidden">
               </input>
               <div onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full min-h-4.75 border-[0.2px] border-[#888888] rounded-xs font-semibold text-left text-[7px] text-[#454545] px-1.5 py-1">
                    <div className="flex-1 flex flex-wrap gap-1">
                         {selectedOption.length > 0 && selectedOption.map((option, index) => (
                              <p key={index} className="flex items-center gap-2 h-3.5 rounded-xs bg-[#F5F5F5] px-1">{option} <button onClick={() => handleRemoveOption(option)} type="button"><img src={xMarkIcon} alt="x mark icon" /></button></p>
                         ))}
                    </div>
                    <img src={downArrowIcon} alt="down arrow icon" className={`${isOpen ? '' : 'rotate-180'}`} />
               </div>
               <ul className={`absolute top-full w-full max-h-32.25 bg-white x-shadow-5 rounded-[1px] overflow-y-scroll p-1 z-10 ${isOpen ? 'block' : 'hidden'}`}>
                    <li onClick={() => handleOptionSelect("Company Secretary Subscription")} className={`flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${selectedOption.includes("Company Secretary Subscription") ? 'bg-[#F5F5F5]' : ''}`}>
                         <img src={userIcon} alt="user icon" />
                         <div>
                              <h6 className="font-semibold text-[7px] text-[#181818]">Company Secretary Subscription</h6>
                              <p className="font-semibold text-[5.5px] text-[#888888] -mt-px">Enjoy 1 month free Company Secretary Subscription</p>
                         </div>
                    </li>
                    <li onClick={() => handleOptionSelect("Opening of a Bank Account")} className={`flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${selectedOption.includes("Opening of a Bank Account") ? 'bg-[#F5F5F5]' : ''}`}>
                         <img src={bankIcon} alt="user icon" />
                         <div>
                              <h6 className="font-semibold text-[7px] text-[#181818]">Opening of a Bank Account</h6>
                              <p className="font-semibold text-[5.5px] text-[#888888] -mt-px">Complimentary Corporate Bank Account Opening</p>
                         </div>
                    </li>
                    <li onClick={() => handleOptionSelect("Access Company Records and SSM Forms")} className={`flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${selectedOption.includes("Access Company Records and SSM Forms") ? 'bg-[#F5F5F5]' : ''}`}>
                         <img src={fileIcon} alt="user icon" />
                         <div>
                              <h6 className="font-semibold text-[7px] text-[#181818]">Access Company Records and SSM Forms</h6>
                              <p className="font-semibold text-[5.5px] text-[#888888] -mt-px">24/7 Secure Access to Statutory Company Records</p>
                         </div>
                    </li>
                    <li onClick={() => handleOptionSelect("Priority Filling")} className={`flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${selectedOption.includes("Priority Filling") ? 'bg-[#F5F5F5]' : ''}`}>
                         <img src={lightIcon} alt="user icon" />
                         <div>
                              <h6 className="font-semibold text-[7px] text-[#181818]">Priority Filling</h6>
                              <p className="font-semibold text-[5.5px] text-[#888888] -mt-px">Documents are prioritized for submission and swift processing - within 24 hours</p>
                         </div>
                    </li>
                    <li onClick={() => handleOptionSelect("Registered Office Address Use")} className={`flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${selectedOption.includes("Registered Office Address Use") ? 'bg-[#F5F5F5]' : ''}`}>
                         <img src={locationIcon} alt="user icon" />
                         <div>
                              <h6 className="font-semibold text-[7px] text-[#181818]">Registered Office Address Use</h6>
                              <p className="font-semibold text-[5.5px] text-[#888888] -mt-px">Use of SSM-Compliant Registered Office Address with Optional Mail Forwarding</p>
                         </div>
                    </li>
                    <li onClick={() => handleOptionSelect("Compliance Calendar Setup")} className={`flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${selectedOption.includes("Compliance Calendar Setup") ? 'bg-[#F5F5F5]' : ''}`}>
                         <img src={calenderIcon} alt="user icon" />
                         <div>
                              <h6 className="font-semibold text-[7px] text-[#181818]">Compliance Calendar Setup</h6>
                              <p className="font-semibold text-[5.5px] text-[#888888] -mt-px">Get automated reminders for all statutory deadlines</p>
                         </div>
                    </li>
                    <li onClick={() => handleOptionSelect("First Share Certificate Issued Free")} className={`flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${selectedOption.includes("First Share Certificate Issued Free") ? 'bg-[#F5F5F5]' : ''}`}>
                         <img src={certificateIcon} alt="user icon" />
                         <div>
                              <h6 className="font-semibold text-[7px] text-[#181818]">First Share Certificate Issued Free</h6>
                              <p className="font-semibold text-[5.5px] text-[#888888] -mt-px">Receive your company’s first official share certificate at no cost </p>
                         </div>
                    </li>
                    <li onClick={() => handleOptionSelect("CTC Delivery & Courier Handling")} className={`flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${selectedOption.includes("CTC Delivery & Courier Handling") ? 'bg-[#F5F5F5]' : ''}`}>
                         <img src={vanIcon} alt="user icon" />
                         <div>
                              <h6 className="font-semibold text-[7px] text-[#181818]">CTC Delivery & Courier Handling</h6>
                              <p className="font-semibold text-[5.5px] text-[#888888] -mt-px">Have your company documents and certified copies delivered securely to you</p>
                         </div>
                    </li>
                    <li onClick={() => handleOptionSelect("Chat Support")} className={`flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${selectedOption.includes("Chat Support") ? 'bg-[#F5F5F5]' : ''}`}>
                         <img src={supportIcon} alt="user icon" />
                         <div>
                              <h6 className="font-semibold text-[7px] text-[#181818]">Chat Support</h6>
                              <p className="font-semibold text-[5.5px] text-[#888888] -mt-px">Always-On Chat Support for Compliance, Filing, and General Queries</p>
                         </div>
                    </li>
               </ul>
          </div>
     );
}