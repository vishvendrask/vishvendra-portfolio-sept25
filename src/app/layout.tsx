import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import AnimatedBackground from '@/components/AnimatedBackground'
import { ThemeProvider } from '@/providers/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Vishvendra Singh Khangarot - Senior Full-Stack Developer',
  description: 'Senior Full-Stack Developer with 7+ years of experience delivering high-performance web and mobile applications for global clients including Google and DBS Bank. Expert in React.js, Angular, Node.js, RESTful APIs, and micro-frontend architectures.',
  keywords: 'Full Stack Developer, React, Next.js, Node.js, TypeScript, JavaScript, Web Development, Software Engineer',
  authors: [{ name: 'Vishvendra Khangarot' }],
  creator: 'Vishvendra Khangarot',
  publisher: 'Vishvendra Khangarot',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vishvendra.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vishvendra.dev',
    title: 'Vishvendra Singh Khangarot - Senior Full-Stack Developer',
    description: 'Senior Full-Stack Developer with 7+ years of experience delivering high-performance web and mobile applications for global clients including Google and DBS Bank.',
    siteName: 'Vishvendra Khangarot Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vishvendra Khangarot - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishvendra Singh Khangarot - Senior Full-Stack Developer',
    description: 'Senior Full-Stack Developer with 7+ years of experience in React.js, Angular, Node.js, and mobile development.',
    images: ['/images/og-image.jpg'],
    creator: '@vishvendra',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme') || 
                           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.body.classList.add('dark');
                }
              } catch (e) {}
            })();
          `
        }} />
      </head>
      <body className={`${inter.className} antialiased text-gray-900 dark:text-white transition-colors duration-300`}>
        <ThemeProvider defaultTheme="light" storageKey="theme">
          <AnimatedBackground variant="hero" intensity="high" />
          <Navigation />
          <main className="relative z-10 pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
