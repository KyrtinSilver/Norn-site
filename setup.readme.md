## Norn Site Setup

This is a Next.js static site using the App Router, TypeScript, Tailwind CSS, and Shadcn UI components.

### Prerequisites

- Node.js LTS
- npm (comes with Node.js)

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/KyrtinSilver/Norn-site.git
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
npm run build
```

4. Windows Notes:

To unrestrict use of scripts to install package dependencies, run the following powershell command:
```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

To check the status of the current execution policy, run the following command:
```bash
Get-ExecutionPolicy -List
```

To undo the execution policy, run the following command:
```bash
Set-ExecutionPolicy Restricted -Scope CurrentUser
```

### Project Structure

- `/src/app` - Next.js App Router pages and layouts
- `/src/components` - React components
- `/src/lib` - Utility functions and shared code
- `/public` - Static assets (images, fonts, etc.)

### Key Commands

- `npm run dev` - Start development server
- `npm run build` - Build static site
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

For GitHub Pages, ensure:
- The repository is configured to deploy from the correct branch/directory
- A `.nojekyll` file exists (created automatically by build:static)
- CNAME is set to `norn.ai` if using custom domain 
- The `docs` directory is created and contains the static files
- If changing the domain, update the CNAME file and the `next.config.js` file AND the `package.json` file
- Git Repo is case sensitive (ex: Norn-site vs norn-site)