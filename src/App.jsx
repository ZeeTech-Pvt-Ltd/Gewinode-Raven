import { Routes, Route, Navigate, useLocation } from 'react-router';
import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import WhyInvest from './pages/WhyInvest.jsx';
import Blog from './pages/Blog.jsx';
import Faqs from './pages/Faqs.jsx';
import Contacts from './pages/Contacts.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import ThankYou from './pages/ThankYou.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfUse from './pages/TermsOfUse.jsx';
import RiskDisclosure from './pages/RiskDisclosure.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/why-invest" element={<WhyInvest />} />
          {/* legacy slugs redirect to the new ones */}
          <Route path="/product" element={<Navigate to="/how-it-works" replace />} />
          <Route path="/why" element={<Navigate to="/why-invest" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/contact-us" element={<Contacts />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/risk-disclosure" element={<RiskDisclosure />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
