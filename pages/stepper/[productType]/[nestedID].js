import { useEffect } from "react";
import { useRouter } from "next/router";

import Nav from "../../../components/Nav";
import styles from "../../../styles/Home.module.css";

export default function Stepper() {
  const { query } = useRouter();

  useEffect(() => {
    console.log("[nestedID] has mounted");
    return () => console.log("[nestedID] has un-mounted");
  }, []);

  return (
    <div className={styles.container}>
      <Nav />
      <h2>NestedID Page Router Query</h2>
      {JSON.stringify(query)}
    </div>
  );
}
