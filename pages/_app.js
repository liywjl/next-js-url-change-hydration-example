import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [globalText, setGlobalText] = useState();

  useEffect(() => {
    console.log("%cMyApp %chas mounted", "color: yellow", "color: cyan");
    return () =>
      console.log("%cMyApp %chas un-mounted", "color: yellow", "color: red");
  }, []);

  return (
    <div className={styles.container}>
      <Component
        globalText={globalText}
        setGlobalText={setGlobalText}
        {...pageProps}
      />
    </div>
  );
}

export default MyApp;
