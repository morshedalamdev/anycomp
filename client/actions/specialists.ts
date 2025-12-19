"use server";

import fetcher from "@/lib/fetcher";
import { MethodType, SpecialistCreateType } from "@/lib/types";
import slug from "slug";

export async function createSpecialist(
  state: undefined,
  payload: SpecialistCreateType
) {
  const feePercentage = 0.1; // 10% platform fee
  const platformFee = payload.price * feePercentage;
  const finalPrice = payload.price + platformFee;

  const data = {
    title: payload.title,
    slug: slug(payload.title),
    description: payload.description,
    base_price: payload.price,
    platform_fee: parseInt(platformFee.toFixed(2)),
    final_price: parseInt(finalPrice.toFixed(2)),
    fee_percentage: feePercentage * 100,
    duration_days: payload.duration,
    service_category: payload.category,
    medias: payload.images,
  };

  const result = await fetcher("specialists", MethodType.POST, data);
  if (!result.success) {
    return { success: false, message: result.message };
  }

  return { success: result?.success, data: result?.data };
}
