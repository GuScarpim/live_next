'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('');

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold mb-4">{t('notFoundTitle')}</h2>
      <p className="mb-6">{t('notFoundDescription')}</p>
      <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
        {t('goBack')}
      </Link>
    </div>
  );
}
