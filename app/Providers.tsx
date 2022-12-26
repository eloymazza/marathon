'use client';
// import { PropsWithChildren } from 'react';
import ReduxProvider from './ReduxProvider';

// type Props = PropsWithChildren;
type Props = any;

export default function Providers({ children }: Props) {
  return (
    <ReduxProvider>
      <div>{children}</div>
    </ReduxProvider>
  );
}
