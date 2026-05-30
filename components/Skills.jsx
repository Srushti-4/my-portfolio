'use client';

import { Icon } from './Icon';
import { useFadeIn } from '@/lib/useFadeIn';
import { SKILLS, CERTS } from '@/lib/content';

export function Skills() {
  const ref = useFadeIn();
  return (
    <section id="skills" className="skills-bg" ref={ref}>
      <div className="container">
        <div className="section-head fade-up">
          <div className="section-tag">Tech Stack</div>
          <h2 className="section-title">Skills &amp; Expertise</h2>
          <p className="section-sub">Technologies and tools I work with professionally.</p>
          <div className="divider" />
        </div>
        <div className="grid-2 fade-up" style={{ transitionDelay: '80ms', gap: '2.5rem' }}>
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat}>
              <div className="skill-cat-title">{cat}</div>
              <div className="skill-grid">
                {items.map((s) => (
                  <div key={s.name} className="skill-item">
                    <div className="skill-icon" style={{ background: s.color }}>{s.icon}</div>
                    {s.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up" style={{ marginTop: '3rem' }}>
          <div className="section-tag" style={{ marginBottom: '0.75rem' }}>Certifications</div>
          <div className="cert-grid">
            {CERTS.map((c, i) => (
              <div key={i} className="cert-card">
                <div className="cert-icon"><Icon name="cert" size={18} color="var(--accent)" /></div>
                <div>
                  <div className="cert-title">{c.name}</div>
                  <div className="cert-issuer">{c.issuer}</div>
                  <div className="cert-date">{c.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
