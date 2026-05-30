'use client';

import { useFadeIn } from '@/lib/useFadeIn';
import { EDUCATION, EXPERIENCE } from '@/lib/content';

export function About() {
  const ref = useFadeIn();
  return (
    <section id="about" style={{ background: 'var(--bg2)' }} ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="fade-up">
            <div className="about-photo">
              <img src="/second.jpg" alt="Srushti Mohire" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
            </div>
            <div style={{ marginTop: '2rem' }}>
              <div className="section-tag">Education</div>
              <div className="divider" />
              {EDUCATION.map((e, i) => (
                <div key={i} className="edu-item">
                  <div className="edu-dot" />
                  <div>
                    <div className="edu-title">{e.degree}</div>
                    <div className="edu-sub">{e.institute}</div>
                    {e.date && <div className="edu-sub">{e.date}</div>}
                    {e.grade && <div className="edu-grade">{e.grade}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="fade-up" style={{ transitionDelay: '100ms' }}>
            <div className="section-tag">About Me</div>
            <h2 className="section-title">Turning Data Into<br />Meaningful Insights</h2>
            <div className="divider" />
            <p style={{ color: 'var(--text2)', marginBottom: '1rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
              I&apos;m a System Associate at Infosys, contributing to projects that optimize business processes through data transformation, analysis, and automation.
            </p>
            <p style={{ color: 'var(--text2)', marginBottom: '2rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Proficient in Python, SQL, Unix, Data Engineering and Databricks — with a strong foundation in AI and Machine Learning, supported by 13 industry certifications. I pursued my MCA at KLE Technological University and hold a BCA from Rani Channamma University. I&apos;m passionate about leveraging technical skills and collaboration to deliver innovative solutions in data engineering and business intelligence.
            </p>
            <div className="section-tag" style={{ marginBottom: '0.75rem' }}>Experience</div>
            <div className="timeline">
              {EXPERIENCE.map((e, i) => (
                <div key={i} className="tl-item">
                  <div className="tl-dot" />
                  <div className="tl-company">{e.company} {e.current && <span className="tag tag-accent" style={{ fontSize: '0.65rem', marginLeft: 6 }}>Current</span>}</div>
                  <div className="tl-role">{e.role}</div>
                  <div className="tl-date">{e.date}</div>
                  <div className="tl-tags">
                    {e.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
