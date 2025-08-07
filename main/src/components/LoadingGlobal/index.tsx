'use client';

import { useLoadingGlobalStore } from '@/core/store/loading-global.store';

export default function LoadingGlobal() {
  const isLoading = useLoadingGlobalStore((state) => state.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" />
    </div>
  );
}
