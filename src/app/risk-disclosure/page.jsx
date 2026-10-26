import LegalPage from '@/components/LegalPage';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { LEGAL } from '@/data/content';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: LEGAL.risk.seoTitle,
  description: LEGAL.risk.description,
  path: '/risk-disclosure',
  keywords: LEGAL.risk.keywords,
});

export default function RiskDisclosure() {
  return (
    <>
      <BreadcrumbSchema path="/risk-disclosure" />
      <LegalPage content={LEGAL.risk} />
    </>
  );
}
