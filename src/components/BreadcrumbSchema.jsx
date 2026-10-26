import { NAV_LINKS, SITE } from '@/data/content';
import { siteUrl } from '@/lib/seo';

const titleCase = (slug) =>
  slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

// BreadcrumbList structured data on inner pages - mirrors the old useMeta hook.
export default function BreadcrumbSchema({ path }) {
  const slug = path.replace(/^\//, '').replace(/\/$/, '');
  const label =
    NAV_LINKS.find((l) => l.to === path)?.label || titleCase(slug.replace(/-/g, ' '));
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: label, item: siteUrl(path) },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
  );
}
