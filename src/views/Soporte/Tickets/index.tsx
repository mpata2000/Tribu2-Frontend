import React from 'react'
import {Button, Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Tabla from 'components/Tabla/Tabla'
import './index.css'


const TicketsView = (props: any) => {
    const {tickets} = props;
    
    return (
      <>
        <div className='body'>
            <div  className='d-flex flex-row justify-content-between titulo'>
                <div>
                    <h2>Tickets</h2>
                </div>

                <div>
                    <h4>Proyecto: SIU Guarani</h4>
                    <h5>Versión: 1.0</h5>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-evenly tabla_aside'>
                <div className='d-flex flex-column justify-content-between tabla'>
                    
                    <Tabla tickets={tickets} />

                    <div className='d-flex flex-row justify-content-between'>
                        <Link to='/soporte' className='btn btn-secondary boton_pie_pagina'>
                            Volver a Productos
                        </Link>
                        <p className='btn btn-dark boton_pie_pagina'>Crear nuevo ticket</p>
                    </div>
                </div>

                <div className='aside shadow bg-white rounded'>
                    {tickets.map((ticket : { nombre: string; descripcion: string;severidad: string; fecha_creacion:string; creador: string; tipo: string; recurso: string; estado: string; cliente: string; fecha_limite: string;})=> (
                    <div className='info'>
                        <h6>{ticket.nombre}</h6>
                        <div>
                            <p className='subtitulo margen_chico'>Descripción:</p>
                            <p className='margen_chico descripcion'>{ticket.descripcion}</p>
                        </div>
                        <div className='d-flex flex-row justify-content-around info_item'>
                            <div>
                                <p className='subtitulo margen_chico'>Tipo:</p>
                                <p className='margen_chico'>{ticket.tipo}</p>
                            </div>
                            <div>
                                <p className='subtitulo margen_chico'>Severidad:</p>
                                <p className='margen_chico'>{ticket.severidad}</p>
                            </div>
                        </div>
                        <div className='d-flex flex-row justify-content-evenly'>
                            <div>
                                <p className='subtitulo margen_chico'>Fecha creación:</p>
                                <p className='margen_chico'>{ticket.fecha_creacion}</p>
                            </div>
                            <div>
                                <p className='subtitulo margen_chico'>Fecha límite:</p>
                                <p className='margen_chico'>{ticket.fecha_limite}</p>
                            </div>
                        </div>
                        <div className='d-flex flex-row justify-content-around'>
                            <div>
                                <p className='subtitulo margen_chico'>Cliente:</p>
                                <p className='margen_chico'>{ticket.cliente}</p>
                            </div>
                            <div>
                                <p className='subtitulo margen_chico'>Creador:</p>
                                <p className='margen_chico'>{ticket.creador}</p>
                            </div>
                        </div>
                        <div className='d-flex flex-row justify-content-center'>
                            <p className='subtitulo margen_chico margen_derecho'>Recurso:</p>
                            <p className='margen_chico'>{ticket.recurso}</p>
                        </div>

                        <div className='d-flex flex-column align-items-center'>
                            <p className='btn btn-link boton_tareas'>Ver tareas asociadas</p>
                            <p className='btn btn-secondary boton_accion'>Eliminar</p>
                            <p className='btn btn-dark boton_accion'>Modificar</p>
                        </div>
                    </div>
                            ))}   
                </div>
            </div>
            
        </div>
      </>
      )
  }

  export default TicketsView;