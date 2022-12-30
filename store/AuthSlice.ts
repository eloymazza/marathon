'use client';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { insertUser } from '../db/UserHandlers';
import { User } from '../models/User';

export type AuthState = {
  currentUser: User | null;
};

const initialState: AuthState = {
  currentUser: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addNewUser(state, { payload }: PayloadAction<User>) {
      console.log('payload', payload);
      insertUser(payload);
    },
  },
});

export const { addNewUser } = authSlice.actions;
export const selectAuthState = (state: RootState) => state.auth;
export default authSlice.reducer;
