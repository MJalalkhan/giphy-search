import React from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Home/>
        <Routes>
          <Route path="/" element={<Home />} >
          <Route path="search" element={<Search />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
