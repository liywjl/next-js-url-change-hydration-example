import { useEffect } from "react";

import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";

export default function Chocolate() {
  useEffect(() => {
    console.log("%cchocolate.js %chas mounted", "color: yellow", "color: cyan");
    return () =>
      console.log(
        "%cchocolate.js %chas un-mounted",
        "color: yellow",
        "color: red"
      );
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <Nav />
          <div className={styles.container}>
            <p> You found the Secret Step about chocolate</p>
            <p>
              (note: Nested Routing paths cannot find query.productType as we
              are no longer in a dynamic path)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
