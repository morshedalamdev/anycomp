export enum MimeType {
  JPEG = "image/jpeg",
  PNG = "image/png",
  WEBP = "image/webp",
}

export enum MediaType {
  JPEG = "JPEG",
  PNG = "PNG",
  WEBP = "WEBP",
}

export enum MethodType {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface FileType {
  display_order: number;
  file_name: string;
  file_size: number;
  file_url: string;
  mime_type: MimeType;
  media_type: MediaType;
}

export interface SpecialistCreateType {
  images: FileType[];
  title: string;
  description: string;
  duration: number;
  price: number;
  category: string;
  offerings: string[];
}
