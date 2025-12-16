"use client";

import { useState } from 'react';
import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import { ICONS } from '@/constants/icons';

function Specialists() {
  const [actionsOpen, setActionsOpen] = useState("");

  return (
    <div className="flex h-screen">
      <aside className="flex flex-col">
        <div className="pt-7.75 pl-5.5">
          <h4 className="font-bold text-[11px] text-[#222222] pb-2">Profile</h4>
          <div className="flex flex-wrap gap-1">
            <Image src={IMAGES.user1} alt="user" className="w-5 h-5 rounded-full" />
            <div>
              <h5 className="text-[9px] font-semibold text-[#454545] -mt-0.5">Gwen Lam</h5>
              <p className="font-semibold text-[6px] text-[#002F70]">ST Comp Holdings Sdn Bhd</p>
            </div>
          </div>
        </div>
        <div className="pt-7.75">
          <h4 className="font-bold text-[7px] text-[#888888] pl-5.5 pb-1.5">Dashboard</h4>
          <ul className="px-0.75">
            <li><a href="" className="flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-white bg-[#002F70]">
              <Image src={ICONS.tag} alt="tag icon" />
              <span>Specialists</span>
            </a></li>
            <li><a href="" className="flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]">
              <Image src={ICONS.people} alt="people icon" />
              <span>Clients</span>
            </a></li>
            <li><a href="" className="flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]">
              <Image src={ICONS.order} alt="order icon" />
              <span>Service Orders</span>
            </a></li>
            <li><a href="" className="flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]">
              <Image src={ICONS.signature} alt="signature icon" />
              <span>eSignature</span>
            </a></li>
            <li><a href="" className="flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]">
              <Image src={ICONS.message} alt="message icon" />
              <span>Messages</span>
            </a></li>
            <li><a href="" className="flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]">
              <Image src={ICONS.invoice} alt="invoice icon" />
              <span>Invoices & Receipts</span>
            </a></li>
          </ul>
        </div>
        <div className="pt-15.5 px-0.75">
          <ul>
            <li><a href="" className="flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]">
              <Image src={ICONS.help} alt="help icon" />
              <span>Help</span>
            </a></li>
            <li><a href="" className="flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]">
              <Image src={ICONS.settings} alt="settings icon" />
              <span>Settings</span>
            </a></li>
          </ul>
        </div>
      </aside>
      <main className="flex-1 bg-[#F8F7FA]">
        <nav className="flex items-center justify-end bg-white h-7.5 mx-1.25 mt-3 pr-5 rounded-[1px] x-shadow">
          <div className="relative mr-1 h-fit">
            <Image src={ICONS.mail} alt="mail icon" />
            </div>
          <div className="relative mr-1 h-fit">
            <Image src={ICONS.ball} alt="notification icon" />
            <span className="absolute -top-px -right-px flex items-center justify-center w-1 h-1 rounded-full bg-[#DF0D0D] text-white text-[3px]">4</span>
            </div>
          <Image src={IMAGES.user2} alt="" className="w-2.75 h-2.75 rounded-full object-cover" />
        </nav>
        <div className="px-1.25 py-3">
          <h4 className="font-semibold text-[7px] text-[#454545]">Dashboard</h4>
          <h3 className="font-bold text-[13px] text-[#252525]">Services</h3>
        </div>
        <div className="bg-white rounded-[3px] px-2">
          <div className="pt-2 px-3">
            <h2 className="font-bold text-[15px]">Specialists</h2>
            <p className="font-semibold text-[7px] text-[#888888]">Create and publish your services for Client’s & Companies</p>
          </div>
          <div className="my-4 border-b-[0.5px] border-[#D2D2DA] flex flex-wrap">
            <button className="w-12.5 text-[10px] -mb-[0.5px] text-[#002F70] border-b-[0.5px] border-[#002F70]">All</button>
            <button className="w-12.5 text-[10px] -mb-[0.5px] text-[#222222] border-b-[0.5px] border-[#D2D2DA]">Drafts</button>
            <button className="w-12.5 text-[10px] -mb-[0.5px] text-[#222222] border-b-[0.5px] border-[#D2D2DA]">Published</button>
          </div>
          <div className="flex justify-between">
            <div>
              <input type="text" className="bg-[#F1F1F1] rounded-xs text-[8px] font-semibold h-5 w-30.75 px-2" placeholder="Search Services" />
            </div>
            <div className="flex gap-1">
              <button className="flex items-center justify-center gap-1 h-5 w-15.25 rounded-xs bg-[#002F70] text-white text-[8px]">
                <Image src={ICONS.plus} alt="" />
                Create
              </button>
              <button className="flex items-center justify-center gap-1 h-5 w-15.25 rounded-xs bg-[#071331] text-white text-[8px]">
                <Image src={ICONS.exports} alt="" />
                Export
              </button>
            </div>
          </div>
          <table className="w-full my-3 text-center">
            <thead className="text-[#888888] text-[9px] uppercase font-bold">
              <tr className="border-b-[0.5px] border-[#D2D2DA]">
                <th className="px-2">
                  <input type="checkbox" className="x-checked" />
                </th>
                <th className="px-2">service</th>
                <th className="px-2">price</th>
                <th className="px-2">purchases</th>
                <th className="px-2">duration</th>
                <th className="px-2">approval status</th>
                <th className="px-2">publish status</th>
                <th className="px-2">action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-[0.5px] border-[#D2D2DA] h-7.25">
                <td><input type="checkbox" className="x-checked" /></td>
                <td className="text-[10px] font-semibold text-[#454545]">Incorporation of a new company</td>
                <td className="text-[10px] font-semibold text-[#454545]">RM 2,000</td>
                <td className="text-[10px] font-semibold text-[#454545]">20</td>
                <td className="text-[10px] font-semibold text-[#454545]">3 Days</td>
                <td><button className="h-3.5 w-11 rounded-[3px] bg-[#18C96466] text-[#1AC623] font-semibold text-[6px]">Approved</button></td>
                <td><button className="h-3.5 w-11 rounded-[3px] bg-[#18C964] text-[#FFFFFF] font-semibold text-[6px]">Published</button></td>
                <td className="relative">
                  <button onClick={() => actionsOpen == "key1" ? setActionsOpen("") : setActionsOpen("key1")}><Image src={ICONS.dots} alt="actions" /></button>
                  <div className={`absolute top-full right-0 w-60.5 px-2 py-1 rounded-[3px] bg-white x-shadow-2 ${actionsOpen === "key1" ? 'block' : 'hidden'}`}>
                    <button className="flex items-center w-full h-8 px-2 gap-3 border-b-[0.8px] border-[#D2D2DA]">
                      <Image src={ICONS.pencil} alt="edit icon" />
                      <span className="text-xs font-semibold text-[#454545]">Edit</span>
                    </button>
                    <button className="flex items-center w-full h-8 px-2 gap-3">
                      <Image src={ICONS.bin} alt="delete icon" />
                      <span className="text-xs font-semibold text-[#454545]">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b-[0.5px] border-[#D2D2DA] h-7.25">
                <td><input type="checkbox" className="x-checked" /></td>
                <td className="text-[10px] font-semibold text-[#454545]">Incorporation of a new company</td>
                <td className="text-[10px] font-semibold text-[#454545]">RM 2,000</td>
                <td className="text-[10px] font-semibold text-[#454545]">20</td>
                <td className="text-[10px] font-semibold text-[#454545]">3 Days</td>
                <td><button className="h-3.5 w-11 rounded-[3px] bg-[#61E7DA66] text-[#00AC95] font-semibold text-[6px]">Under-Review</button></td>
                <td><button className="h-3.5 w-11 rounded-[3px] bg-[#18C964] text-[#FFFFFF] font-semibold text-[6px]">Published</button></td>
                <td className="relative">
                  <button onClick={() => actionsOpen == "key1" ? setActionsOpen("") : setActionsOpen("key1")}><Image src={ICONS.dots} alt="actions" /></button>
                  <div className={`absolute top-full right-0 w-60.5 px-2 py-1 rounded-[3px] bg-white x-shadow-2 ${actionsOpen === "key1" ? 'block' : 'hidden'}`}>
                    <button className="flex items-center w-full h-8 px-2 gap-3 border-b-[0.8px] border-[#D2D2DA]">
                      <Image src={ICONS.pencil} alt="edit icon" />
                      <span className="text-xs font-semibold text-[#454545]">Edit</span>
                    </button>
                    <button className="flex items-center w-full h-8 px-2 gap-3">
                      <Image src={ICONS.bin} alt="delete icon" />
                      <span className="text-xs font-semibold text-[#454545]">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b-[0.5px] border-[#D2D2DA] h-7.25">
                <td><input type="checkbox" className="x-checked" /></td>
                <td className="text-[10px] font-semibold text-[#454545]">Incorporation of a new company</td>
                <td className="text-[10px] font-semibold text-[#454545]">RM 2,000</td>
                <td className="text-[10px] font-semibold text-[#454545]">20</td>
                <td className="text-[10px] font-semibold text-[#454545]">3 Days</td>
                <td><button className="h-3.5 w-11 rounded-[3px] bg-[#18C96466] text-[#1AC623] font-semibold text-[6px]">Approved</button></td>
                <td><button className="h-3.5 w-11 rounded-[3px] bg-[#18C964] text-[#FFFFFF] font-semibold text-[6px]">Published</button></td>
                <td className="relative">
                  <button onClick={() => actionsOpen == "key1" ? setActionsOpen("") : setActionsOpen("key1")}><Image src={ICONS.dots} alt="actions" /></button>
                  <div className={`absolute top-full right-0 w-60.5 px-2 py-1 rounded-[3px] bg-white x-shadow-2 ${actionsOpen === "key1" ? 'block' : 'hidden'}`}>
                    <button className="flex items-center w-full h-8 px-2 gap-3 border-b-[0.8px] border-[#D2D2DA]">
                      <Image src={ICONS.pencil} alt="edit icon" />
                      <span className="text-xs font-semibold text-[#454545]">Edit</span>
                    </button>
                    <button className="flex items-center w-full h-8 px-2 gap-3">
                      <Image src={ICONS.bin} alt="delete icon" />
                      <span className="text-xs font-semibold text-[#454545]">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b-[0.5px] border-[#D2D2DA] h-7.25">
                <td><input type="checkbox" className="x-checked" /></td>
                <td className="text-[10px] font-semibold text-[#454545]">Incorporation of a new company</td>
                <td className="text-[10px] font-semibold text-[#454545]">RM 2,000</td>
                <td className="text-[10px] font-semibold text-[#454545]">20</td>
                <td className="text-[10px] font-semibold text-[#454545]">3 Days</td>
                <td><button className="h-3.5 w-11 rounded-[3px] bg-[#61E7DA66] text-[#00AC95] font-semibold text-[6px]">Under-Review</button></td>
                <td><button className="h-3.5 w-11 rounded-[3px] bg-[#18C964] text-[#FFFFFF] font-semibold text-[6px]">Published</button></td>
                <td className="relative">
                  <button onClick={() => actionsOpen == "key1" ? setActionsOpen("") : setActionsOpen("key1")}><Image src={ICONS.dots} alt="actions" /></button>
                  <div className={`absolute top-full right-0 w-60.5 px-2 py-1 rounded-[3px] bg-white x-shadow-2 ${actionsOpen === "key1" ? 'block' : 'hidden'}`}>
                    <button className="flex items-center w-full h-8 px-2 gap-3 border-b-[0.8px] border-[#D2D2DA]">
                      <Image src={ICONS.pencil} alt="edit icon" />
                      <span className="text-xs font-semibold text-[#454545]">Edit</span>
                    </button>
                    <button className="flex items-center w-full h-8 px-2 gap-3">
                      <Image src={ICONS.bin} alt="delete icon" />
                      <span className="text-xs font-semibold text-[#454545]">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b-[0.5px] border-[#D2D2DA] h-7.25">
                <td><input type="checkbox" className="x-checked" /></td>
                <td className="text-[10px] font-semibold text-[#454545]">Incorporation of a new company</td>
                <td className="text-[10px] font-semibold text-[#454545]">RM 2,000</td>
                <td className="text-[10px] font-semibold text-[#454545]">20</td>
                <td className="text-[10px] font-semibold text-[#454545]">3 Days</td>
                <td><button className="h-3.5 w-11 rounded-[3px] bg-[#C0030666] text-[#C00306] font-semibold text-[6px]">Rejected</button></td>
                <td><button className="h-3.5 w-11 rounded-[3px] bg-[#C00306] text-[#FFFFFF] font-semibold text-[6px]">Not Published</button></td>
                <td className="relative">
                  <button onClick={() => actionsOpen == "key1" ? setActionsOpen("") : setActionsOpen("key1")}><Image src={ICONS.dots} alt="actions" /></button>
                  <div className={`absolute top-full right-0 w-60.5 px-2 py-1 rounded-[3px] bg-white x-shadow-2 ${actionsOpen === "key1" ? 'block' : 'hidden'}`}>
                    <button className="flex items-center w-full h-8 px-2 gap-3 border-b-[0.8px] border-[#D2D2DA]">
                      <Image src={ICONS.pencil} alt="edit icon" />
                      <span className="text-xs font-semibold text-[#454545]">Edit</span>
                    </button>
                    <button className="flex items-center w-full h-8 px-2 gap-3">
                      <Image src={ICONS.bin} alt="delete icon" />
                      <span className="text-xs font-semibold text-[#454545]">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b-[0.5px] border-[#D2D2DA] h-7.25">
                <td><input type="checkbox" className="x-checked" /></td>
                <td className="text-[10px] font-semibold text-[#454545]">Incorporation of a new company</td>
                <td className="text-[10px] font-semibold text-[#454545]">RM 2,000</td>
                <td className="text-[10px] font-semibold text-[#454545]">20</td>
                <td className="text-[10px] font-semibold text-[#454545]">3 Days</td>
                <td><button className="h-3.5 w-11 rounded-[3px] bg-[#C0030666] text-[#C00306] font-semibold text-[6px]">Rejected</button></td>
                <td><button className="h-3.5 w-11 rounded-[3px] bg-[#C00306] text-[#FFFFFF] font-semibold text-[6px]">Not Published</button></td>
                <td className="relative">
                  <button onClick={() => actionsOpen == "key1" ? setActionsOpen("") : setActionsOpen("key1")}><Image src={ICONS.dots} alt="actions" /></button>
                  <div className={`absolute top-full right-0 w-60.5 px-2 py-1 rounded-[3px] bg-white x-shadow-2 ${actionsOpen === "key1" ? 'block' : 'hidden'}`}>
                    <button className="flex items-center w-full h-8 px-2 gap-3 border-b-[0.8px] border-[#D2D2DA]">
                      <Image src={ICONS.pencil} alt="edit icon" />
                      <span className="text-xs font-semibold text-[#454545]">Edit</span>
                    </button>
                    <button className="flex items-center w-full h-8 px-2 gap-3">
                      <Image src={ICONS.bin} alt="delete icon" />
                      <span className="text-xs font-semibold text-[#454545]">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-center gap-5 pt-3 pb-8">
            <button className="flex items-center gap-1.5 font-semibold text-[8px]">
              <Image src={ICONS.leftArrow} alt="left arrow" />
              Previous
            </button>
            <div className="flex items-center gap-1">
              <button className="flex items-center justify-center w-2.75 h-2.75 rounded-full text-[8px]">1</button>
              <button className="flex items-center justify-center w-2.75 h-2.75 rounded-full bg-[#002F70] text-white text-[8px]">2</button>
              <button className="flex items-center justify-center w-2.75 h-2.75 rounded-full text-[8px]">3</button>
              <button className="flex items-center justify-center w-2.75 h-2.75 rounded-full text-[8px]">4</button>
              <button className="flex items-center justify-center w-2.75 h-2.75 rounded-full text-[8px]">5</button>
              <button className="flex items-center justify-center w-2.75 h-2.75 rounded-full text-[8px]">...</button>
              <button className="flex items-center justify-center w-2.75 h-2.75 rounded-full text-[8px]">10</button>
            </div>
            <button className="flex items-center gap-1.5 font-semibold text-[8px]">
              Next
              <Image src={ICONS.rightArrow} alt="right arrow" />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Specialists;