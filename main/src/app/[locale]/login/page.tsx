'use server';

import { Metadata } from 'next';
import Login from '@/features/login';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Login - Overlabs'
  };
}

export default async function LoginPage() {
  return (
    <Login />
  );
}
