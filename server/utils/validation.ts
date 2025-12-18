const z = require("zod");

export const MediaSchema = z.object({
  id: z.string().uuid().optional(),
  specialists: z.string().uuid().optional(),
  file_name: z.string().min(1),
  file_url: z.string().min(1),
  file_size: z.number().int().nonnegative(),
  display_order: z.number().int().nonnegative(),
  mime_type: z.enum(["image/jpg", "image/jpeg", "image/png", "image/webp"]),
  media_type: z.enum(["jpg", "jpeg", "png", "webp"]),
});

export const OfferingSchema = z.object({
  id: z.string().uuid().optional(),
  specialists: z.string().uuid().optional(),
  service_name: z.string().min(1),
});

export const SpecialistSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1),
  base_price: z.number().nonnegative(),
  platform_fee: z.number().nonnegative(),
  final_price: z.number().nonnegative(),
  fee_percentage: z.number().min(0).max(100),
  tier_name: z.enum(["basic", "standard", "premium"]).optional(),
  duration_days: z.number().int().nonnegative(),
  service_category: z.string().min(1),
  medias: z.array(MediaSchema),
  is_draft: z.boolean().optional(),
  is_verified: z.boolean().optional(),
  average_rating: z.number().min(0).optional(),
  total_number_of_ratings: z.number().int().min(0).optional(),
  verification_status: z.enum(["pending", "approved", "rejected"]).optional(),
});

export const SpecialistUpdateSchema = SpecialistSchema.extend({
  id: z.string().uuid(),
  service_offerings: z.array(OfferingSchema),
});

export const SpecialistCreateSchema = SpecialistSchema.extend({
  service_offerings: z.array(z.string().min(1)),
});
