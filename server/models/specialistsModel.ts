import { specialistDataConversion } from "../utils/queryDataConversion";

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
     WHERE s.deleted_at IS NULL
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
     WHERE s.deleted_at IS NULL
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
    const convertedData = await specialistDataConversion(data);

    // insert into specialists table
    const newSpecialist = await client.query(
      `INSERT INTO specialists(${convertedData.specialistColumns})
           VALUES(${convertedData.specialistPlaceholders})
           RETURNING *`,
      convertedData.specialistValues
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
    if (data?.tier_name) {
      await client.query(
        `INSERT INTO platform_fee(specialists, tier_name, min_value, max_value, platform_fee_percentage)
          VALUES($1, $2, $3, $3, $4)`,
        [
          specialistId,
          data.tier_name,
          data.platform_fee,
          data.fee_percentage,
        ]
      );
    }else{
      await client.query(
        `INSERT INTO platform_fee(specialists, min_value, max_value, platform_fee_percentage)
          VALUES($1, $2, $2, $3)`,
        [
          specialistId,
          data.platform_fee,
          data.fee_percentage,
        ]
      );      
    }
    // 4. service_offerings //
    if (Array.isArray(data?.service_offerings)) {
      for (const offering of data.service_offerings) {
        await client.query(
          `INSERT INTO service_offerings(specialists, service_name)
       VALUES($1, $2)`,
          [specialistId, offering]
        );
      }
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
  const client = await db.connect();
  try {
    await client.query("BEGIN");

    // 1. specialists table update //
    const convertedData = await specialistDataConversion(data);

    await client.query(
      `UPDATE specialists
           SET (${convertedData.specialistColumns}, updated_at) = (${
        convertedData.specialistPlaceholders
      }, NOW())
           WHERE id = $${convertedData.specialistValues.length + 1}
           RETURNING *`,
      [...convertedData.specialistValues, id]
    );
    // 2. medias table update //
    if (Array.isArray(data?.medias)) {
      for (const media of data.medias) {
        if (media.id) {
          await client.query(
            `UPDATE media
             SET file_name = $1, file_size = $2, file_url = $3, display_order = $4, mime_type = $5, media_type = $6, updated_at = NOW()
             WHERE id = $7 AND specialists = $8`,
            [
              media.file_name,
              media.file_size,
              media.file_url,
              media.display_order,
              media.mime_type,
              media.media_type,
              media.id,
              id,
            ]
          );
        }
      }
    }
    // 3. service_offerings update //
    if (Array.isArray(data?.service_offerings)) {
      for (const offering of data.service_offerings) {
        if (offering.id) {
          await client.query(
            `UPDATE service_offerings
             SET service_name = $1, updated_at = NOW()
             WHERE id = $2 AND specialists = $3`,
            [offering.service_name, offering.id, id]
          );
        }
      }
    }

    await client.query("COMMIT");
    return id;
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
};

export const remove = async (id: string) => {
  const client = await db.connect();
  try {
    await client.query("BEGIN");
    // 1. Update specialist table deleted_at field //
    await client.query(
      `UPDATE specialists
       SET deleted_at = NOW()
       WHERE id = $1`,
      [id]
    );
    // 2. Update media table deleted_at field //
    await client.query(
      `UPDATE media
       SET deleted_at = NOW()
       WHERE specialists = $1`,
      [id]
    );
    // 3. Update service_offerings table deleted_at field //
    await client.query(
      `UPDATE service_offerings
       SET deleted_at = NOW()
       WHERE specialists = $1`,
      [id]
    );
    // 4. Update platform_fee table deleted_at field //
    await client.query(
      `UPDATE platform_fee
       SET deleted_at = NOW()
       WHERE specialists = $1`,
      [id]
    );

    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
};
