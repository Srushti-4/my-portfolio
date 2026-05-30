'use client';

import { useEffect, useRef } from 'react';

/* Attaches a scroll-triggered fade-in to all `.fade-up` children of the ref'd element. */
export function useFadeIn() {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    el.querySelectorAll('.fade-up').forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);
  return ref;
}
