import "../styles/globals.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";

import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;
  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
    >
      <div className="xl:w-[1200px] m-auto overflow-hidden">
        <Navbar />
        <div className="flex gap-6 md:gap-20">
          <div className="h-[92vh] overf;pw-hidden xl:hover:overflow-auto">
            <Sidebar />
          </div>
          <div className="flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default MyApp;
