import "@/styles/globals.css";
import React from "react";

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    if (typeof navigator.serviceWorker !== "undefined") {
      navigator.serviceWorker.register("sw.js");
    }
  }, []);
  return <Component {...pageProps} />;
}
