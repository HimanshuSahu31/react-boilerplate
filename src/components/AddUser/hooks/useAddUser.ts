import { useEffect, useState } from "react";
import { AddUserType } from "../../../types";

const INITIAL_USER: AddUserType = {
  name: "",
  email: "",
  company: { name: "" },
  address: { city: "" },
};

export default function useAddUser() {
  const [user, setUser] = useState<AddUserType>(() => ({ ...INITIAL_USER }));

  const onChange =
    (type: "name" | "email" | "city" | "company") => (value: string) => {
      switch (type) {
        case "name": {
          setUser((prevUser) => ({ ...prevUser, name: value }));
          break;
        }
        case "email": {
          setUser((prevUser) => ({ ...prevUser, email: value }));
          break;
        }
        case "city": {
          setUser((prevUser) => ({
            ...prevUser,
            address: { ...prevUser.address, city: value },
          }));
          break;
        }
        case "company": {
          setUser((prevUser) => ({
            ...prevUser,
            company: { ...prevUser.address, name: value },
          }));
          break;
        }
      }
    };

  return { user, onChange };
}
