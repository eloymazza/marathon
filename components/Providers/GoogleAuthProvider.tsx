'use client';
import { PropsWithChildren } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

const OAUTH_CLIENT_ID = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID || '';

export default function GoogleAuthProvider({ children }: PropsWithChildren) {
  return (
    <GoogleOAuthProvider clientId={OAUTH_CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  );
}
