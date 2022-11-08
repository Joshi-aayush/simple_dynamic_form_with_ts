import React from "react";
import FormWrapper from "../FormWrapper/FormWrapper";

type addressData = {
  street: string;
  city: string;
  zip: string;
};

type AddressFormProps = addressData & {
  updateFelids: (feilds: Partial<addressData>) => void;
};

export default function AddressForm({
  street,
  city,
  zip,
  updateFelids,
}: AddressFormProps) {
  return (
    <>
      <FormWrapper title="Address Form">
        <label>Street</label>
        <input
          type="text"
          autoFocus
          required
          onChange={(e) => updateFelids({ street: e.target.value })}
          value={street}
        />
        <label>city</label>
        <input
          type="text"
          required
          onChange={(e) => updateFelids({ city: e.target.value })}
          value={city}
        />
        <label>Zip</label>
        <input
          required
          type="number"
          onChange={(e) => updateFelids({ zip: e.target.value })}
          value={zip}
        />
      </FormWrapper>
    </>
  );
}
