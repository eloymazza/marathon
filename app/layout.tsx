import Head from './head';
import { PropsWithChildren } from 'react';
import Providers from './Providers';

type Props = PropsWithChildren;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Head />
          {children}
          <footer> Footer </footer>
        </Providers>
      </body>
    </html>
  );
}
