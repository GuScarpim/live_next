'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const DynamicComponent = dynamic(() => import('@/components/DynamicExample'), {
  loading: () => (
    <div className="p-4 bg-gray-100 rounded">
      Carregando componente dinâmico...
    </div>
  ),
  ssr: false
});

export default function DynamicWrapper() {
  return (
  
    <Suspense fallback={<div className="p-4 bg-gray-100 rounded">Carregando...</div>}>
      <DynamicComponent />
    </Suspense>
  );
}
