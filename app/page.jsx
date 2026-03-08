import Script from 'next/script';
import App from '../src/App.jsx';

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pearlbyte Technologies',
    legalName: 'PEARLBYTE TECHNOLOGIES LIMITED',
    url: 'https://pearlbyte.africa',
    email: 'hello@pearlbyte.africa',
    foundingDate: '2026',
    foundingLocation: {
      '@type': 'Place',
      name: 'Republic of Uganda',
    },
    description:
      'Pearlbyte Technologies is a technology services company specializing in software development, systems integration, hardware deployment, and digital transformation solutions for businesses and institutions.',
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
    name: 'Pearlbyte Technologies',
    url: 'https://pearlbyte.africa',
    description: 'Building intelligent systems for Africa.',
    publisher: {
      '@type': 'Organization',
      name: 'Pearlbyte Technologies',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Pearlbyte | Intelligent Systems & Software for Africa',
    url: 'https://pearlbyte.africa',
    description:
      'Pearlbyte Technologies builds intelligent systems for Africa through software, integrated systems, hardware-enabled touchpoints, and digital transformation solutions.',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Pearlbyte Technologies',
      url: 'https://pearlbyte.africa',
    },
    about: {
      '@type': 'Organization',
      name: 'Pearlbyte Technologies',
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
