'use client';

import { Icon } from './Icon';
import { useFadeIn } from '@/lib/useFadeIn';
import { CONFIG, HERO_STATS } from '@/lib/content';

export function Hero() {
  const ref = useFadeIn();
  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero-inner">
        <div>
          <div className="hero-badge fade-up" style={{ transitionDelay: '0ms' }}>
            <span></span> Open to new opportunities
          </div>
          <h1 className="hero-name fade-up" style={{ transitionDelay: '80ms' }}>
            Hi, I&apos;m<br /><em>Srushti Mohire</em>
          </h1>
          <p className="hero-role fade-up" style={{ transitionDelay: '140ms' }}>
            Data Engineer · Python Developer · ML Enthusiast
          </p>
          <p className="hero-desc fade-up" style={{ transitionDelay: '200ms' }}>
            System Associate at Infosys, building data pipelines and intelligent systems that turn raw data into business impact. Based in Bengaluru, India.
          </p>
          <div className="hero-btns fade-up" style={{ transitionDelay: '260ms' }}>
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View Projects <Icon name="arrow" size={16} />
            </a>
            <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Contact Me
            </a>
          </div>
          <div className="hero-stats fade-up" style={{ transitionDelay: '320ms' }}>
            {HERO_STATS.map(([n, l]) => (
              <div key={l} className="hero-stat">
                <div className="hero-stat-n">{n}</div>
                <div className="hero-stat-l">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="fade-up" style={{ transitionDelay: '100ms' }}>
          <div className="hero-photo">
            <img src="/first.jpg" alt="Srushti Mohire" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
          </div>
          <div className="hero-social">
            <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              <Icon name="linkedin" size={14} /><span>LinkedIn</span>
            </a>
            <a href={CONFIG.kaggle} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              <Icon name="kaggle" size={14} /><span>Kaggle</span>
            </a>
            <a href={CONFIG.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              <Icon name="github" size={14} /><span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
