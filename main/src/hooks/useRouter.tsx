'use client';

import { useLoadingGlobalStore } from '@/core/store/loading-global.store';
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { useEffect, useTransition } from 'react';

export const useRouterHook = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const setIsLoading = useLoadingGlobalStore(state => state.setIsLoading);

  const routerPush = (href: string) => {
    startTransition(() => {
      router.push(href);
    });
  };

  const routerRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const routerReplace = (href: string, options?: NavigateOptions) => {
    startTransition(() => {
      router.replace(href, options);
    });
  };

  useEffect(() => {
    // setIsLoading(isPending);
  }, [isPending, setIsLoading]);

  return {
    routerPush,
    routerRefresh,
    routerReplace
  };
}
