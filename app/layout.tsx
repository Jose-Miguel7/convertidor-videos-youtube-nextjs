import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "DescargaTuVideo | Descarga videos de YouTube",
  description: "Descarga videos de YouTube en formato MP4 o MP3 con DescargaTuVideo. Descarga videos de YouTube en alta calidad.",
  openGraph: {
    title: "DescargaTuVideo | Descarga videos de YouTube",
    description: "Descarga videos de YouTube en formato MP4 o MP3 con DescargaTuVideo. Descarga videos de YouTube en alta calidad.",
    images: [``],
  },
  keywords: ['descargar', 'video', 'youtube', 'mp4', 'mp3', 'descargatuvideo'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
