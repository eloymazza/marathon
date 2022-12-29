'use client';
import { GoogleLogin } from '@react-oauth/google';

export default function page() {
  return (
    <>
      <h2> Login</h2>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </>
  );
}
