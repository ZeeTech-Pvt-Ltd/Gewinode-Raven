export default function Logo() {
  return (
    <svg className="logo__mark" viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff8a3d" />
          <stop offset="1" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="#211c17" stroke="#39312a" />
      <path d="M7 22 L13 10 L17 14 L13 22 Z" fill="url(#logo-grad)" />
      <path d="M14 21 L19 9 L23 14 L19 21 Z" fill="url(#logo-grad)" opacity="0.65" />
    </svg>
  );
}
