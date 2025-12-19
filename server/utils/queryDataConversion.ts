export function specialistDataConversion(data: Record<string, unknown>) {
  const specialistTableColumns = [
    "average_rating",
    "is_draft",
    "total_number_of_ratings",
    "title",
    "slug",
    "service_category",
    "description",
    "base_price",
    "platform_fee",
    "final_price",
    "verification_status",
    "is_verified",
    "duration_days",
    "created_at",
    "updated_at",
    "deleted_at",
  ];
  const specialistKeys = Object.keys(data).filter((key) =>
    specialistTableColumns.includes(key)
  );

  //   column and value lists for query
  const specialistColumns = specialistKeys.join(", ");
  const specialistValues = specialistKeys.map((key) => data[key]);
  const specialistPlaceholders = specialistKeys
    .map((_, index) => `$${index + 1}`)
    .join(", ");

  return {
    specialistColumns,
    specialistValues,
    specialistPlaceholders,
  };
}
