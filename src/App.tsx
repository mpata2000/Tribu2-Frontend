
import Header from 'components/Header/Header';
import SideBar from 'components/SideBar';
import AboutContainer from 'containers/AboutContainer';
import HomeContainer from 'containers/HomeContainer';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  
  return (
        <div className="App">
          <Header/>
          <div className="rowView">
            <SideBar />
            <div className='contentView'>
              <Routes>
                <Route path="/" element={<HomeContainer />}/>
                < Route path="/about" element={<AboutContainer />} />
                
              </Routes>
            </div>
          </div>
        </div>
  );
}

export default App;
