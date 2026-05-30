import './globals.css';

export const metadata = {
  metadataBase: new URL('https://srushtimohire.com'),
  title: 'Srushti Mohire — Data Engineer & Python Developer',
  description:
    'Srushti Mohire — System Associate at Infosys. Data Engineer building Python, SQL, Databricks and Snowflake pipelines. Based in Bengaluru, India.',
  authors: [{ name: 'Srushti Mohire' }],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://srushtimohire.com/',
    title: 'Srushti Mohire — Data Engineer & Python Developer',
    description:
      'System Associate at Infosys. Data Engineer building Python, SQL, Databricks and Snowflake pipelines.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Srushti Mohire — Data Engineer & Python Developer',
    description:
      'System Associate at Infosys. Data Engineer building Python, SQL, Databricks and Snowflake pipelines.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport = {
  themeColor: '#3b6bcc',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Srushti Mohire',
  url: 'https://srushtimohire.com/',
  jobTitle: 'System Associate, Data Engineer',
  worksFor: { '@type': 'Organization', name: 'Infosys' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  sameAs: ['https://www.linkedin.com/in/srushti-mohire-781528227/', 'https://www.kaggle.com/srushtikmohire'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
