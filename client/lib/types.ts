export enum MimeType {
  JPG = "image/jpg",
  JPEG = "image/jpeg",
  PNG = "image/png",
  WEBP = "image/webp",
}

export enum MediaType {
  JPG = "jpg",
  JPEG = "jpeg",
  PNG = "png",
  WEBP = "webp",
}

export enum MethodType {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface FileType {
  file_name: string;
  file_url: string;
  file_size: number;
  display_order: number;
  mime_type: MimeType;
  media_type: MediaType;
}

export interface SpecialistCreateType {
  title: string;
  slug: string;
  description: string;
  base_price: number;
  platform_fee: number;
  final_price: number;
  fee_percentage: number;
  duration_days: number;
  service_category: string;
  service_offerings: string[];
  medias: FileType[];
}
