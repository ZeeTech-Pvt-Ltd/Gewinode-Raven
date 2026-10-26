import LegalPage from '@/components/LegalPage';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { LEGAL } from '@/data/content';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: LEGAL.privacy.seoTitle,
  description: LEGAL.privacy.description,
  path: '/privacy-policy',
  keywords: LEGAL.privacy.keywords,
});

export default function PrivacyPolicy() {
  return (
    <>
      <BreadcrumbSchema path="/privacy-policy" />
      <LegalPage content={LEGAL.privacy} />
    </>
  );
}
