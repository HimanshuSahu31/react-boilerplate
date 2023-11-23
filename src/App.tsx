import * as React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default hot(App);
