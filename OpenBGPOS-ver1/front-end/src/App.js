import React from "react";
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";

import MainNavigation from "./components/sharedComponents/Navigation/MainNavigation";

import Login from "./pages/Login";
import Dash from "./pages/Dash";
import CompanyDetails from "./pages/CompanyDetails";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route exact path='/' element={<Dash />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/companyDetails' element={<CompanyDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
