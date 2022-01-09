import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "../../../styles/Home.module.css";
import Nav from "../../../components/Nav";
import Header from "../../../components/Header";

export default function Stepper() {
  const { query } = useRouter();

  useEffect(() => {
    console.log("[nestedID] has mounted");
    return () => console.log("[nestedID] has un-mounted");
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Nav />
      <div>
        <h2>NestedID Page Router Query</h2>
        {JSON.stringify(query)}
      </div>
    </div>
  );
}
