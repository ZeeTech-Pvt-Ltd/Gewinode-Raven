import LegalPage from '../components/LegalPage.jsx';
import { LEGAL } from '../data/content.js';

export default function PrivacyPolicy() {
  return <LegalPage content={LEGAL.privacy} path="/privacy-policy" />;
}
