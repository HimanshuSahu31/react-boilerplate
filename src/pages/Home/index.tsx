import * as React from "react";
import UsersTable from "../../components/UsersTable";
import useUsers from "../../hooks/useUsers";
import AddUser from "../../components/AddUser";
import { AddUserType } from "../../types";
import { Link } from "react-router-dom";
import routes from "../../routes";

const Home: React.FC = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <Link to={routes.listUsers}>List Users</Link>
      <Link to={routes.addUsers}>Add User</Link>
    </>
  );
};

export default Home;
