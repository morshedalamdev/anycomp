import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { ICONS } from "@/constants/icons";
import CreateSection from "@/components/createSection";

async function CreateSpecialist({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <div className="relative flex h-screen">
      <aside className="flex flex-col">
        <div className="pt-7.75 pl-5.5">
          <h4 className="font-bold text-[11px] text-[#222222] pb-2">Profile</h4>
          <div className="flex flex-wrap gap-1">
            <Image
              src={IMAGES.company}
              alt="company logo"
              className="w-5 h-5 rounded-full"
            />
            <div>
              <h5 className="text-[9px] font-semibold text-[#454545] -mt-0.5">
                Consistant CoSec Services{" "}
              </h5>
              <p className="font-semibold text-[6px] text-[#002F70]">
                Company Secretary - Store
              </p>
            </div>
          </div>
        </div>
        <div className="pt-7.75">
          <h4 className="font-bold text-[7px] text-[#888888] pl-5.5 pb-1.5">
            Dashboard
          </h4>
          <ul className="px-0.75">
            <li>
              <a
                href=""
                className="flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-white bg-[#002F70]"
              >
                <Image src={ICONS.tag} alt="tag icon" />
                <span>Specialists</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]"
              >
                <Image src={ICONS.people} alt="people icon" />
                <span>Clients</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]"
              >
                <Image src={ICONS.order} alt="order icon" />
                <span>Service Orders</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]"
              >
                <Image src={ICONS.signature} alt="signature icon" />
                <span>eSignature</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]"
              >
                <Image src={ICONS.message} alt="message icon" />
                <span>Messages</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]"
              >
                <Image src={ICONS.invoice} alt="invoice icon" />
                <span>Invoices & Receipts</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="pt-15.5 px-0.75">
          <ul>
            <li>
              <a
                href=""
                className="flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]"
              >
                <Image src={ICONS.help} alt="help icon" />
                <span>Help</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]"
              >
                <Image src={ICONS.settings} alt="settings icon" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <CreateSection specialistId={id} />
    </div>
  );
}

export default CreateSpecialist;
