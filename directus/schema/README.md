# Directus Schema Setup

This directory contains the Directus CMS schema for the Yugo Metals website template.

## Collections Overview

### 1. site_config (Singleton)
Global site configuration and branding.

**Fields:**
- `company_name` - String - Company name
- `tagline` - Text - Company tagline
- `logo` - File - Company logo
- `contact_email` - String - Contact email
- `contact_phone` - String - Contact phone
- `site_id` - UUID (Hidden) - For future multi-tenancy

### 2. homepage_hero
Hero slides for the homepage.

**Fields:**
- `title` - String (Required) - Slide title
- `subtitle` - Text - Slide subtitle
- `description` - Text - Slide description
- `video` - File - Background video (MP4)
- `image` - File - Background image (fallback)
- `order` - Integer - Display order
- `status` - Dropdown (published/draft) - Publication status
- `site_id` - UUID (Hidden) - For future multi-tenancy

### 3. mining_projects
Mining project pages.

**Fields:**
- `id` - UUID (Primary Key)
- `name` - String (Required) - Project name
- `slug` - String (Required) - URL slug
- `hero_image` - File - Hero section background image
- `location` - String - Project location
- `commodity_type` - Dropdown (ree/lithium/base_precious) - Commodity type
- `hero_title` - String - Hero section title
- `hero_subtitle` - Text - Hero section subtitle
- `hero_description` - Text - Hero section description
- `content_sections` - JSON - Page content as structured data
- `status` - Dropdown (published/draft) - Publication status
- `order` - Integer - Display order
- `site_id` - UUID (Hidden) - For future multi-tenancy

## Manual Setup Instructions

1. Start Directus: `docker-compose up -d`
2. Access admin panel: http://localhost:8055
3. Login with admin@yugometals.com / admin123
4. Go to Settings > Data Model
5. Create each collection manually using the field specifications above
6. After setup, export schema using the export script

## Schema Export

Once you've set up the collections in the Directus admin UI, export the schema:

```bash
node scripts/export-directus-schema.js
```

This will create a `snapshot.yaml` file that can be imported into new Directus instances for template replication.

## Content Structure Example

### Homepage Hero Slide:
```json
{
  "title": "Welcome to Yugo Metals",
  "subtitle": "Leading the Future of Critical Minerals",
  "description": "Exploring rare earth elements and battery metals across Australia's most promising mineral regions",
  "video": "uuid-of-herobg.mp4",
  "order": 1,
  "status": "published"
}
```

### Mining Project:
```json
{
  "name": "Mick Well REE Project",
  "slug": "mick-well",
  "hero_image": "uuid-of-hero-image.jpg",
  "location": "Gascoyne Mineral Field, Western Australia",
  "commodity_type": "ree",
  "hero_title": "Mick Well REE Project",
  "hero_subtitle": "Gascoyne Mineral Field, Western Australia",
  "hero_description": "Breakthrough high grade rare earth elements discovery",
  "content_sections": {
    "sections": [
      {
        "type": "text",
        "content": "Project overview text..."
      },
      {
        "type": "stats",
        "data": [
          { "label": "Strike Length", "value": "20km+" }
        ]
      }
    ]
  },
  "status": "published",
  "order": 1
}
```

## Future Multi-Tenancy

All collections include a hidden `site_id` field for future CoreConnect integration. When migrating to multi-tenant:

1. All queries will filter by `site_id`
2. CoreConnect will assign unique `site_id` to each client
3. Custom UI in CoreConnect portal will proxy to Directus API

