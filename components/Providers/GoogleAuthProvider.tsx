import { PropsWithChildren } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

const OAUTH_CLIENT_ID = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID || '';

export default function GoogleAuthProvider({ children }: PropsWithChildren) {
  return (
    <GoogleOAuthProvider
      clientId={
        // '689003832713-ss9fvlf88orijiqd64l3c6vo0tiqd8cp.apps.googleusercontent.com'
        OAUTH_CLIENT_ID
      }
    >
      {children}
    </GoogleOAuthProvider>
  );
}
