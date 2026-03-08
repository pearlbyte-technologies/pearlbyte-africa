import Script from 'next/script';
import App from '../src/App.jsx';

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PearlByte Technologies',
    legalName: 'PEARLBYTE TECHNOLOGIES LIMITED',
    url: 'https://pearlbyte.africa',
    email: 'hello@pearlbyte.africa',
    foundingDate: '2026',
    foundingLocation: {
      '@type': 'Place',
      name: 'Republic of Uganda',
    },
    description:
      'PearlByte Technologies is a technology services company engaged in software development, systems integration, hardware deployment, and digital transformation solutions for businesses and institutions.',
    knowsAbout: [
      'Software development',
      'Systems integration',
      'Hardware deployment',
      'Digital transformation',
      'Digital infrastructure',
    ],
    member: [
      {
        '@type': 'Person',
        name: 'Emmanuel Columbus Mugenyi',
        jobTitle: 'Managing Director / Founder',
      },
      {
        '@type': 'Person',
        name: 'Collin Tugume',
        jobTitle: 'Director',
      },
      {
        '@type': 'Person',
        name: 'Catherine Murungi',
        jobTitle: 'Director & Company Secretary',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PearlByte Technologies',
    url: 'https://pearlbyte.africa',
    description: 'Digital Infrastructure for Africa.',
    publisher: {
      '@type': 'Organization',
      name: 'PearlByte Technologies',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'PearlByte Technologies | Digital Infrastructure for Africa',
    url: 'https://pearlbyte.africa',
    description:
      'PearlByte Technologies builds software, integrated systems, hardware-enabled touchpoints, and digital transformation solutions for Africa.',
    isPartOf: {
      '@type': 'WebSite',
      name: 'PearlByte Technologies',
      url: 'https://pearlbyte.africa',
    },
    about: {
      '@type': 'Organization',
      name: 'PearlByte Technologies',
    },
  },
];

export default function Page() {
  return (
    <>
      <Script
        id="pearlbyte-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <App />
    </>
  );
}
