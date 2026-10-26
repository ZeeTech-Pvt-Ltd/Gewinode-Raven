import { Sora, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/data/content';
import './globals.css';

// Self-hosted fonts wired into the existing CSS variables (--font-display / body / mono).
const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora',
  display: 'optional',
});
const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-sans',
  display: 'optional',
});
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'optional',
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Gewinode Raven: AI-Powered Trading Platform for Australia',
    template: '%s',
  },
  description:
    "Gewinode Raven is Australia's AI-powered trading platform. Automated trading at 85% accuracy, 95% cold storage and 24/7 support.",
  keywords: [
    'Gewinode Raven',
    'AI trading platform',
    'automated trading',
    'AI trading engine',
    'trading platform Australia',
    'automated trading Australia',
    'AI trading Australia',
    'secure trading platform',
    'cold storage trading',
  ],
  openGraph: {
    siteName: SITE.name,
    locale: 'en_AU',
    type: 'website',
    images: [{ url: `${SITE.url}og-image.png` }],
  },
  verification: { google: '5DU5oegN3jo4DOisAehaRNwwjSWof_Rtp9IF7_2Ag2Y' },
  icons: { icon: '/favicon.svg' },
};

export const viewport = { themeColor: '#0e0c0a' };

const GA_ID = 'G-9CGGKMZBNB';

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}favicon.svg`,
  description:
    "Gewinode Raven is Australia's AI-powered trading platform. Automated trading at 85% accuracy, 95% cold storage and zero hidden fees.",
};

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-AU"
      className={`${sora.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');`,
        }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
