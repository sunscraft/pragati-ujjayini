import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import WhatsAppButton from '@/components/whatsAppButton'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
})

const siteUrl = 'https://pragati-ujjayini.example.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pragati Ujjayini | Digital Marketing for Bharat's Local Businesses",
    template: '%s | Pragati Ujjayini',
  },
  description:
    "Pragati Ujjayini empowers local shop owners, doctors, and restaurants across Bharat's cities with high-end digital growth strategies — Google Business, Local SEO, WhatsApp marketing, paid ads, and websites.",

  // FIXED: Added Google Site Verification string from your HTML token snippet
  verification: {
    google: 'google5e97253ae38c5c62',
  },

  // FIXED: Added absolute link declarations to replace the fallback WordPress logo asset
  icons: {
    icon: '/pragatiiujjayini-logo.png',       // This displays your logo in standard browser tabs
    apple: '/pragatiiujjayini-logo.png',      // This displays your logo when saved on iPhones/iPads
  },

  keywords: [
    'digital marketing India',
    'local business marketing',
    'Local SEO',
    'Google Business Profile',
    'WhatsApp marketing',
    'small business digital growth',
    'Bharat digital marketing agency',
    'Pragati Ujjayini',
  ],
  authors: [{ name: 'Pragati Ujjayini' }],
  creator: 'Pragati Ujjayini',
  publisher: 'Pragati Ujjayini',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Pragati Ujjayini',
    title: "Pragati Ujjayini | Empowering Bharat's Cities",
    description:
      'High-end digital growth strategies for local businesses across Bharat — built for shop owners, doctors, and restaurants.',
    images: [
      {
        url: '/images/hero-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Pragati Ujjayini digital growth dashboards',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pragati Ujjayini | Empowering Bharat's Cities",
    description:
      'High-end digital growth strategies for local businesses across Bharat.',
    images: ['/images/hero-dashboard.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: 'v0.app',
}

// FIXED: Changed themeColor to a light/neutral tone (#ffffff) to stop mobile browsers from assuming a dark mode background 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
  colorScheme: 'light',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Pragati Ujjayini',
  description:
    'Digital marketing agency empowering local businesses across Bharat with Local SEO, Google Business, WhatsApp marketing, paid advertising, and websites.',
  url: siteUrl,
  areaServed: 'India',
  serviceType: [
    'Local SEO',
    'Google Business Profile',
    'WhatsApp Marketing',
    'Paid Advertising',
    'Web Design',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ujjain',
    addressRegion: 'Madhya Pradesh',
    addressCountry: 'IN',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // FIXED: Appended the explicit "light" class and locked style colorScheme to 'light' 
    // This blocks your mobile operating systems from forcing an automatic dark inversion layout.
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} bg-background light`}
      style={{ colorScheme: 'light' }}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />

        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <WhatsAppButton />
        <SiteFooter />
      </body>
    </html>
  )
}