import Header from '../components/Header';
import Head from './head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
