import type { Metadata } from "next";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import WrappedProvider from "@/components/common/WrappedProvider";
import { getMessages } from "next-intl/server";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Alamasta",
  description: "Alamasta Technology Solutions",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="font-poppins">
        <NextIntlClientProvider messages={messages}>
          <WrappedProvider>
            <Navbar />
            {children}
            <Footer />
          </WrappedProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
