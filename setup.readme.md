## Norn Site Setup

This is a Next.js static site using the App Router, TypeScript, Tailwind CSS, and Shadcn UI components.

### Prerequisites

- Node.js 18.17 or later
- npm (comes with Node.js)

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/ci-psy-team/norn-site.git
cd norn-site
```

2. Install dependencies:
```bash
npm install
```

3. Local Development:
```bash
npm run dev
```
The site will be available at http://localhost:3000

4. Build Static Site:
```bash
npm run build:static
```
This will create an optimized production build in the `out` directory.

5. Serve Static Build Locally:
```bash
npm run serve
```
The static site will be served at http://localhost:3000

### Project Structure

- `/src/app` - Next.js App Router pages and layouts
- `/src/components` - React components
- `/src/lib` - Utility functions and shared code
- `/public` - Static assets (images, fonts, etc.)

### Key Commands

- `npm run dev` - Start development server
- `npm run build:static` - Build static site
- `npm run serve` - Serve static build locally
- `npm run lint` - Run ESLint

### Dependencies

The project uses:
- Next.js 14.x (App Router)
- React 18.x
- TypeScript 5.x
- Tailwind CSS
- Shadcn UI + Radix UI Components
- Geist Font

### Deployment

The site is configured for static export and can be deployed to any static hosting service. For GitHub Pages deployment:

1. Build the static site:
```bash
npm run build:static
```

2. The `out` directory will contain all static files ready for deployment.

3. For GitHub Pages, ensure:
- The repository is configured to deploy from the correct branch/directory
- A `.nojekyll` file exists (created automatically by build:static)
- CNAME is set to `norn.ai` if using custom domain 