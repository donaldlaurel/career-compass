'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/background', label: 'BACKGROUND OF THE ISSUE' },
    { href: '/more-information', label: 'MORE INFORMATION' },
    { href: '/assessment', label: 'ASSESSMENT' },
    { href: '/call-to-action', label: 'CALL TO ACTION' },
    { href: '/about', label: 'ABOUT US' },
  ];

  return (
    <nav className="navbar">
      <style>{`
        .navbar {
          background: linear-gradient(to right, #ffc8e0, #ffd9b3, #fffacd, #b3f0e1);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: #6b5344;
          font-weight: 700;
          font-size: 1.25rem;
        }

        .navbar-logo img {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }

        .navbar-logo-text {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .navbar-menu {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .navbar-menu a {
          color: #6b5344;
          font-weight: 600;
          font-size: 0.875rem;
          text-decoration: underline;
          border-bottom: 2px solid transparent;
          padding-bottom: 0.25rem;
          transition: all 0.3s ease;
        }

        .navbar-menu a:hover {
          color: #ff69b4;
        }

        .navbar-menu a.active {
          color: #ff69b4;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            gap: 1rem;
          }

          .navbar-menu {
            flex-direction: column;
            gap: 0.75rem;
            width: 100%;
          }

          .navbar-menu a {
            font-size: 0.75rem;
          }
        }
      `}</style>

      <Link href="/" className="navbar-logo">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/37153dd7-4d5c-4795-a10b-0d9743c223e5-rOhgbvUiskdv8vijzPlK4JfAKbVSod.jpg" alt="Career Compass Logo" />
        <div className="navbar-logo-text">
          <span>CAREER</span>
          <span>COMPASS</span>
        </div>
      </Link>

      <ul className="navbar-menu">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={pathname === item.href ? 'active' : ''}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
