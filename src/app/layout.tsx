import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';
import { AnimatedBackground } from '@/components/animated-background';

export const metadata: Metadata = {
  title: 'Ch Manan // CYNEX - Cyber Portfolio',
  description: 'A personal cyber-portfolio platform for a Computer Science + Cybersecurity student.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=JetBrains+Mono:wght@400;700&family=Poppins:wght@400;500;700&family=Syncopate:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedBackground />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
