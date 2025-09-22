import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SmoothScrollProvider } from "@/lib/smooth-scroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Naureen - Premium Garam Ruqyah",
  description:
    "Garam Ruqyah Naureen adalah garam alami yang telah dibacakan dengan pembacaan ayat-ayat Al-Quran sebagai bentuk perlindungan dan penyembuhan secara syari.",
  keywords:
    "garam ruqyah, naureen, garam alami, ruqyah, islamic healing, natural salt",
  authors: [{ name: "Naureen" }],
  openGraph: {
    title: "Naureen - Premium Garam Ruqyah",
    description: "Garam Ruqyah Naureen untuk perlindungan dan penyembuhan",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className} cz-shortcut-listen="true">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SmoothScrollProvider>
            <div className="flex min-h-screen flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
