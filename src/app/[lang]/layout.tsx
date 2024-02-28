import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { Locale, i18n } from "@/i18n.config";
import { Toaster } from "@/components/ui/toaster";

const montSerrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Camilo Echeverri - Software Developer",
  description: "Juan Camilo Echeverri - Software Developer",
};
export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ params: { lang } }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body className={montSerrat.className}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
