
import Header from 'components/Header/Header';
import SideBar from 'components/SideBar';
import AboutContainer from 'containers/AboutContainer';
import HomeContainer from 'containers/HomeContainer';
import SoporteContainer from 'containers/SoporteContainer';
import TicketsContainer from 'containers/TicketsContainer';
import FormularioTicketsContainer from 'containers/FormularioTicketsContainer';
import EliminarTicketsContainer from 'containers/EliminarTicketsContainer';
import ModificarTicketsContainer from 'containers/ModificarTicketsContainer'; 
import HoursContainer from 'containers/HoursContainer';
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
                <Route path="/about" element={<AboutContainer />} />
                <Route path="/hours" element={<HoursContainer />} />
                <Route path="/soporte" element={<SoporteContainer />} />
                <Route path="/soporte/tickets" element={<TicketsContainer />} />
                <Route path="/soporte/tickets/crear" element={<FormularioTicketsContainer />} />
                <Route path="/soporte/tickets/eliminar" element={<EliminarTicketsContainer />} />
                <Route path="/soporte/tickets/modificar" element={<ModificarTicketsContainer />} />
              </Routes>
            </div>
          </div>
        </div>
  );
}

export default App;
