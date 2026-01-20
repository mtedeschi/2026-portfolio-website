# Next.js + Tailwind CSS + shadcn/ui Project

A modern React application built with Next.js 16, Tailwind CSS v4, and shadcn/ui components.

## 🚀 Tech Stack

- **Next.js 16.1.4** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **ESLint** - Code linting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20.17.0 or higher (or 22.9.0+)
- **npm** 10.2.4 or higher (or use yarn/pnpm/bun)

## 🛠️ Setup Instructions

### 1. Install Dependencies

If you haven't already installed the dependencies, run:

```bash
npm install
```

This will install all required packages including:
- Next.js and React
- Tailwind CSS and PostCSS
- shadcn/ui dependencies (class-variance-authority, clsx, tailwind-merge, lucide-react)
- TypeScript and type definitions
- ESLint configuration

### 2. Run the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your application.

The page will automatically reload when you make changes to the code.

### 3. Build for Production

Create an optimized production build:

```bash
npm run build
```

### 4. Start Production Server

After building, start the production server:

```bash
npm start
```

### 5. Lint Your Code

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## 📁 Project Structure

```
mtedeschi/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles with Tailwind and shadcn variables
│   ├── components/       # React components
│   │   └── ui/          # shadcn/ui components (add components here)
│   └── lib/
│       └── utils.ts     # Utility functions (cn helper for className merging)
├── public/              # Static assets
├── components.json      # shadcn/ui configuration
├── tsconfig.json       # TypeScript configuration
├── next.config.ts      # Next.js configuration
├── postcss.config.mjs  # PostCSS configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Using shadcn/ui Components

### Adding Components

To add shadcn/ui components to your project, use the CLI:

```bash
npx shadcn@latest add [component-name]
```

For example:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

### Available Component Aliases

The project is configured with the following import aliases:

- `@/components` - Your custom components
- `@/components/ui` - shadcn/ui components
- `@/lib` - Utility functions
- `@/lib/utils` - Utility functions (includes `cn` helper)
- `@/hooks` - Custom React hooks

### Example Usage

```tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function MyComponent() {
  return (
    <Card>
      <Button className={cn("mt-4")}>
        Click me
      </Button>
    </Card>
  )
}
```

## 🎨 Tailwind CSS Configuration

This project uses **Tailwind CSS v4** with the new `@import` syntax. The configuration is in `src/app/globals.css`.

### Customization

- **Colors**: Modify CSS variables in `globals.css` (both light and dark mode)
- **Fonts**: Configured via Next.js font optimization
- **Border Radius**: Customizable via `--radius` CSS variable

### Dark Mode

Dark mode is supported via the `.dark` class. The theme variables are automatically configured for both light and dark modes.

## 📦 Key Dependencies

### Production Dependencies

- `next` - Next.js framework
- `react` & `react-dom` - React library
- `class-variance-authority` - Component variant management
- `clsx` - Conditional className utility
- `tailwind-merge` - Merge Tailwind classes intelligently
- `lucide-react` - Icon library (used by shadcn/ui)

### Development Dependencies

- `typescript` - TypeScript compiler
- `@types/node`, `@types/react`, `@types/react-dom` - Type definitions
- `tailwindcss` - Tailwind CSS
- `@tailwindcss/postcss` - PostCSS plugin for Tailwind
- `eslint` & `eslint-config-next` - Linting
- `tw-animate-css` - Animation utilities

## 🔧 Configuration Files

- **`components.json`** - shadcn/ui configuration (style: new-york, baseColor: neutral)
- **`tsconfig.json`** - TypeScript compiler options with path aliases
- **`next.config.ts`** - Next.js configuration
- **`postcss.config.mjs`** - PostCSS configuration for Tailwind

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build

### Other Platforms

Next.js can be deployed to any platform that supports Node.js:

- **Netlify** - Configure build command: `npm run build`
- **AWS Amplify** - Automatic Next.js detection
- **Docker** - Use the official Next.js Docker image

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🐛 Troubleshooting

### npm cache issues

If you encounter npm cache permission errors, run:

```bash
sudo chown -R $(whoami) ~/.npm
```

### Port already in use

If port 3000 is already in use, Next.js will automatically use the next available port (3001, 3002, etc.).

### Component not found

Make sure you've added the component using `npx shadcn@latest add [component-name]` before importing it.

## 📝 License

This project is private and proprietary.
