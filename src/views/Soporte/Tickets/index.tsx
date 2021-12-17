import React, { useState } from 'react';
import {Button, Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation} from 'react-router-dom';
import Tabla from 'components/Tabla/Tabla'
import './index.css'
import Descripcion from '../componentes/Descripcion';



const TicketsView = (props: any) => {
    const {tickets} = props;
    const [ ticket_i, setTicketI ] = useState(0);
    function onRowClick(i:number){
        setTicketI(i)
    }
    
    const product = useLocation().state.product;
    const version = useLocation().state.version;

    const [ search, setSearch ] = useState('');
    const filter_name = (event:any) => {
        setSearch(event.target.value);
    }

    let filtered_tickets = tickets;
    if(search){
        filtered_tickets = filtered_tickets.filter((ticket:any) => {return ticket.nombre.includes(search)});
    }

    return (
      <>
        <div className='body'>
            <div  className='d-flex flex-row justify-content-between titulo'>
                <div>
                    <h2>Tickets</h2>
                </div>

                <div>
                <label>
                    Filtro nombre:
                    <input type="text" name="search" onChange={filter_name}/>
                </label>
                </div>

                <div>
                    <h4>Proyecto: {product}</h4>
                    <h5>Versión: {version}</h5>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-evenly tabla_aside'>
                <div className='d-flex flex-column justify-content-between tabla'>
                    
                    <Tabla tickets={filtered_tickets} onRowClick={onRowClick} />

                    <div className='d-flex flex-row justify-content-between'>
                        <Link to='/soporte' className='btn btn-secondary boton_pie_pagina'>
                            Volver a Productos
                        </Link>
                        <Link to='/soporte/tickets/crear' className='btn btn-dark boton_pie_pagina'>
                            Crear nuevo ticket
                        </Link>
                    </div>
                </div>
                <div className='aside shadow bg-white rounded'>
                    <Descripcion ticket={filtered_tickets ? filtered_tickets[ticket_i] : null}/>
                    </div>
            </div>
            
        </div>
      </>
      )
  }

  export default TicketsView;