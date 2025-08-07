'use client';

import { useEffect, useRef } from 'react';

interface MFEContainerProps {
  src: string;
  title?: string;
}

export default function MFEContainer({ src, title }: MFEContainerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const handleMessage = (event: MessageEvent) => {
        console.log('Message from MFE:', event.data);
      };

      window.addEventListener('message', handleMessage);
      return () => window.removeEventListener('message', handleMessage);
    }
  }, []);

  return (
    <div className="w-full h-full">
      {title && (
        <div className="bg-gray-100 px-4 py-2 border-b">
          <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={src}
        className="w-full h-full border-0"
        title={title || 'MFE Content'}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  );
} 