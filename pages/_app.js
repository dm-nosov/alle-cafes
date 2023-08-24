import { useWebsiteContentStore } from "@/store/WebsiteContent";
import GlobalStyle from "../styles";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <GlobalStyle />
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
        input {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      <Footer />
    </>
  );
}
