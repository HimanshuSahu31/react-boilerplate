import * as React from "react";
import { AddUserType, UserType } from "../../types";
import FormInput from "../FormInput";
import useAddUser from "./hooks/useAddUser";

interface AddUserProps {
  onAddUser: (val: AddUserType) => void;
}

const AddUser: React.FC<AddUserProps> = ({ onAddUser }) => {
  const { user, onChange } = useAddUser();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAddUser(user);
        }}
      >
        {/** fields and submit button */}
        <FormInput
          type="text"
          inputLabel="Name"
          value={user.name}
          onChange={onChange("name")}
        />
        <FormInput
          type="email"
          inputLabel="Email"
          value={user.email}
          onChange={onChange("email")}
        />
        <FormInput
          type="text"
          inputLabel="City"
          value={user.address.city}
          onChange={onChange("city")}
        />
        <FormInput
          type="text"
          inputLabel="Company"
          value={user.company.name}
          onChange={onChange("company")}
        />

        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddUser;
