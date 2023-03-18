import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Main from "./Main";
import UserPage from "./UserPage";
import Error from "./Error";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="*" exact={true} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
