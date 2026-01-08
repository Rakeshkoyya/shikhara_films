# Shikhara Films

A modern, responsive website for Shikhara Films - a premier ad production house specializing in television, theatre, and social media advertising.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Service Showcase**: Dedicated sections for TV, theatre, and social media services
- **Portfolio**: Project showcase with detailed case studies
- **Contact Form**: Interactive contact form for client inquiries
- **SEO Optimized**: Built with Next.js for optimal performance and SEO

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd shikharafilms
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
shikharafilms/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services section
│   ├── About.tsx        # About section
│   ├── Portfolio.tsx    # Portfolio showcase
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── public/              # Static assets
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Content

Edit the component files in the `components/` directory to update:
- Company information
- Service details
- Portfolio projects
- Contact information

### Styling

The project uses Tailwind CSS. Modify `tailwind.config.js` to customize:
- Colors
- Fonts
- Spacing
- Breakpoints

### Metadata

Update SEO metadata in `app/layout.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

### Other Platforms

Build the project:
```bash
npm run build
```

The output will be in the `.next` folder, ready for deployment.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Shikhara Films. All rights reserved.

## Contact

For questions or support, reach out to:
- Email: info@shikharafilms.com
- Phone: +91 (123) 456-7890
