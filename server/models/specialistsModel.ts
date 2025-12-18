const db = require("../config/db");

export const findWithMedia = async () => {
  const result = await db.query(
    `SELECT s.*,
    (
    SELECT COALESCE(
    JSON_AGG(m.*), '[]')
    FROM media m
    WHERE m.specialists = s.id
    ) AS medias,
     (
    SELECT COALESCE(
    JSON_AGG(so.*), '[]')
    FROM service_offerings so
    WHERE so.specialists = s.id
    ) AS service_offerings
     FROM specialists s
     ORDER BY s.created_at DESC;`
  );

  if (!result) {
    return null;
  }

  return result.rows;
};

export const findList = async () => {
  const result = await db.query(
    `SELECT *
     FROM specialists s
     ORDER BY s.created_at DESC;`
  );

  if (!result) {
    return null;
  }

  return result.rows;
};

export const findById = async (id: string) => {
  const result = await db.query(
    `SELECT *
     FROM specialists s
     WHERE s.id = $1;`,
    [id]
  );

  if (!result) {
    return null;
  }

  return result.rows[0];
};

export const create = async (data: Record<string, unknown>) => {
  const client = await db.connect();
  try {
    await client.query("BEGIN");
    // 1. specialists table query //
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

    // insert into specialists table
    const newSpecialist = await client.query(
      `INSERT INTO specialists(${specialistColumns})
           VALUES(${specialistPlaceholders})
           RETURNING *`,
      specialistValues
    );
    if (!newSpecialist.rows[0]) {
      return null;
    }

    const specialistId = newSpecialist.rows[0].id;

    // 2. medias table query //
    if (Array.isArray(data?.medias)) {
      for (const media of data.medias) {
        await client.query(
          `INSERT INTO media(specialists, file_name, file_size, file_url, display_order, mime_type, media_type)
             VALUES($1, $2, $3, $4, $5, $6, $7)`,
          [
            specialistId,
            media.file_name,
            media.file_size,
            media.file_url,
            media.display_order,
            media.mime_type,
            media.media_type,
          ]
        );
      }
    }

    // 3. platform_fee //
    await client.query(
      `INSERT INTO platform_fee(specialists, tier_name, min_value, max_value, platform_fee_percentage)
          VALUES($1, $2, $3, $4, $5)`,
      [
        specialistId,
        data.tier_name,
        data.platform_fee,
        data.platform_fee,
        data.fee_percentage,
      ]
    );

    // 4. service_offerings //
    // convert offerings string to array
    const offerings = (data.service_offerings as string)
      .split(",")
      .map((s) => s.trim());
    for (const offering of offerings) {
      await client.query(
        `INSERT INTO service_offerings(specialists, service_name)
       VALUES($1, $2)`,
        [specialistId, offering]
      );
    }

    await client.query("COMMIT");
    return specialistId;
  } catch (err) {
    await client.query("COMMIT");
    throw err;
  } finally {
    client.release();
  }
};

export const update = async (id: string, data: Record<string, unknown>) => {
  return null;
};

export const remove = async (id: string) => {
  return null;
};
