import { useState, useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("%cMyApp %chas mounted", "color: yellow", "color: cyan");
    return () =>
      console.log("%cMyApp %chas un-mounted", "color: yellow", "color: red");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
