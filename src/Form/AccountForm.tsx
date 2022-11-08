import React from "react";
import FormWrapper from "../FormWrapper/FormWrapper";

type Account_Data = {
  password: string;
  email: string;
};

type LoginProps = Account_Data & {
  updateFeild: (feilds: Partial<Account_Data>) => void;
};

export default function AccountForm({
  password,
  email,
  updateFeild,
}: LoginProps) {
  return (
    <div>
      <FormWrapper title="Account Form">
        <label>Email</label>
        <input
          type="email"
          autoFocus
          onChange={(e) => updateFeild({ email: e.target.value })}
          value={email}
        />
        <label>Password</label>
        <input
          required
          type="password"
          onChange={(e) => updateFeild({ password: e.target.value })}
          value={password}
        />
      </FormWrapper>
    </div>
  );
}
