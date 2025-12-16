import { ICONS } from "@/constants/icons"
import { IMAGES } from "@/constants/images"
import Image from "next/image"

function AllSpecialists() {

  return (
    <>
      <header className="h-11.25 x-shadow-4">
        <div className="flex items-center justify-between w-176.25 mx-auto px-5">
          <div className="flex items-center gap-5">
            <a href=""><Image src={IMAGES.anycompLogo} alt="Anycomp Logo" /></a>
            <nav className="flex items-center gap-5 font-semibold text-[6px]">
              <a href="">Register a company</a>
              <a href="">Appoint a Company Secretary</a>
              <a href="" className="flex items-center gap-0.5">Company Secretarial Services <Image src={ICONS.downArrow} alt="down arrow" /></a>
              <a href="">How Anycomp Works</a>
            </nav>
            <form className="flex items-center border-[0.3px] border-[#94969C] rounded-[1px] w-28.75 h-2.75 pl-1">
              <input id="search" type="text" placeholder="Search for any services" className="flex-1 font-semibold text-[4px] text-[#94969C]" />
              <label htmlFor="search" className="flex items-center justify-center bg-[#002F70] h-full w-2.75 rounded-r-[1px]">
                <Image src={ICONS.search} alt="" />
              </label>
            </form>
          </div>
          <div className="flex items-center gap-1">
            <div className="relative mr-1 h-fit">
              <Image src={ICONS.mail} alt="mail icon" />
            </div>
            <div className="relative mr-1 h-fit">
              <Image src={ICONS.ball} alt="notification icon" />
              <span className="absolute top-px right-px flex items-center justify-center w-[1.5px] h-[1.5px] rounded-full bg-[#DF0D0D] text-white text-[3px]"></span>
            </div>
            <Image src={IMAGES.user4} alt="" className="w-3.5 h-3.5 rounded-full object-cover" />
          </div>
        </div>
      </header>
      <div className="w-176.25 mx-auto mt-7">
        <section>
          <div className="flex items-center gap-2">
            <a href=""><Image src={ICONS.home} alt="home icon" /></a>
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
              Price <Image src={ICONS.downArrowLg} alt="" />
            </button>
            <button className="flex items-center justify-center gap-0.5 border-[0.3px] border-[#C4C4C4] h-4.25 w-10.75 rounded-xs font-semibold text-[7px] text-[#222222]">
              Sort by <Image src={ICONS.downArrowLg} alt="" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3 mt-1.5">
            <div>
              <Image src={IMAGES.product1} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <Image src={IMAGES.user1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Adam Low</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <Image src={IMAGES.product2} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <Image src={IMAGES.user1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Jessica Law</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <Image src={IMAGES.product3} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <Image src={IMAGES.user1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Stacey Lim</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <Image src={IMAGES.product4} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <Image src={IMAGES.user1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Stacey Lim</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <Image src={IMAGES.product5} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <Image src={IMAGES.user1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Sarah Wong</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <Image src={IMAGES.product6} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <Image src={IMAGES.user1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Siddesh A/L</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <Image src={IMAGES.product7} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <Image src={IMAGES.user1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Siti Hisham</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <Image src={IMAGES.product8} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <Image src={IMAGES.user1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Alia Marissa</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <Image src={IMAGES.product9} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <Image src={IMAGES.user1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Adam Low</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <Image src={IMAGES.product10} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <Image src={IMAGES.user1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Adam Low</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <Image src={IMAGES.product11} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <Image src={IMAGES.user1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
                  <h3><span className="font-bold">Adam Low</span> - Company Secretary</h3>
                </div>
                <p className="text-[7px] text-[#454545] mt-1">Register your Company with the best Company Secretary in KL</p>
                <h4 className="font-semibold text-[9px] text-[#222222]">RM 1,600</h4>
              </div>
            </div>
            <div>
              <Image src={IMAGES.product12} alt="" className="w-41 h-31 rounded-lg object-cover" />
              <div className="px-0.5 mt-1.5">
                <div className="flex items-center text-[#222222] text-[6px]">
                  <Image src={IMAGES.user1} alt="user" className="w-2.5 h-2.5 rounded-full object-cover mr-1" />
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