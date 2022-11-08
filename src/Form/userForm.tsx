import React from "react";
import FormWrapper from "../FormWrapper/FormWrapper";

type userData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFromProps = userData & {
  updateFelids: (feilds: Partial<userData>) => void;
};

export default function UserForm({
  firstName,
  lastName,
  age,
  updateFelids: updateFeilds,
}: UserFromProps) {
  return (
    <>
      <FormWrapper title="User Detail">
        <label>First Name</label>
        <input
          autoFocus
          required
          type="text"
          value={firstName}
          onChange={(e) => updateFeilds({ firstName: e.target.value })}
        />
        <label>Last Name</label>
        <input
          required
          type="text"
          value={lastName}
          onChange={(e) => updateFeilds({ lastName: e.target.value })}
        />
        <label>Age</label>
        <input
          type="number"
          min={1}
          value={age}
          onChange={(e) => updateFeilds({ age: e.target.value })}
        />
      </FormWrapper>
    </>
  );
}
