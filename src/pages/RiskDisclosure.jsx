import LegalPage from '../components/LegalPage.jsx';
import { LEGAL } from '../data/content.js';

export default function RiskDisclosure() {
  return <LegalPage content={LEGAL.risk} path="/risk-disclosure" />;
}
