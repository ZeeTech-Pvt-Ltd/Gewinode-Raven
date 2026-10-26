import LegalPage from '@/components/LegalPage';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { LEGAL } from '@/data/content';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: LEGAL.terms.seoTitle,
  description: LEGAL.terms.description,
  path: '/terms-of-use',
  keywords: LEGAL.terms.keywords,
});

export default function TermsOfUse() {
  return (
    <>
      <BreadcrumbSchema path="/terms-of-use" />
      <LegalPage content={LEGAL.terms} />
    </>
  );
}
