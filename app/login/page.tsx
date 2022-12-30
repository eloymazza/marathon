'use client';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux/es/exports';
import { User } from '../../models/User';
import { addNewUser } from '../../store/AuthSlice';
import { AuthMethod } from '../../types/enums';

// import User from '../../models/User';
// import { AuthMethod } from '../../types/enums';

type GoogleCredentials = {
  email: string;
  name: string;
  given_name: string;
  family_name: string;
};

const successLogin = async (
  credentialResponse: CredentialResponse,
  dispatcher: Dispatch<AnyAction>
) => {
  if (!credentialResponse.credential) {
    throw new Error('Error Getting User Credentials');
  }

  const credentials: GoogleCredentials = jwt_decode(
    credentialResponse.credential
  );

  const newUser: User = {
    fullName: credentials.name,
    name: credentials.given_name,
    surname: credentials.family_name,
    email: credentials.email,
    dateOfBirth: undefined,
    signUpMethod: AuthMethod.GOOGLE,
  };

  dispatcher(addNewUser(newUser));
};

export default function Page() {
  const dispatcher = useDispatch();
  return (
    <>
      <h2> Login</h2>
      <GoogleLogin
        onSuccess={(credentialResponse) =>
          successLogin(credentialResponse, dispatcher)
        }
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </>
  );
}
