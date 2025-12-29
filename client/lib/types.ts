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
export enum StatusType {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
}
export enum MethodType {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}
export enum TierType{
  BASIC = "basic",
  PRO = "pro",
  ENTERPRISE = "enterprise"
}

export interface FileType {
  id?: string;
  specialists?: string;
  file_name: string;
  file_url: string;
  file_size: number;
  display_order: number;
  mime_type: MimeType;
  media_type: MediaType;
  uploaded_at?: string;
  created_at?: string;
  updated_at?: string | null;
  deleted_at?: string | null;
}

export interface OfferingType {
  id?: string;
  specialists?: string;
  service_name: string;
  created_at?: string;
  updated_at?: string | null;
  deleted_at?: string | null;
}

export interface FeeType {
  id: string;
  specialists: string;
  tier_name: string;
  min_value: number;
  max_value: number;
  platform_fee_percentage: number;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
}

export interface SpecialistType {
  title: string;
  slug: string;
  description: string;
  base_price: number;
  platform_fee: number;
  final_price: number;
  fee_percentage: number;
  duration_days: number;
  service_category: string;
  service_offerings: OfferingType[];
  medias: FileType[];
  tier_name: TierType;
}

export interface SpecialistResponseType extends SpecialistType {
  id: string;
  average_rating: number;
  is_draft: boolean;
  is_verified: boolean;
  total_number_of_ratings: number;
  verification_status: StatusType;
  platform_fees: FeeType[];
  created_at: string;
  deleted_at: string | null;
  updated_at: string | null;
}
