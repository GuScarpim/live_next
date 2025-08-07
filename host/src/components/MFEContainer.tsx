/**
 * Container para Micro Frontend (MFE)
 * Este componente é responsável por integrar micro frontends externos
 * na aplicação host através de iframes seguros.
 * 
 * Funcionalidades:
 * - Carregamento seguro de MFEs via iframe com sandbox
 * - Comunicação entre host e MFE através de postMessage
 * - Título customizável para identificação do MFE
 * - Configurações de segurança para isolamento adequado
 */
'use client';

import { useEffect, useRef } from 'react';

interface MFEContainerProps {
  src: string;        // URL do micro frontend
  title?: string;     // Título opcional para exibição
}

export default function MFEContainer({ src, title }: MFEContainerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Configuração da comunicação com o MFE via postMessage
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const handleMessage = (event: MessageEvent) => {
        // Aqui podem ser implementadas as regras de comunicação com o MFE
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