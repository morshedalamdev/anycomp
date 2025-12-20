-- CREATE DATABASE
CREATE DATABASE anycomp_db;
-- ENABLE pgcrypto EXTENSION FOR UUID GENERATION
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ENUM TYPE FOR VERIFICATION STATUS
CREATE TYPE verification_status_enum AS ENUM ('pending', 'approved', 'rejected');
-- CREATE SPECIALISTS TABLE 
CREATE TABLE specialists (
     id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
     average_rating NUMERIC(2,1) DEFAULT 0.0,
     is_draft BOOLEAN NOT NULL DEFAULT FALSE,
     total_number_of_ratings INTEGER NOT NULL DEFAULT 0,
     title VARCHAR(255) NOT NULL,
     slug VARCHAR(255) UNIQUE NOT NULL,
     service_category VARCHAR(255) NOT NULL,
     description TEXT,
     base_price NUMERIC(10,2) NOT NULL,
     platform_fee NUMERIC(10,2),
     final_price NUMERIC(10,2),
     verification_status verification_status_enum NOT NULL DEFAULT 'pending',
     is_verified BOOLEAN NOT NULL DEFAULT FALSE,
     duration_days INTEGER NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
     deleted_at TIMESTAMP WITH TIME ZONE,
     updated_at TIMESTAMP WITH TIME ZONE
)

-- ENUM TYPE FOR MIME TYPES AND MEDIA TYPES
CREATE TYPE mime_type_enum AS ENUM ('image/jpg', 'image/jpeg', 'image/png', 'image/webp');
CREATE TYPE media_type_enum AS ENUM ('jpg', 'jpeg', 'png', 'webp');
-- CREATE MEDIA TABLE
CREATE TABLE media (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     specialists UUID NOT NULL REFERENCES specialists(id),
     file_name VARCHAR(255) NOT NULL,
     file_size INTEGER NOT NULL,
     file_url TEXT NOT NULL,
     display_order INTEGER NOT NULL,
     mime_type mime_type_enum NOT NULL,
     media_type media_type_enum NOT NULL,
     uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP WITH TIME ZONE,
     deleted_at TIMESTAMP WITH TIME ZONE
)

-- ENUM TYPE FOR SUBSCRIPTION TIERS
CREATE TYPE tier_name_enum AS ENUM ('basic', 'pro', 'enterprise');
-- CREATE PLATFORM FEE TABLE
CREATE TABLE platform_fee(
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     specialists UUID NOT NULL REFERENCES specialists(id),
     tier_name tier_name_enum NOT NULL,
     min_value INTEGER NOT NULL,
     max_value INTEGER NOT NULL,
     platform_fee_percentage NUMERIC(5,2) NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP WITH TIME ZONE,
     deleted_at TIMESTAMP WITH TIME ZONE
)

-- CREATE SERVICE OFFERINGS TABLE
CREATE TABLE service_offerings(
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     specialists UUID REFERENCES specialists(id),
     service_name VARCHAR(255) NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP WITH TIME ZONE,
     deleted_at TIMESTAMP WITH TIME ZONE
)

-- QUERY TO FIND SPECIALISTS WITH MEDIA & SERVICE OFFERINGS
SELECT s.*,
-- SUBQUERY FOR MEDIA
(
SELECT COALESCE(
     JSON_AGG(m.*), '[]')
FROM media m
WHERE m.specialists = s.id
 ) AS medias,
-- SUBQUERY FOR SERVICE OFFERINGS
 (
SELECT COALESCE(
     JSON_AGG(so.*), '[]')
FROM service_offerings so
WHERE so.specialists = s.id
) AS service_offerings
FROM specialists s
WHERE s.deleted_at IS NULL
ORDER BY s.created_at DESC;

-- QUERY TO GET A SPECIALIST BY ID WITH MEDIA & SERVICE OFFERINGS & PLATFORM FEES
`SELECT s.*,
    (
      SELECT COALESCE(
        JSON_AGG(m.*), '[]')
      FROM media m
      WHERE m. specialists = s.id
    ) AS medias,
    (
      SELECT COALESCE(
        JSON_AGG(so.*), '[]')
      FROM service_offerings so
      WHERE so.specialists = s.id
    ) AS service_offerings,
    (
    SELECT COALESCE(
        JSON_AGG(pf.*), '[]')
       FROM platform_fee pf
       WHERE pf.specialists = s.id
     ) AS platform_fees
    FROM specialists s
    WHERE s.id = $1;`,
    [id]