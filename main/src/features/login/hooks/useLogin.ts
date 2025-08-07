import { useTranslations } from 'next-intl';
import { useRouterHook } from '@/hooks/useRouter';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { loginSchema, LoginFormData } from '../schemas/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export const useLogin = () => {
  const pathname = usePathname();
  const { routerPush } = useRouterHook();
  const locale = pathname.split('/')[1];
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'teste@email.com',
      password: '123',
      rememberMe: false,
    },
  });

  const email = watch('email');
  const password = watch('password');
  const rememberMe = watch('rememberMe');

  const handleLogin = async (data: LoginFormData) => {
    setIsLoading(true);

    try {
      const response = await fetch(`/${locale}/login/api/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(t('success'));
        routerPush(`/${locale}`);
      } else {
        toast.error(t('credentialsError'));
        console.error('Login failed');
      }
    } catch (error) {
      toast.error(t('unexpectedError'));
      console.error('Error during login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    email,
    password,
    rememberMe,
    isLoading,
    handleLogin,
    setValue,
  };
};
