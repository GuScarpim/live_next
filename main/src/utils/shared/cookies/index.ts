import { cookies } from 'next/headers';

export const getCookie = async (name: string): Promise<string | null> => {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value ?? null;
};

export const setCookie = async (
  name: string,
  value: string,
  options: Partial<{
    httpOnly: boolean;
    path: string;
    maxAge: number;
    secure: boolean;
  }> = {}
) => {
  const cookieStore = await cookies();
  cookieStore.set(name, value, {
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    ...options,
  });
};

export const deleteCookie = async (name: string) => {
  const cookieStore = await cookies();
  cookieStore.delete(name);
};
