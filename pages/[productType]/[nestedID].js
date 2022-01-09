import { useEffect, useState } from "react";

import Nav from "../../components/Nav";
import TextInputForm from "../../components/TextInputForm";

export default function Stepper({ globalText, setGlobalText }) {
  const [localText, setLocalText] = useState();

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
    <>
      <Nav />
      <div>
        <h1>Global text</h1>
        <TextInputForm
          text={globalText}
          setText={setGlobalText}
          title={`globalText is ${globalText}`}
        />
        <h1>Local text</h1>
        <TextInputForm
          text={localText}
          setText={setLocalText}
          title={`localText is ${localText}`}
        />
      </div>
    </>
  );
}
