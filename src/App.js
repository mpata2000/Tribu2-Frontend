import * as React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer"
import AboutContainer from "./containers/AboutContainer"
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomeContainer />}/>
        <Route path="/about" element={<AboutContainer />} />
      </Routes>
    </div>
  );
}

export default App;