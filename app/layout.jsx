import '../src/styles.css';

export const metadata = {
  metadataBase: new URL('https://pearlbyte.africa'),
  title: {
    default: 'Pearlbyte | Intelligent Systems & Software for Africa',
    template: '%s | Pearlbyte Technologies',
  },
  description:
    'Pearlbyte Technologies builds intelligent systems for Africa through software development, systems integration, hardware deployment, and digital transformation solutions.',
  applicationName: 'Pearlbyte Technologies',
  keywords: [
    'Pearlbyte Technologies',
    'Pearlbyte Africa',
    'Building intelligent systems for Africa',
    'Software development Uganda',
    'Systems integration Africa',
    'Hardware deployment Uganda',
    'Digital transformation Africa',
    'Technology company Uganda',
    'PEARLBYTE TECHNOLOGIES LIMITED',
  ],
  authors: [{ name: 'Pearlbyte Technologies' }],
  creator: 'Pearlbyte Technologies',
  publisher: 'Pearlbyte Technologies',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
    siteName: 'Pearlbyte Technologies',
    locale: 'en_UG',
    title: 'Pearlbyte | Intelligent Systems & Software for Africa',
    description:
      'Built in Uganda, Pearlbyte Technologies delivers intelligent systems for Africa through software development, systems integration, hardware deployment, and digital transformation solutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pearlbyte | Intelligent Systems & Software for Africa',
    description:
      'Built in Uganda, Pearlbyte Technologies is building intelligent systems for Africa.',
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
