import { useState, useEffect } from "react";

import styles from "../../styles/Home.module.css";

import Nav from "../../components/Nav";
import InputFullName from "../../components/InputFullName";

export default function Stepper() {
  const [fullName, setFullName] = useState();

  useEffect(() => {
    console.log(
      "%c[productType] %chas mounted",
      "color: yellow",
      "color: cyan"
    );
    return () =>
      console.log(
        "%c[productType] %chas un-mounted",
        "color: yellow",
        "color: red"
      );
  }, []);

  return (
    <>
      <Nav />
      <InputFullName fullName={fullName} setFullName={setFullName} />
    </>
  );
}
