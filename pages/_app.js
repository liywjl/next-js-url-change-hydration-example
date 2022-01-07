import { useState, useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("MyApp has mounted");
    return () => console.log("MyApp has un-mounted");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
