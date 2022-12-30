'use client';
import Header from '../components/Header';
import Head from './head';
import Providers from '../components/Providers/Providers';
import { connect } from '../lib/dbConnect';
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await connect();
  return (
    <html>
      <Head />
      <body>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
