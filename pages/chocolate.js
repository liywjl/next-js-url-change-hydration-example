import { useEffect, useState } from "react";

import Nav from "../components/Nav";
import TextInputForm from "../components/TextInputForm";

export default function Chocolate({ globalText, setGlobalText }) {
  const [localText, setLocalText] = useState();

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
      <Nav />
      <div>
        <p>
          NOTE: Nested Routing paths cannot find query.productType as we are no
          longer in a dynamic path
        </p>
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
