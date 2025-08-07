/**
 * Página de Login do MFE
 * Esta página renderiza o formulário de autenticação do micro frontend,
 * utilizando Server Components para otimização de performance.
 * 
 * Funcionalidades:
 * - Renderização no servidor para SEO otimizado
 * - Metadados dinâmicos personalizados
 * - Integração com feature de login modularizada
 * - Suporte a internacionalização
 */
'use server';

import { Metadata } from 'next';
import Login from '@/features/login';

// Geração de metadados para a página
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Login - Fiap-Next'
  };
}

export default async function LoginPage() {
  return (
    <Login />
  );
}
