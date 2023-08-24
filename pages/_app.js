import GlobalStyle from "../styles";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [windowY, setWindowY] = useState(0);
  useEffect(() => {
    function handleScroll(event) {
      setWindowY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <Component {...pageProps} windowY={windowY} />
      </SessionProvider>
    </>
  );
}
