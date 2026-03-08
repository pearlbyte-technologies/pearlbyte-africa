'use client';

import { useEffect, useState } from 'react';

export default function MobileMenu({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 821px)');

    const syncMenuState = (event) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    syncMenuState(mediaQuery);
    mediaQuery.addEventListener('change', syncMenuState);

    return () => mediaQuery.removeEventListener('change', syncMenuState);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className={`mobile-menu${isOpen ? ' mobile-menu-open' : ''}`}>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="mobile-menu-label">Menu</span>
        <span className="mobile-menu-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      {isOpen ? (
        <div className="mobile-menu-panel" id="mobile-navigation">
          <nav className="mobile-nav" aria-label="Mobile">
            {links.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button-ghost mobile-menu-cta" href="#contact" onClick={closeMenu}>
            Start a Conversation
          </a>
        </div>
      ) : null}
    </div>
  );
}
