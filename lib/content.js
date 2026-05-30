/* ─────────────────────────────────────────────
   CONTENT — edit everything about the site here.
   No React/layout code below: just data.
   ───────────────────────────────────────────── */

export const CONFIG = {
  email:     'srushtimohire04@gmail.com',                       // shown in contact + footer
  github:    'https://github.com/YOUR_GITHUB_USERNAME',         // TODO: update with real GitHub
  kaggle:    'https://www.kaggle.com/srushtikmohire',
  linkedin:  'https://www.linkedin.com/in/srushti-mohire-781528227/',
  resumeUrl: '/resume.pdf',                                     // place resume.pdf in /public
  // Contact form: the email below is wired into FormSubmit (no signup needed).
  // First submission triggers a one-time confirmation email you must click.
  // See https://formsubmit.co for details.
  formEndpoint: 'https://formsubmit.co/srushtimohire04@gmail.com',
};

export const NAV_LINKS = ['Home', 'About', 'Projects', 'Skills', 'Resume', 'Contact'];

export const SKILLS = {
  'Languages & Databases': [
    { name: 'Python', icon: '🐍', color: '#fef3c7' },
    { name: 'SQL', icon: '🗄️', color: '#dbeafe' },
    { name: 'Java', icon: '☕', color: '#fee2e2' },
    { name: 'Unix / Shell', icon: '💻', color: '#f3f4f6' },
  ],
  'Data & Cloud': [
    { name: 'Databricks', icon: '⚡', color: '#fce7f3' },
    { name: 'Snowflake', icon: '❄️', color: '#dbeafe' },
    { name: 'Power BI', icon: '📊', color: '#fef3c7' },
    { name: 'AWS', icon: '☁️', color: '#fff7ed' },
  ],
  'AI / ML': [
    { name: 'Machine Learning', icon: '🤖', color: '#d1fae5' },
    { name: 'Data Engineering', icon: '🔧', color: '#ede9fe' },
    { name: 'AI / LLM', icon: '🧠', color: '#fce7f3' },
  ],
  'Tools & Methods': [
    { name: 'Agile', icon: '🔄', color: '#dbeafe' },
    { name: 'Software Testing', icon: '🧪', color: '#d1fae5' },
    { name: 'Git', icon: '🌿', color: '#d1fae5' },
    { name: 'JDBC', icon: '🔌', color: '#f3f4f6' },
  ],
};

export const PROJECTS = [
  {
    title: 'Bank Management System',
    desc: 'A full-featured banking application supporting account management, transactions, deposits, withdrawals and reporting — built with a Java backend and SQL database.',
    stack: ['Java', 'SQL', 'JDBC', 'OOP'],
    color: '#dbeafe',
    code: '',  // e.g. 'https://github.com/YOUR_USER/bank-management'
    live: '',  // leave empty to hide the Live button
  },
  {
    title: 'Cybersecurity Threat Detection',
    desc: 'Machine learning pipeline to detect and classify cybersecurity threats in network traffic. Uses anomaly detection and supervised classification models.',
    stack: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas'],
    color: '#d1fae5',
    code: '',
    live: '',
  },
  {
    title: 'Data Pipeline Automation',
    desc: 'Automated ETL pipeline at Infosys for business process optimization — transforming and loading data from multiple sources with monitoring and alerting.',
    stack: ['Python', 'SQL', 'Databricks', 'Snowflake'],
    color: '#ede9fe',
    code: '',
    live: '',
  },
];

export const CERTS = [
  { name: 'Snowpro Advanced Data Engineer', issuer: 'Snowflake', date: 'Jan 2026 · Expires Jan 2028' },
  { name: 'Snowpro Core Certified', issuer: 'Snowflake', date: 'Dec 2025' },
  { name: 'Python Programming', issuer: 'Certification Authority', date: '2024' },
  { name: 'Java Full-Stack Development', issuer: 'Certification Authority', date: '2024' },
  { name: 'Databricks Certified', issuer: 'Databricks', date: '2025' },
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', date: '2024' },
];

export const EXPERIENCE = [
  {
    company: 'Infosys',
    role: 'System Associate',
    date: 'Jul 2025 – Present · Bengaluru, India',
    tags: ['Python', 'SQL', 'Agile', 'Software Testing', 'Data Engineering'],
    current: true,
  },
  {
    company: 'Infosys',
    role: 'System Associate Trainee',
    date: 'Dec 2024 – Jun 2025 · Mysore, India',
    tags: ['Software Dev', 'Agile', 'Databricks', 'SQL'],
    current: false,
  },
  {
    company: 'Workflow Softwares',
    role: 'Java Intern',
    date: 'Jun 2024 – Sep 2024 · Online',
    tags: ['Core Java', 'JDBC', 'OOP'],
    current: false,
  },
];

export const EDUCATION = [
  { degree: 'Master of Computer Applications (MCA)', institute: 'KLE Technological University – Hubballi', date: 'Feb 2023 – Sep 2024', grade: '8.9 CGPA' },
  { degree: 'Bachelor of Computer Application (BCA)', institute: 'Rani Channamma University, Belagavi', date: 'Jul 2019 – Sep 2022', grade: '85%' },
  { degree: 'PUC (Science)', institute: "SJPN Trust's PU Science College", date: 'Jun 2017 – May 2019', grade: '' },
  { degree: 'SSLC', institute: 'Swami Vivekananda School', date: '', grade: '93.4%' },
];

export const HERO_STATS = [
  ['1.5+', 'Years Exp.'],
  ['13', 'Certifications'],
  ['2+', 'Projects'],
  ['500+', 'Connections'],
];

export const RESUME_SKILLS = ['Python', 'SQL', 'Java', 'Unix', 'Databricks', 'Snowflake', 'Power BI', 'AWS', 'Machine Learning', 'Data Engineering', 'Agile', 'Software Testing', 'JDBC'];
