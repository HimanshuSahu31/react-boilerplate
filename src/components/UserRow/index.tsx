import * as React from "react";
import { UserType } from "../../types";

interface UserRowProps {
  user: UserType;
}

const UserRow: React.FC<UserRowProps> = ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address.city}</td>
      <td>{user.company.name}</td>
    </tr>
  );
};

export default UserRow;
