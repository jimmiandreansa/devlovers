import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/components/Provider";

// const montserrat = Inter({
//   subsets: ["latin"],
//   weight: [ "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-montserrat",
// });

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devlovers",
  description: "Get jobs for developers",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="google-signin-client_id"
          content={process.env.AUTH_GOOGLE_ID}
        />
        <script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></script>
      </Head>
      <body className={`${roboto.className} bg-gray-100`}>
        <Provider>
          <Navbar />
          {children}
          {modal}
          <Toaster />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
