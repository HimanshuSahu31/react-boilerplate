import * as React from "react";
import { UserType } from "../../types";

interface FormInputProps {
  inputLabel: string;
  type: "text" | "email";
  value: string;
  onChange: (val: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  inputLabel,
  type,
  value,
  onChange,
}) => {
  return (
    <>
      <label>{inputLabel}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
      />
    </>
  );
};

export default FormInput;
