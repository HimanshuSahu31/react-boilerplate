import { useEffect, useState } from "react";
import { AddUserType, UserType } from "../types";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const sortUsers = (users: UserType[]) => {
  const usersCopy = [...users];
  usersCopy.sort((a, b) => a.name.localeCompare(b.name));
  return usersCopy;
};

export default function useUsers() {
  const [users, setUsers] = useState<UserType[]>(() => []);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setUsers(sortUsers(json)));
  }, []);

  const onAddUser = (user: AddUserType) =>
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: prevUsers.length + 1, ...user },
    ]);

  const onSortUsers =
    (key: "name" | "email" | "address.city" | "company.name") => () =>
      setUsers((prevUsers) => {
        const usersCopy = [...prevUsers];
        switch (key) {
          case "name": {
            usersCopy.sort((a, b) => a.name.localeCompare(b.name));
            break;
          }
          case "email": {
            usersCopy.sort((a, b) => a.email.localeCompare(b.email));
            break;
          }
          case "company.name": {
            usersCopy.sort((a, b) =>
              a.company.name.localeCompare(b.company.name)
            );
            break;
          }
          case "address.city": {
            usersCopy.sort((a, b) =>
              a.address.city.localeCompare(b.address.city)
            );
            break;
          }
        }
        return usersCopy;
      });

  return { users, onAddUser, onSortUsers };
}
