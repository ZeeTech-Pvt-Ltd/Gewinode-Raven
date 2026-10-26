import { SITE } from '@/data/content';

// Shared SEO defaults - replaces the old useMeta hook via Next's Metadata API.

export const BASE_KEYWORDS = [
  'Gewinode Raven',
  'AI trading platform',
  'automated trading',
  'AI trading engine',
  'trading platform Australia',
];

export const siteUrl = (path = '/') => `${SITE.url.replace(/\/$/, '')}${path}`;

export function pageMeta({ title, description, path = '/', keywords = [] }) {
  const url = siteUrl(path);
  return {
    title,
    description,
    keywords: [...BASE_KEYWORDS, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: 'en_AU',
      type: 'website',
      images: [{ url: `${SITE.url}og-image.png` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE.url}og-image.png`],
    },
  };
}
