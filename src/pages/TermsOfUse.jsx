import LegalPage from '../components/LegalPage.jsx';
import { LEGAL } from '../data/content.js';

export default function TermsOfUse() {
  return <LegalPage content={LEGAL.terms} path="/terms-of-use" />;
}
