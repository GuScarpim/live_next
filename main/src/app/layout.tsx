import LoadingGlobal from '@/components/LoadingGlobal';
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';

export const metadata = {
  title: "Fiap-Next",
  description: "Aplicação MFE com Next.js",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/FIAP-NEXT.svg",
    apple: "/icons/FIAP-NEXT.svg",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    themeColor: "#000000",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ThemeProvider>
          <Toaster />
          <LoadingGlobal />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

