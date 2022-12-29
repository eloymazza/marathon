'use client';
import { PropsWithChildren } from 'react';
import GoogleAuthProvider from './GoogleAuthProvider';

export default function Providers({ children }: PropsWithChildren) {
  return <GoogleAuthProvider>{children}</GoogleAuthProvider>;
}
