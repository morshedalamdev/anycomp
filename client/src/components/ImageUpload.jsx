import infoIcon from "../assets/icons/info-2.svg";
import cloudIcon from "../assets/icons/cloud.svg";
import trashIcon from "../assets/icons/trash.svg";

export default function ImageUpload({ id, position, data, handleUpload, handleRemove }) {

     return (
          <div className="mb-4">
               <p className="font-semibold text-[7px] text-[#222222]">Service - Image ({position})</p>
               <p className="flex items-center gap-0.5 mb-0.5">
                    <img src={infoIcon} alt="info icon" />
                    <span className="text-[4px] text-[#888888]">Maximum of 1 Image</span>
               </p>
               <label htmlFor={id} className="flex flex-col justify-center items-center gap-0.5 h-18 border border-dashed x-border-dashes border-black text-[4px] text-[#888888]">
                    <img src={cloudIcon} alt="cloud icon" />
                    <span className="flex items-center justify-center w-7.25 h-1.75 rounded-full bg-[#002F70] text-white">Browse</span>
                    <span>or</span>
                    <span>Drag a file to upload</span>
               </label>
               <p className="flex items-center justify-between mt-0.5">
                    <span className="text-[4px] text-[#888888]">Accepted formats: JPG, JPEG, PNG or WEBP</span>
                    <span className="text-[4px] text-[#888888]">Maximum file size: 4MB</span>
               </p>
               <input onChange={handleUpload} accept="image/jpeg,image/png,image/webp" type="file" id={id} name={id} className="hidden" />
               <div className={`${data ? "flex" : "hidden"} items-center gap-1.5 mt-1.5 h-8.5 bg-white x-shadow-6 px-1.5`}>
                    <img src={data?.base64} alt="preview" className="w-9.25 h-6 object-cover" />
                    <div className="flex-1">
                         <p className="font-semibold text-[5px] text-[#454545] mb-0.5">{data?.name}</p>
                         <p className="flex items-center font-semibold text-[4px] text-[#888888]">
                              <span className="block w-6">Size:</span>
                              <span>{data?.size} MB</span>
                         </p>
                         <p className="flex items-center font-semibold text-[4px] text-[#888888]">
                              <span className="block w-6">File type:</span>
                              <span>{data?.mediaType}</span>
                         </p>
                    </div>
                    <button type="button" onClick={() => handleRemove(id)}><img src={trashIcon} alt="trash icon" /></button>
               </div>
          </div>
     );
}