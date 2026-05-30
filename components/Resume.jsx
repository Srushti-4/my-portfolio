'use client';

import { Icon } from './Icon';
import { useFadeIn } from '@/lib/useFadeIn';
import { CONFIG, EXPERIENCE, EDUCATION, CERTS, RESUME_SKILLS } from '@/lib/content';

export function Resume() {
  const ref = useFadeIn();
  return (
    <section id="resume" ref={ref}>
      <div className="container">
        <div className="section-head fade-up" style={{ textAlign: 'center' }}>
          <div className="section-tag">Resume</div>
          <h2 className="section-title">My Resume</h2>
          <p className="section-sub" style={{ margin: '0.75rem auto 1.5rem' }}>Full professional history, education and skills at a glance.</p>
          <a href={CONFIG.resumeUrl} download className="btn btn-primary">
            <Icon name="download" size={15} /> Download PDF
          </a>
        </div>
        <div className="resume-wrap fade-up" style={{ marginTop: '2.5rem', transitionDelay: '80ms' }}>
          {/* Header */}
          <div className="resume-section" style={{ borderBottom: '2px solid var(--accent)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.03em', color: 'var(--text)' }}>Srushti Mohire</div>
                <div style={{ color: 'var(--text2)', fontSize: '0.9rem', marginTop: '4px' }}>System Associate @ Infosys · Data Engineer · Python · SQL</div>
                <div style={{ color: 'var(--text3)', fontSize: '0.8rem', marginTop: '3px' }}>Bengaluru, Karnataka, India</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text2)' }}>linkedin.com/in/srushti-mohire</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text2)' }}>srushtimohire.com</div>
              </div>
            </div>
          </div>
          {/* Experience */}
          <div className="resume-section">
            <div className="resume-h">Experience</div>
            {EXPERIENCE.map((e, i) => (
              <div key={i} style={{ marginBottom: i < EXPERIENCE.length - 1 ? '1rem' : 0, paddingBottom: i < EXPERIENCE.length - 1 ? '1rem' : 0, borderBottom: i < EXPERIENCE.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div className="resume-row">
                  <div>
                    <div className="resume-role">{e.role}</div>
                    <div className="resume-co">{e.company}</div>
                  </div>
                  <div className="resume-date">{e.date}</div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 6 }}>
                  {e.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
          {/* Education */}
          <div className="resume-section">
            <div className="resume-h">Education</div>
            {EDUCATION.map((e, i) => (
              <div key={i} style={{ marginBottom: i < EDUCATION.length - 1 ? '0.75rem' : 0 }}>
                <div className="resume-row">
                  <div>
                    <div className="resume-role">{e.degree}</div>
                    <div className="resume-co">{e.institute}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    {e.date && <div className="resume-date">{e.date}</div>}
                    {e.grade && <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600, marginTop: 2 }}>{e.grade}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Skills */}
          <div className="resume-section">
            <div className="resume-h">Skills</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {RESUME_SKILLS.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
          {/* Certs */}
          <div className="resume-section">
            <div className="resume-h">Certifications (13)</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {CERTS.map((c, i) => (
                <div key={i} style={{ fontSize: '0.82rem', color: 'var(--text2)' }}>
                  <span style={{ color: 'var(--text)', fontWeight: 600 }}>{c.name}</span> — {c.issuer} · {c.date}
                </div>
              ))}
              <div style={{ fontSize: '0.82rem', color: 'var(--text3)', marginTop: 2 }}>+ 7 additional certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
