import * as React from "react";
import { UserType } from "../../types";
import UserRow from "../UserRow";
import useUsers from "../../hooks/useUsers";

interface UsersTableProps {
  users: UserType[];
  onSortUsers: ReturnType<typeof useUsers>["onSortUsers"];
}

const UsersTable: React.FC<UsersTableProps> = ({ users, onSortUsers }) => {
  return (
    <>
      <h1>Users List</h1>
      {/** Render Table */}
      <table>
        <thead>
          <tr>
            <td onClick={onSortUsers("name")}>Name</td>
            <td onClick={onSortUsers("email")}>Email</td>
            <td onClick={onSortUsers("address.city")}>City</td>
            <td onClick={onSortUsers("company.name")}>Company</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersTable;
