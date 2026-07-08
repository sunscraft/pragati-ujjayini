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

// UPDATED: Using your real production URL instead of the placeholder domain
const siteUrl = 'https://www.pragatiujjayini.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pragati Ujjayini | Digital Marketing for Bharat's Local Businesses",
    template: '%s | Pragati Ujjayini',
  },
  description:
    "Pragati Ujjayini empowers local shop owners, doctors, and restaurants across Bharat's cities with high-end digital growth strategies — Google Business, Local SEO, WhatsApp marketing, paid ads, and websites.",

  verification: {
    google: 'XU-CFWbCfgysHtLxEvpvI56G6ysmemgWBQ-E1WxK',
  },

  icons: {
    icon: '/pragati-ujjayini-logo.png',
    apple: '/pragati-ujjayini-logo.png',
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
        url: 'https://www.pragatiujjayini.com/pragati-ujjayini-logo.png',
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
  colorScheme: 'light',
}

// Existing Professional Service Schema
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

// NEW STRUCTURAL DATA: Sitelinks Searchbox Schema
const sitelinksJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Pragati Ujjayini',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} bg-background light`}
      style={{ colorScheme: 'light' }}
    >
      <body className="font-sans antialiased">
        {/* Professional Service Mapping */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Sitelinks Box Mapping */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksJsonLd) }}
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