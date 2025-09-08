# Vishvendra Khangarot - Portfolio Website

A modern, responsive, and interactive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional, and visually appealing interface
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Smooth theme switching with system preference detection
- **Parallax Effects**: Smooth parallax scrolling and animations throughout
- **Interactive Components**: Animated sections, skill bars, and interactive elements
- **SEO Optimized**: Meta tags, sitemap, and Open Graph tags for better search visibility
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **Accessibility**: Designed with accessibility best practices in mind

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Fira Code (Google Fonts)

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── sitemap.ts         # Dynamic sitemap generation
├── components/            # Reusable components
│   ├── sections/          # Page sections
│   ├── AnimatedSection.tsx
│   ├── Navigation.tsx
│   └── ParallaxBackground.tsx
├── data/                  # Static data and content
│   └── index.ts
├── hooks/                 # Custom React hooks
│   ├── useParallax.ts
│   └── useTheme.ts
├── lib/                   # Utility functions
│   └── utils.ts
└── types/                 # TypeScript type definitions
    └── index.ts
```

## 🎨 Sections

1. **Hero/Home** - Introduction with animated background and call-to-action
2. **About** - Personal information, stats, and contact details
3. **Skills** - Interactive skill showcase with filtering and progress bars
4. **Experience** - Professional experience timeline
5. **Projects** - Featured projects with detailed modals
6. **Education** - Academic background and achievements
7. **Certificates** - Professional certifications and credentials
8. **Contact** - Contact form and social links

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd vishvendra-portfolio-sept25
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 📝 Customization

### Update Personal Information

Edit the data in `src/data/index.ts` to reflect your personal information:

- Personal details (name, title, bio, contact info)
- Skills and proficiency levels
- Work experience
- Projects and portfolio items
- Education and achievements
- Certifications
- Social media links

### Add Your Resume

Replace the placeholder resume file:
1. Add your resume PDF to the `public` folder
2. Update the download link in `src/components/sections/HeroSection.tsx`

### Add Images

Add your images to the `public/images` folder:
- Profile picture
- Project screenshots
- Company logos
- Certificate images

### Customize Styling

The project uses Tailwind CSS with custom configurations in `tailwind.config.ts`:
- Colors and gradients
- Animations and keyframes
- Typography settings
- Custom utility classes

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Heroku

## 📱 Progressive Web App

The site includes a web manifest (`public/site.webmanifest`) for PWA capabilities:
- Installable on mobile devices
- Offline support ready
- App-like experience

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Contact

- **Email**: vishvendra@example.com
- **LinkedIn**: [linkedin.com/in/vishvendra](https://linkedin.com/in/vishvendra)
- **GitHub**: [github.com/vishvendra](https://github.com/vishvendra)

---

Built with ❤️ by Vishvendra Khangarot
