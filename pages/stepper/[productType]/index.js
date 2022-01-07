import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { productTypes } from "../../../constants";

import Nav from "../../../components/Nav";
import Header from "../../../components/Header";
import styles from "../../../styles/Home.module.css";
import StepOne from "../../../components/StepOne";
import StepTwo from "../../../components/StepTwo";
import StepThree from "../../../components/StepThree";

const MIN_STEP_INDEX = 0;
const MAX_STEP_INDEX = 2;

export default function Stepper() {
  const { isReady, push } = useRouter();
  const [step, setStep] = useState(productTypes[0]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const indexOfCurrentStep = productTypes.indexOf(step);

  useEffect(() => {
    console.log("[productType] has mounted");
    return () => console.log("[productType] has un-mounted");
  }, []);

  if (!isReady) {
    return <div>Loading...</div>;
  }

  let stepComponent = null;

  switch (indexOfCurrentStep) {
    case 0:
      stepComponent = (
        <StepOne
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      );
      break;
    case 1:
      stepComponent = (
        <StepTwo
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      );
      break;
    case 2:
      stepComponent = <StepThree firstName={firstName} lastName={lastName} />;
      break;
  }

  return (
    <div className={styles.container}>
      <Header />
      <Nav />

      <main className={styles.main}>
        <div>Step: {step}</div>
        {stepComponent}
        {indexOfCurrentStep > MIN_STEP_INDEX && (
          <button
            onClick={() => {
              push(`/stepper/${productTypes[indexOfCurrentStep - 1]}`);
              setStep(productTypes[indexOfCurrentStep - 1]);
            }}
          >
            Previous
          </button>
        )}
        {indexOfCurrentStep < MAX_STEP_INDEX && (
          <button
            onClick={() => {
              push(`/stepper/${productTypes[indexOfCurrentStep + 1]}`);
              setStep(productTypes[indexOfCurrentStep + 1]);
            }}
          >
            Next
          </button>
        )}
      </main>
    </div>
  );
}
