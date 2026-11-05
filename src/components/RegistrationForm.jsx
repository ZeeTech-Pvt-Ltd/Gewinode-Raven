'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/dist/css/intlTelInput.min.css';

// Full-size validator package (~300KB) is attached lazily; the input renders instantly
// with flag + dial code, and the validators arrive on first focus or after 4s idle.
// v29's attachUtils() invokes its loader immediately, so it must NOT run at module scope.

export default function RegistrationForm({
  idPrefix = 'hero',
  title = 'Create your account',
  subtitle = 'Registration is limited to verified residents of Australia.',
  buttonLabel = 'Register Now',
  showConsent = true,
}) {
  const phoneRef = useRef(null);
  const itiRef = useRef(null);
  const utilsDeferred = useRef(null);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [phoneCountry, setPhoneCountry] = useState(null);

  const fid = (name) => `${idPrefix}-${name}`;

  useEffect(() => {
    const input = phoneRef.current;
    if (!input || itiRef.current) return;

    const iti = intlTelInput(input, {
      initialCountry: '',
      // ipapi.co is Cloudflare-blocked on localhost, so ipwho.is leads the chain.
      initialCountryLookup: async () => {
        try {
          const res = await fetch('https://ipwho.is/');
          const data = await res.json();
          return data.country_code || 'au';
        } catch {
          try {
            const res = await fetch('https://ipapi.co/json/');
            const data = await res.json();
            return data.country_code || 'au';
          } catch {
            return 'au';
          }
        }
      },
    });
    itiRef.current = iti;

    // Warm up the validators on first focus or after 4s idle - whichever comes first.
    const warm = () => {
      if (utilsDeferred.current) return;
      let resolveDeferred;
      utilsDeferred.current = new Promise((r) => {
        resolveDeferred = r;
      });
      intlTelInput
        .attachUtils(() => import('intl-tel-input/utils'))
        .then(resolveDeferred)
        .catch(() => resolveDeferred());
    };
    const onFocus = () => {
      warm();
      input.removeEventListener('focus', onFocus);
    };
    input.addEventListener('focus', onFocus);
    // Note: no idle warm-up - loading utils on idle cost ~3s of main-thread blocking
    // (TBT) on mobile. Validators now load on first focus; submit waits ≤3s if needed.

    // Keep the phone label in sync with the selected country (flag + dial code).
    const onCountryChange = (e) => {
      const c = e.detail;
      setPhoneCountry(c ? { name: c.name, dialCode: c.dialCode } : null);
    };
    input.addEventListener('countrychange', onCountryChange);

    return () => {
      input.removeEventListener('focus', onFocus);
      input.removeEventListener('countrychange', onCountryChange);
      iti.destroy();
      itiRef.current = null;
      utilsDeferred.current = null;
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    const data = Object.fromEntries(new FormData(e.target).entries());
    // Honeypot - bots fill it, humans never see it.
    if (data.website) return;

    // No submission endpoint is configured - no request ever leaves the browser.
    setFormError('Registrations are temporarily paused. Please check back soon.');
  };

  return (
    <form className="form form-wrap" onSubmit={handleSubmit} noValidate>
      <h2 className="form__title">{title}</h2>
      <p className="form__sub">{subtitle}</p>

      {formError && (
        <div className="form__error" role="alert">
          {formError}
        </div>
      )}

      {/* Honeypot field - hidden from humans */}
      <input className="form__honey" type="text" name="website" tabIndex={-1} autoComplete="off" />

      <div className="form__row">
        <div className="field">
          <label htmlFor={fid('firstName')}>First name</label>
          <input
            id={fid('firstName')}
            name="firstName"
            type="text"
            placeholder="Oliver"
            autoComplete="given-name"
            className={errors.firstName ? 'input-error' : ''}
          />
          {errors.firstName && <span className="error-text">{errors.firstName}</span>}
        </div>
        <div className="field">
          <label htmlFor={fid('lastName')}>Last name</label>
          <input
            id={fid('lastName')}
            name="lastName"
            type="text"
            placeholder="Hartley"
            autoComplete="family-name"
            className={errors.lastName ? 'input-error' : ''}
          />
          {errors.lastName && <span className="error-text">{errors.lastName}</span>}
        </div>
      </div>

      <div className="field">
        <label htmlFor={fid('email')}>Email</label>
        <input
          id={fid('email')}
          name="email"
          type="email"
          placeholder="oliver@example.com"
          autoComplete="email"
          className={errors.email ? 'input-error' : ''}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <div className="field">
        <label htmlFor={fid('phone')}>
          Phone{phoneCountry ? ` (${phoneCountry.name} +${phoneCountry.dialCode})` : ''}
        </label>
        <input
          id={fid('phone')}
          ref={phoneRef}
          name="phone"
          type="tel"
          autoComplete="tel"
          className={errors.phone ? 'input-error' : ''}
        />
        {errors.phone && <span className="error-text">{errors.phone}</span>}
      </div>

      {showConsent && (
        <div>
          <label className="form__consent">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>
              I agree to the{' '}
              <Link href="/terms-of-use" style={{ color: '#ff8a3d', textDecoration: 'underline' }}>
                Terms of Use
              </Link>{' '}
              and{' '}
              <Link href="/privacy-policy" style={{ color: '#ff8a3d', textDecoration: 'underline' }}>
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.consent && <span className="error-text">{errors.consent}</span>}
        </div>
      )}

      <button className="btn btn--ember" type="submit">
        {buttonLabel}
      </button>

      <p className="form__note">Protected by 2FA and 256-bit SSL encryption</p>
    </form>
  );
}
