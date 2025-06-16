# Archived Pages

This directory contains pages that have been temporarily removed from the build to keep only the essential pages active.

## Currently Active Pages:
- **Home page**: `src/app/(marketing)/page.tsx`
- **Contact page**: `src/app/(marketing)/contact/page.tsx` (moved from company/contact)
- **Coming soon page**: `src/app/(marketing)/coming-soon/page.tsx`
- **Styles pages**: 
  - `src/app/(marketing)/styles/page.tsx`
  - `src/app/(marketing)/styles/backgrounds/page.tsx`
- **Generic coming soon component**: `src/components/generic-coming-soon.tsx`

## Archived Content:
- `app-pages/resources/` - Resource pages
- `app-pages/research/` - Research content
- `app-pages/industries/` - Industry-specific pages
- `app-pages/features/` - Feature documentation
- `app-pages/collaboration/` - Collaboration pages
- `app-pages/company/` - Company pages (including main company page and layout)
- `app-pages/(docs)/` - Documentation pages
- `docs.ts` - Docs utility library (was in src/lib/)

## Removed Files (Build Dependencies):
- `src/app/api/docs/` - API route that was scanning docs directory
- Updated `src/app/sitemap.ts` to not scan docs directory

## URL Changes Made:
- **Contact page moved**: `/company/contact` → `/contact` for cleaner URL structure
- Updated all internal links and references

## To Restore Pages:
1. Move the desired directory from `archive/app-pages/` back to `src/app/(marketing)/`
2. Ensure all dependencies and imports are working
3. Test the build with `npm run build`

## Example:
```bash
# To restore the research pages:
mv archive/app-pages/research src/app/(marketing)/
``` 