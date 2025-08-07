'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home (Host)', isExternal: false },
    { href: '/about', label: 'Sobre (Host)', isExternal: false },
    { href: '/file-based-routing', label: 'File-based Routing', isExternal: false },
    { href: '/static-generation', label: 'Static Generation (SSG)', isExternal: false },
    { href: '/server-side-rendering', label: 'Server-side Rendering (SSR)', isExternal: false },
    { href: '/incremental-static-regeneration', label: 'Incremental Static Regeneration (ISR)', isExternal: false },
    { href: '/image-optimization', label: 'Image Optimization', isExternal: false },
    { href: '/dynamic-imports', label: 'Dynamic Imports', isExternal: false },
    { href: '/api-test', label: 'Teste API', isExternal: false },
    { href: '/mfe', label: 'MFE App', isExternal: true },
  ];

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-900">MFE Host</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname === item.href
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {item.label}
                  {item.isExternal && (
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 