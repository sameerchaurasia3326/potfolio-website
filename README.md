# Aanchal Chaurasia - Portfolio Website

A professional, animated, and responsive portfolio website for **Aanchal Chaurasia**, a Graphic Designer and AI Content Creator.

## 🚀 Built With

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

## ✨ Features

- 🎨 Modern, elegant design with purple accent colors
- 🌊 Smooth animations and transitions
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Optimized performance
- 🔍 SEO-friendly with meta tags
- 📧 Contact form with Formspree integration
- 🎯 Clean, maintainable code structure

## 📄 Pages

1. **Home** - Hero section, featured projects, skills strip
2. **About** - Bio, achievements, skills breakdown
3. **Portfolio** - Project gallery with filtering
4. **Experience** - Timeline of professional experience
5. **Contact** - Contact form and social links

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd potfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Contact Form

The contact form uses Formspree. To enable it:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update the form endpoint in `app/contact/page.tsx`:

```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
```

### Resume

Replace the placeholder resume at `/public/Aanchal_Chaurasia_Resume.pdf` with your actual resume PDF.

### Images

Add project images to `/public/projects/` directory:
- branding.jpg
- ai-art.jpg
- ecommerce.jpg
- ngo.jpg
- etc.

### OG Image

Replace `/public/og-image.jpg` with your social preview image (1200x630px recommended).

## 📦 Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

This project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🎨 Customization

### Colors

Update the color scheme in `app/globals.css`:

```css
:root {
  --primary: 262 83% 58%; /* Purple */
  --accent: 262 83% 58%;
}
```

### Fonts

Fonts are configured in `app/layout.tsx`. Currently using:
- **Poppins** for headings
- **Inter** for body text

To change fonts, update the imports from `next/font/google`.

### Content

- Update personal information in each page component
- Modify projects, experience, and skills data in respective page files
- Update social links in `components/Footer.tsx` and `app/contact/page.tsx`

## 📁 Project Structure

```
potfolio/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── experience/
│   │   └── page.tsx
│   ├── portfolio/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AnimatedSection.tsx
│   ├── Footer.tsx
│   └── Navbar.tsx
├── public/
│   ├── Aanchal_Chaurasia_Resume.pdf
│   ├── og-image.jpg
│   └── projects/
├── package.json
└── README.md
```

## 🤝 Contributing

This is a personal portfolio project. If you'd like to use it as a template:

1. Fork the repository
2. Customize the content with your information
3. Deploy to your own hosting

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Aanchal Chaurasia**

- Portfolio: [your-domain.com](https://your-domain.com)
- Behance: [@aanchalchaurasia14](https://www.behance.net/aanchalchaurasia14)
- Medium: [@ACAIBLOGER](https://medium.com/@ACAIBLOGER)
- LinkedIn: [Aanchal Chaurasia](https://www.linkedin.com/in/aanchal-chaurasia-094521211/)
- Email: aanchalchaurasia86@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide](https://lucide.dev)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

⭐ If you found this project helpful, please give it a star!
