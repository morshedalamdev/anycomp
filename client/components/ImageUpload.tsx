"use client";

import React, { useState } from "react";
import { FileType } from "@/lib/types";
import { ICONS } from "@/constants/icons";
import Image from "next/image";
import { imgSizeConversion } from "@/lib/imgConversion";

interface ImageUploadProps {
  id: string;
  position: string;
  data: FileType | undefined;
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  handleRemove: (id: number) => void;
  children?: React.ReactNode;
}
interface CheckFileSizeEvent extends React.ChangeEvent<HTMLInputElement> {}

export default function ImageUpload({
  id,
  position,
  data,
  handleUpload,
  handleRemove,
  children,
}: ImageUploadProps) {
  const [oversize, setOversize] = useState<boolean>(false);

  const checkFileSize = (e: CheckFileSizeEvent): void => {
    const file = e.target.files?.[0];
    if (file && file.size > 4 * 1024 * 1024) {
      e.target.value = "";
      setOversize(true);
    } else {
      handleUpload(e, parseInt(id));
      setOversize(false);
    }
  };
  return (
    <div className="mb-4">
      <p className="font-semibold text-[7px] text-[#222222]">
        Service - Image ({position})
      </p>
      <p className="flex items-center gap-0.5 mb-0.5">
        <Image src={ICONS.info2} alt="info icon" />
        <span className="text-[4px] text-[#888888]">Maximum of 1 Image</span>
      </p>
      <label
        htmlFor={id}
        className="flex flex-col justify-center items-center gap-0.5 h-18 border border-dashed x-border-dashes border-black text-[4px] text-[#888888]"
      >
        <Image src={ICONS.cloud} alt="cloud icon" />
        <span className="flex items-center justify-center w-7.25 h-1.75 rounded-full bg-[#002F70] text-white">
          Browse
        </span>
        <span>or</span>
        <span>Drag a file to upload</span>
      </label>
      <p className="flex items-center justify-between mt-0.5">
        <span className="text-[4px] text-[#888888]">
          Accepted formats: JPG, JPEG, PNG or WEBP
        </span>
        <span
          className={`text-[4px] ${
            oversize ? "text-red-500" : "text-[#888888]"
          }`}
        >
          Maximum file size: 4MB
        </span>
      </p>
      <input
        onChange={checkFileSize}
        accept="image/jpeg,image/png,image/webp"
        type="file"
        id={id}
        name={id}
        className="hidden"
      />
      <div
        className={`${
          data ? "flex" : "hidden"
        } items-center gap-1.5 mt-1.5 h-8.5 bg-white x-shadow-6 px-1.5`}
      >
        {data?.file_url && (
          <Image
            src={data?.file_url}
            alt="preview"
            width={37}
            height={24}
            className="h-6 w-9.25 object-cover"
          />
        )}
        <div className="flex-1">
          <p className="font-semibold text-[5px] text-[#454545] mb-0.5">
            {data?.file_name}
          </p>
          <p className="flex items-center font-semibold text-[4px] text-[#888888]">
            <span className="block w-6">Size:</span>
            {data?.file_name && <span>{imgSizeConversion(data.file_size)}</span>}
          </p>
          <p className="flex items-center font-semibold text-[4px] text-[#888888]">
            <span className="block w-6">File type:</span>
            <span className="uppercase">{data?.media_type}</span>
          </p>
        </div>
        <button type="button" onClick={() => handleRemove(parseInt(id))}>
          <Image src={ICONS.trash} alt="trash icon" />
        </button>
      </div>
      {children}
    </div>
  );
}
