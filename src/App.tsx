import * as React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import routes from "./routes";
import AddUser from "./components/AddUser";
import UsersTable from "./components/UsersTable";
import useUsers from "./hooks/useUsers";

const App: React.FC = () => {
  const { users, onAddUser, onSortUsers } = useUsers();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={routes.addUsers}
          element={<AddUser onAddUser={onAddUser} />}
        />
        <Route
          path={routes.listUsers}
          element={<UsersTable users={users} onSortUsers={onSortUsers} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default hot(App);
