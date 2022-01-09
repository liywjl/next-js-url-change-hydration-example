import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "../../styles/Home.module.css";
import Nav from "../../components/Nav";

export default function Stepper() {
  const { query } = useRouter();

  useEffect(() => {
    console.log("%c[nestedID] %chas mounted", "color: yellow", "color: cyan");
    return () =>
      console.log(
        "%c[nestedID] %chas un-mounted",
        "color: yellow",
        "color: red"
      );
  }, []);

  return (
    <div className={styles.container}>
      <Nav />
      <div>
        <h2>NestedID Page Router Query</h2>
        {JSON.stringify(query)}
      </div>
    </div>
  );
}
