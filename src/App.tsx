import Header from 'components/Header/Header';
import AboutContainer from 'containers/AboutContainer';
import HomeContainer from 'containers/HomeContainer';
import SoporteContainer from 'containers/SoporteContainer';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  
  return (
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<HomeContainer />}/>
          < Route path="/about" element={<AboutContainer />} />
          < Route path="/soporte" element={<SoporteContainer />} />
          </Routes>
        </div>
  );
}

export default App;
