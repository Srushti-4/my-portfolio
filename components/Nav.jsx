'use client';

import { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { NAV_LINKS } from '@/lib/content';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [dark, setDark] = useState(false);

  // Apply dark class to <html> whenever the toggle changes.
  useEffect(() => {
    document.documentElement.className = dark ? 'dark' : '';
  }, [dark]);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const onScroll = () => {
      const sections = NAV_LINKS.map((n) => document.getElementById(n.toLowerCase()));
      const scrollY = window.scrollY + 80;
      sections.forEach((s, i) => {
        if (s && scrollY >= s.offsetTop) setActive(NAV_LINKS[i]);
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (section) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <>
      <nav className="nav">
        <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); go('Home'); }} style={{ textDecoration: 'none', cursor: 'pointer' }}>SM.</a>
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className={active === l ? 'active' : ''} onClick={(e) => { e.preventDefault(); go(l); }}>{l}</a>
          ))}
        </div>
        <div className="nav-right">
          <button className={`toggle-btn ${dark ? 'on' : ''}`} onClick={() => setDark(!dark)} title="Toggle dark mode" />
          <button className="nav-ham" onClick={() => setOpen(!open)}>
            <Icon name={open ? 'x' : 'menu'} size={22} />
          </button>
        </div>
      </nav>
      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={(e) => { e.preventDefault(); go(l); }}>{l}</a>
        ))}
      </div>
    </>
  );
}
