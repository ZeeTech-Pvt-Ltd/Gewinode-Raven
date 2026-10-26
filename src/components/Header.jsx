'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';
import Icon from '@/components/Icon';
import { NAV_LINKS } from '@/data/content';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <Logo />
          <span className="logo__text">Gewinode Raven</span>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={`nav__link${pathname === l.to ? ' is-active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <Link className="btn btn--ember btn--sm" href="/sign-up">
            Sign Up
          </Link>
          <button
            className="header__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? ' is-open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <Link
            key={l.to}
            href={l.to}
            onClick={() => setOpen(false)}
            className={pathname === l.to ? 'is-active' : ''}
          >
            {l.label}
          </Link>
        ))}
        <Link className="btn btn--ember" href="/sign-up" onClick={() => setOpen(false)}>
          Sign Up
        </Link>
      </div>
    </header>
  );
}
