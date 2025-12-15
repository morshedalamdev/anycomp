import { useState } from 'react';
import anycompLogo from './assets/logo-2.png';
import downArrowIcon from './assets/icons/down-arrow.svg';
import downArrowLgIcon from './assets/icons/down-arrow-lg.svg';
import searchIcon from './assets/icons/search.svg';
import mailIcon from './assets/icons/mail.svg';
import ballIcon from './assets/icons/ball.svg';
import homeIcon from './assets/icons/home.svg';
import user4 from './assets/user-4.png';
import product1 from './assets/product-1.png';
import product2 from './assets/product-2.png';
import product3 from './assets/product-3.png';
import product4 from './assets/product-4.png';
import product5 from './assets/product-5.png';
import product6 from './assets/product-6.png';
import product7 from './assets/product-7.png';
import product8 from './assets/product-8.png';
import product9 from './assets/product-9.png';
import product10 from './assets/product-10.png';
import product11 from './assets/product-11.png';
import product12 from './assets/product-12.png';

function AllSpecialists() {

  return (
    <>
      <header className="h-11.25 x-shadow-4">
        <div className="flex items-center justify-between w-176.25 mx-auto px-5">
          <div className="flex items-center gap-5">
            <a href=""><img src={anycompLogo} alt="Anycomp Logo" /></a>
            <nav className="flex items-center gap-5 font-semibold text-[6px]">
              <a href="">Register a company</a>
              <a href="">Appoint a Company Secretary</a>
              <a href="" className="flex items-center gap-0.5">Company Secretarial Services <img src={downArrowIcon} alt="down arrow" /></a>
              <a href="">How Anycomp Works</a>
            </nav>
            <form className="flex items-center border-[0.3px] border-[#94969C] rounded-[1px] w-28.75 h-2.75 pl-1">
              <input id="search" type="text" placeholder="Search for any services" className="flex-1 font-semibold text-[4px] text-[#94969C]" />
              <label htmlFor="search" className="flex items-center justify-center bg-[#002F70] h-full w-2.75 rounded-r-[1px]">
                <img src={searchIcon} alt="" />
              </label>
            </form>
          </div>
          <div className="flex items-center gap-1">
            <div className="relative mr-1 h-fit">
              <img src={mailIcon} alt="mail icon" />
            </div>
            <div className="relative mr-1 h-fit">
              <img src={ballIcon} alt="notification icon" />
              <span className="absolute top-px right-px flex items-center justify-center w-[1.5px] h-[1.5px] rounded-full bg-[#DF0D0D] text-white text-[3px]"></span>
            </div>
            <img src={user4} alt="" className="w-3.5 h-3.5 rounded-full object-cover" />
          </div>
        </div>
      </header>
      <div className="w-176.25 mx-auto mt-7">
        <section>
          <div className="flex items-center gap-2">
            <a href=""><img src={homeIcon} alt="home icon" /></a>
            <span className="border-r-[0.3px] border-[#454545] h-1.75 rotate-[24.78deg]"></span>
            <a href="" className="font-semibold  text-[6px] text-[#454545]">Specialists</a>
            <span className="border-r-[0.3px] border-[#454545] h-1.75 rotate-[24.78deg]"></span>
            <a href="" className="font-semibold  text-[6px] text-[#454545]">Register a New Company</a>
          </div>
          <h2 className="font-red-hot font-bold text-[15px]">Register a New Company</h2>
          <p className="text-[7px] text-[#888888]">Get Your Company Registered with a Trusted Specialists</p>
        </section>
        <section className="mt-4">
          <div className="flex gap-1">
            <button className="flex items-center justify-center gap-0.5 border-[0.3px] border-[#C4C4C4] h-4.25 w-9.25 rounded-xs font-semibold text-[7px] text-[#222222]">
              Price <img src={downArrowLgIcon} alt="" />
            </button>
            <button className="flex items-center justify-center gap-0.5 border-[0.3px] border-[#C4C4C4] h-4.25 w-10.75 rounded-xs font-semibold text-[7px] text-[#222222]">
              Sort by <img src={downArrowLgIcon} alt="" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3 mt-1.5">
            <div>
              <img src={product1} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <img src={product1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Adam Low</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <img src={product2} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <img src={product1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Jessica Law</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <img src={product3} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <img src={product1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Stacey Lim</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <img src={product4} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <img src={product1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Stacey Lim</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <img src={product5} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <img src={product1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Sarah Wong</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <img src={product6} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <img src={product1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Siddesh A/L</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <img src={product7} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <img src={product1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Siti Hisham</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <img src={product8} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <img src={product1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Alia Marissa</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <img src={product9} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <img src={product1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Adam Low</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <img src={product10} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <img src={product1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Adam Low</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <img src={product11} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <img src={product1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Adam Low</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <img src={product12} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <img src={product1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Adam Low</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AllSpecialists

