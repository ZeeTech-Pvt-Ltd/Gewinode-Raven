import { useEffect } from 'react';
import { SITE } from '../data/content.js';

const setOrCreate = (attr, value, content) => {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${value}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

export default function useMeta({ title, description, path = '/' }) {
  useEffect(() => {
    const url = `${SITE.url.replace(/\/$/, '')}${path}`;
    document.title = title;

    setOrCreate('name', 'description', description);
    setOrCreate('property', 'og:title', title);
    setOrCreate('property', 'og:description', description);
    setOrCreate('property', 'og:url', url);
    setOrCreate('property', 'og:image', `${SITE.url}og-image.png`);
    setOrCreate('property', 'og:type', 'website');
    setOrCreate('name', 'twitter:card', 'summary_large_image');
    setOrCreate('name', 'twitter:title', title);
    setOrCreate('name', 'twitter:description', description);
    setOrCreate('name', 'twitter:image', `${SITE.url}og-image.png`);

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }, [title, description, path]);
}
