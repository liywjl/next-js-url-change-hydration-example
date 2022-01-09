import { useEffect } from "react";

import styles from "../../styles/Home.module.css";
import Nav from "../../components/Nav";
import Header from "../../components/Header";

export default function Chocolate() {
  useEffect(() => {
    console.log("chocolate.js has mounted");
    return () => console.log("chocolate.js has un-mounted");
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Header />
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
