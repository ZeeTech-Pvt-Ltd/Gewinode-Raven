import { Link } from 'react-router';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import { NAV_LINKS, FOOTER, SITE } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link to="/" className="logo">
              <Logo />
              <span className="logo__text">Gewinode Raven</span>
            </Link>
            <p className="footer__blurb">{FOOTER.blurb}</p>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer__links">
              {NAV_LINKS.filter((l) => l.to !== '/').map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul className="footer__links">
              {FOOTER.legal.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer__contact">
              <li>
                <Icon name="mail" size={16} />
                {SITE.email}
              </li>
              <li>
                <Icon name="headset" size={16} />
                24/7 human &amp; AI support
              </li>
              <li>
                <Icon name="globe" size={16} />
                gewinoderaven.com — the only official domain
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__disclaimer">{FOOTER.disclaimer}</p>
          <p className="footer__copyright">Copyright 2026 © Gewinode Raven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
