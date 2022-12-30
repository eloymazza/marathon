'use client';
import { PropsWithChildren } from 'react';
import GoogleAuthProvider from './GoogleAuthProvider';
import ReduxProvider from './ReduxProvider';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ReduxProvider>
      <GoogleAuthProvider>{children}</GoogleAuthProvider>
    </ReduxProvider>
  );
}
