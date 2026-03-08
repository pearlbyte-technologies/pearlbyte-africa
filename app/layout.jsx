import '../src/styles.css';

export const metadata = {
  metadataBase: new URL('https://pearlbyte.africa'),
  title: {
    default: 'PearlByte Technologies | Digital Infrastructure for Africa',
    template: '%s | PearlByte Technologies',
  },
  description:
    'PearlByte Technologies builds digital infrastructure for Africa through software development, systems integration, hardware deployment, and digital transformation solutions.',
  applicationName: 'PearlByte Technologies',
  keywords: [
    'PearlByte Technologies',
    'PearlByte Africa',
    'Digital infrastructure for Africa',
    'Software development Uganda',
    'Systems integration Africa',
    'Hardware deployment Uganda',
    'Digital transformation Africa',
    'Technology company Uganda',
    'PEARLBYTE TECHNOLOGIES LIMITED',
  ],
  authors: [{ name: 'PearlByte Technologies' }],
  creator: 'PearlByte Technologies',
  publisher: 'PearlByte Technologies',
  alternates: {
    canonical: '/',
  },
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://pearlbyte.africa',
    siteName: 'PearlByte Technologies',
    locale: 'en_UG',
    title: 'PearlByte Technologies | Digital Infrastructure for Africa',
    description:
      'Built in Uganda, PearlByte Technologies delivers software development, systems integration, hardware deployment, and digital transformation solutions for African businesses and institutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PearlByte Technologies | Digital Infrastructure for Africa',
    description:
      'Built in Uganda, PearlByte Technologies delivers digital infrastructure for Africa.',
  },
  other: {
    'geo.region': 'UG',
    'geo.placename': 'Uganda',
    'format-detection': 'telephone=no, address=no, email=no',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#081220',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
