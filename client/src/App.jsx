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

function App() {

  return (
    <div className="flex h-screen">
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
      <main className="flex-1 bg-[#F8F7FA]">
        
      </main>
    </div>
  )
}

export default App
