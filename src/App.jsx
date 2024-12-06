import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GetStarted from "./pages/GetStarted";
import { Admin } from "./pages/Admin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path="/GetStarted" element={<GetStarted/>} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
