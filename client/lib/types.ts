export enum MimeType {
  JPEG = "image/jpeg",
  PNG = "image/png",
  WEBP = "image/webp"
}

export enum MediaType {
  JPEG = "JPEG",
  PNG = "PNG",
  WEBP = "WEBP"
}

export type FileType = {
  fieldId: string;
  name: string;
  size: number;
  mimeType: MimeType;
  mediaType: MediaType;
  base64: string;
};