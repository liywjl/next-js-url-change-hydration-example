import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log("pageProps");
  console.log(pageProps);
  useEffect(() => {
    console.log("%cMyApp %chas mounted", "color: yellow", "color: cyan");
    return () =>
      console.log("%cMyApp %chas un-mounted", "color: yellow", "color: red");
  }, []);

  return (
    <div className={styles.container}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
