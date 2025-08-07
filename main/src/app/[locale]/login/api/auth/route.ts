import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { email, password, rememberMe } = await request.json();

    // Mock credentials verification
    if (email !== 'teste@email.com' || password !== '123') {
      return NextResponse.json(
        { success: false, message: 'Credenciais inválidas' },
        { status: 401 }
      );
    }

    const token = crypto.randomUUID();
    const refreshToken = crypto.randomUUID();

    const cookieStore = await cookies();

    const maxAgeToken = rememberMe ? 60 * 60 * 24 * 30 : 60 * 60;

    cookieStore.set('token', token, {
      httpOnly: true,
      path: '/',
      maxAge: maxAgeToken,
      secure: process.env.NODE_ENV === 'production',
    });

    cookieStore.set('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      secure: process.env.NODE_ENV === 'production',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in login API:', error);
    return NextResponse.json(
      { success: false, message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Clear-Site-Data': '"cache", "cookies", "storage", "executionContexts"',
    },
  });
}