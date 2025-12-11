import { useState } from 'react';
import company from './assets/logo.png';
import tagIcon from './assets/icons/tag.svg';
import peopleIcon from './assets/icons/people.svg';
import orderIcon from './assets/icons/order.svg';
import signatureIcon from './assets/icons/signature.svg';
import messageIcon from './assets/icons/message.svg';
import invoiceIcon from './assets/icons/invoice.svg';
import helpIcon from './assets/icons/help.svg';
import settingsIcon from './assets/icons/settings.svg';
import photoScanIcon from './assets/icons/photo-scan.svg';
import verifiedIcon from './assets/icons/verified.svg';
import closeIcon from './assets/icons/x-mark.svg';
import closeSmIcon from './assets/icons/close.svg';
import flag from './assets/flag.png';
import banner1 from './assets/banner-1.png';
import banner2 from './assets/banner-2.png';
import user3 from './assets/user-3.png';
import company1 from './assets/company-1.png';
import company2 from './assets/company-2.png';
import company3 from './assets/company-3.png';

function EditSpecialist() {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <div className="relative flex h-screen">
      <aside className="flex flex-col">
        <div className="pt-[31px] pl-[22px]">
          <h4 className="font-bold text-[11px] text-[#222222] pb-2">Profile</h4>
          <div className="flex flex-wrap gap-1">
            <img src={company} alt="company logo" className="w-5 h-5 rounded-full" />
            <div>
              <h5 className="text-[9px] font-semibold text-[#454545] -mt-0.5">Consistant CoSec Services </h5>
              <p className="font-semibold text-[6px] text-[#002F70]">Company Secretary - Store</p>
            </div>
          </div>
        </div>
        <div className="pt-[31px]">
          <h4 className="font-bold text-[7px] text-[#888888] pl-[22px] pb-[6px]">Dashboard</h4>
          <ul className="px-[3px]">
            <li><a href="" className="flex items-center gap-1 h-[25px] rounded-[3px] pl-[19px] text-[9px] text-white bg-[#002F70]">
              <img src={tagIcon} alt="tag icon" />
              <span>Specialists</span>
            </a></li>
            <li><a href="" className="flex items-center gap-1 h-[25px] rounded-[3px] pl-[19px] text-[9px] text-[#484848]">
              <img src={peopleIcon} alt="people icon" />
              <span>Clients</span>
            </a></li>
            <li><a href="" className="flex items-center gap-1 h-[25px] rounded-[3px] pl-[19px] text-[9px] text-[#484848]">
              <img src={orderIcon} alt="order icon" />
              <span>Service Orders</span>
            </a></li>
            <li><a href="" className="flex items-center gap-1 h-[25px] rounded-[3px] pl-[19px] text-[9px] text-[#484848]">
              <img src={signatureIcon} alt="signature icon" />
              <span>eSignature</span>
            </a></li>
            <li><a href="" className="flex items-center gap-1 h-[25px] rounded-[3px] pl-[19px] text-[9px] text-[#484848]">
              <img src={messageIcon} alt="message icon" />
              <span>Messages</span>
            </a></li>
            <li><a href="" className="flex items-center gap-1 h-[25px] rounded-[3px] pl-[19px] text-[9px] text-[#484848]">
              <img src={invoiceIcon} alt="invoice icon" />
              <span>Invoices & Receipts</span>
            </a></li>
          </ul>
        </div>
        <div className="pt-[62px] px-[3px]">
          <ul>
            <li><a href="" className="flex items-center gap-1 h-[25px] rounded-[3px] pl-[19px] text-[9px] text-[#484848]">
              <img src={helpIcon} alt="help icon" />
              <span>Help</span>
            </a></li>
            <li><a href="" className="flex items-center gap-1 h-[25px] rounded-[3px] pl-[19px] text-[9px] text-[#484848]">
              <img src={settingsIcon} alt="settings icon" />
              <span>Settings</span>
            </a></li>
          </ul>
        </div>
      </aside>
      <main className="flex flex-wrap flex-1 px-3 pt-[31px] gap-5 overflow-y-scroll">
        <div className="w-[424px] space-y-3">
          <div>
            <h2 className="font-semibold text-lg text-[#222222]">Register a new company | Private Limited - Sdn Bhd</h2>
            <div className="flex flex-wrap gap-0.5">
              <div className="flex items-center justify-center flex-col w-[229px] bg-[#F5F5F5]">
                <img src={photoScanIcon} alt="photo scan icon" />
                <p className="w-[138px] font-semibold text-[5px] text-[#888888]">Upload an image for your service listing in PNG, JPG or JPEG up to 4MB</p>
              </div>
              <div className="space-y-px w-48">
                <img src={banner1} alt="banner 1" />
                <img src={banner2} alt="banner 2" />
              </div>
            </div>
          </div>
          <div className="border-b-[0.5px] border-[#E0E0E0] pb-4">
            <h3 className="font-bold text-[11px] text-[#222222] mb-2">Description</h3>
            <p className="font-semibold text-[7px] text-[#888888]">Describe your service here</p>
          </div>
          <div className="border-b-[0.5px] border-[#E0E0E0] pb-4">
            <h3 className="font-bold text-[11px] text-[#222222] mb-2">Additional Offerings</h3>
            <p className="font-semibold text-[7px] text-[#888888]">Enhance your service by adding additional offerings</p>
          </div>
          <div className="border-b-[0.5px] border-[#E0E0E0] pb-4">
            <h3 className="font-bold text-[11px] text-[#222222] mb-2">Company Secretary</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="flex items-center gap-1 mb-2">
                  <img src={user3} alt="user" className="w-[30px] h-[30px] rounded-full" />
                  <div>
                    <h5 className="flex items-center">
                      <span className="font-semibold text-[6px] text-[#222222]">Grace Lam</span>
                      <img src={verifiedIcon} alt="verified icon" className="ml-1 mr-px" />
                      <span className="font-semibold text-[3px] text-[#454545]">Verified</span>
                    </h5>
                    <h6 className="font-semibold text-[4.5px] text-[#454545] -mt-0.5 mb-0.5">Corpsec Services Sdn Bhd</h6>
                    <a href="" className="flex items-center justify-center bg-[#071331] h-2.5 w-[35px] rounded-[1.5px] font-semibold text-[4px] text-white">View Profile</a>
                  </div>
                </div>
                <p className="font-semibold text-[4.5px] leading-1.5 text-[#454545]">A company secretarial service founded by Grace, who believes that every company deserves clarity, confidence, and care in their compliance journey. Inspired by the spirit of entrepreneurship, Aida treats every client’s business as if it were her own — attentive to detail, committed to deadlines, and focused on growth. Step into a partnership built on trust, transparency, and professional excellence. Whether you’re just starting out or managing a growing company, Aida is here to make your corporate governance smooth, secure, and stress-free. Your company’s peace of mind starts here</p>
              </div>
              <div>
                <h6 className="font-semibold text-[8px] text-[#222222]">Certified Company Secretary</h6>
                <ul className="flex items-center gap-1">
                  <li><img className="w-[18px]" src={company1} alt="company 1" /></li>
                  <li><img className="w-[18px]" src={company2} alt="company 2" /></li>
                  <li><img className="w-[18px]" src={company3} alt="company 3" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex gap-0.5">
            <button onClick={() => setIsEditOpen(!isEditOpen)} className="flex items-center justify-center gap-1 h-[21px] w-[59px] rounded-[3px] bg-[#071331] text-white text-[7px]">
              Edit
            </button>
            <button className="flex items-center justify-center gap-1 h-[21px] w-[59px] rounded-[3px] bg-[#002F70] text-white text-[7px]">
              Publish
            </button>
          </div>
          <div className="bg-white px-3 py-3 x-shadow-3">
            <h2 className="font-semibold text-lg">Professional Fee</h2>
            <p className="font-semibold text-[9px] text-[#888888] -mt-1">Set a rate for your service</p>
            <div className="flex items-center justify-center my-3">
              <p className="font-red-hot font-semibold leading-6 text-xl border-b-[1.5px] border-[#222222]">RM 1,800</p>
            </div>
            <div className="">
              <p className="flex flex-wrap">
                <span className="flex-1 font-semibold text-[9px] text-[#454545]">Base price</span>
                <span className="w-11 font-semibold text-[9px] text-[#222222]">RM 1,800</span>
              </p>
              <p className="flex flex-wrap">
                <span className="flex-1 font-semibold text-[9px] text-[#454545] underline">Service processing fee</span>
                <span className="w-11 font-semibold text-[9px] text-[#222222]">RM 540</span>
              </p>
              <p className="flex flex-wrap border-b-[0.5px] border-[#888888] mb-2">
                <span className="flex-1 font-semibold text-[9px] text-[#454545]">Total</span>
                <span className="w-11 font-semibold text-[9px] text-[#222222]">RM 2,340</span>
              </p>
              <p className="flex flex-wrap">
                <span className="flex-1 font-semibold text-[9px] text-[#454545]">Your returns</span>
                <span className="w-11 font-semibold text-[9px] text-[#222222]">RM 1,800</span>
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className={`${isEditOpen ? 'absolute' : 'hidden'} inset-0 h-screen bg-black/15 z-50`}>
        <div className="relative w-[273px] h-screen bg-white ml-auto px-4 py-3 z-20">
          <div className="flex items-center justify-between">
            <h3 className="font-red-hot font-semibold text-xs">Edit Service</h3>
            <button onClick={() => setIsEditOpen(!isEditOpen)}><img src={closeIcon} alt="Close" /></button>
          </div>
          <form className="mt-4 space-y-3">
            <div className="flex flex-col">
              <label htmlFor="title" className="font-semibold text-[7px] text-[#454545]">Title</label>
              <input type="text" id="title" className="border-[0.2px] border-[#888888] rounded-xs h-[19px] text-[9px] px-1.5" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="font-semibold text-[7px] text-[#454545]">Description</label>
              <textarea id="description" className="border-[0.2px] border-[#888888] rounded-xs h-16 text-[9px] px-1.5">
              </textarea>
              <span className="font-semibold text-[5px] ml-auto text-[#222222]">(500 words)</span>
            </div>
            <div className="flex flex-col">
              <label htmlFor="estimatedCompletionTime" className="font-semibold text-[7px] text-[#454545]">Estimated Completion Time (Days)</label>
              <input type="text" id="estimatedCompletionTime" className="border-[0.2px] border-[#888888] rounded-xs h-[19px] text-[9px] px-1.5" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="price" className="font-semibold text-[7px] text-[#454545]">Price</label>
              <div className="flex h-[19px]">
                <div className="flex items-center gap-0.5 px-1.5 bg-[#F5F5F5] border-[0.2px] border-r-0  rounded-l-xs">
                  <img src={flag} alt="flag" className="w-[11px]" />
                  <span className="text-[7px] text-[#222222]">MYR</span>
                </div>
                <input type="text" id="price" className="flex-1 text-[9px] px-1.5 border-[0.2px] border-black border-l-0 rounded-r-xs" />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="additionalOfferings" className="font-semibold text-[7px] text-[#454545]">Additional Offerings</label>
              <input type="text" id="additionalOfferings" className="border-[0.2px] border-[#888888] rounded-xs h-[19px] text-[9px] px-1.5" />
              <div className="flex flex-wrap mt-0.5 space-x-3 space-y-0.5">
                <button className="flex items-center gap-1 h-[15px] bg-[#F5F5F5] rounded-xs px-1">
                  <span className="text-[#222222] text-[5px] pl-1">Company Secretary Subscription</span>
                  <img src={closeSmIcon} alt="close icon" />
                </button>
                <button className="flex items-center gap-1 h-[15px] bg-[#F5F5F5] rounded-xs px-1">
                  <span className="text-[#222222] text-[5px] pl-1">CTC Copies</span>
                  <img src={closeSmIcon} alt="close icon" />
                </button>
                <button className="flex items-center gap-1 h-[15px] bg-[#F5F5F5] rounded-xs px-1">
                  <span className="text-[#222222] text-[5px] pl-1">eSignature</span>
                  <img src={closeSmIcon} alt="close icon" />
                </button>
                <button className="flex items-center gap-1 h-[15px] bg-[#F5F5F5] rounded-xs px-1">
                  <span className="text-[#222222] text-[5px] pl-1">Company Secretary Subscription</span>
                  <img src={closeSmIcon} alt="close icon" />
                </button>
              </div>
            </div>
            <div className="flex gap-1 mt-10">
              <button type="submit" className="w-[59px] h-5 border-[0.7px] border-[#C4C4C4] rounded-[2.5px] text-[6px] text-[#C00306]">Cancel</button>
              <button type="button" className="w-[59px] h-5 rounded-[2.5px] bg-[#002F70] text-[6px] text-white">Confirm</button>
            </div>
          </form>
        </div>
        <div onClick={() => setIsEditOpen(false)} className="absolute inset-0 z-10"></div>
      </div>
    </div>
  )
}

export default EditSpecialist
