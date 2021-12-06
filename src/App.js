import React, { useEffect } from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import store from 'redux_folder/store';

import HomeContainer from "containers/HomeContainer"
import AboutContainer from "containers/AboutContainer"
import Header from "components/Header/Header";


function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomeContainer />}/>
        <Route path="/about" element={<AboutContainer />} />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;