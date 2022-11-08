import "./App.css";
import { useMultipleStepForm } from "./Form/useMultipleForm";
import AddressForm from "./Form/AddressForm";
import AccountForm from "./Form/AccountForm";
import UserForm from "./Form/userForm";
import { FormEvent, useState } from "react";

type Form_data = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: Form_data = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFelids(fields: Partial<Form_data>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultipleStepForm([
      <UserForm {...data} updateFelids={updateFelids} />,
      <AddressForm {...data} updateFelids={updateFelids} />,
      <AccountForm {...data} updateFeild={updateFelids} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Sucessfully account created");
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: "5rem", right: "5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              BACK
            </button>
          )}
          <button type="submit" onClick={next}>
            {isLastStep ? "FINISH" : "NEXT"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
