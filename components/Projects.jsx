'use client';

import { Icon } from './Icon';
import { useFadeIn } from '@/lib/useFadeIn';
import { PROJECTS } from '@/lib/content';

export function Projects() {
  const ref = useFadeIn();
  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <div className="section-head fade-up">
          <div className="section-tag">Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">A selection of projects spanning data engineering, machine learning and software development.</p>
          <div className="divider" />
        </div>
        <div className="grid-3">
          {PROJECTS.map((p, i) => (
            <div key={i} className="card proj-card fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="proj-img" style={{ background: p.color }}>
                <span className="proj-img-label">project screenshot</span>
              </div>
              <div className="proj-title">{p.title}</div>
              <div className="proj-desc">{p.desc}</div>
              <div className="proj-stack">
                {p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>
              <div className="proj-links">
                {p.code && (
                  <a href={p.code} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                    <Icon name="github" size={13} /> Code
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn btn-sm" style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
                    <Icon name="link" size={13} /> Live
                  </a>
                )}
                {!p.code && !p.live && (
                  <span style={{ fontSize: '0.78rem', color: 'var(--text3)', fontStyle: 'italic' }}>Links coming soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
