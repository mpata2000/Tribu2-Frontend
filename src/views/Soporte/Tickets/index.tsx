import React from 'react'
import {Button, Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import './index.css'


const TicketsView = (props: any) => {
    
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
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Tipo</th>
                                <th>Recurso</th>
                                <th>Estado</th>
                                <th>Cliente</th>
                                <th>Deadline</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>El cosito no funciona</td>
                                <td>Consulta</td>
                                <td>Maria Perez</td>
                                <td>Abierto</td>
                                <td>Fernando Soluzia</td>
                                <td>20/03/2022</td>
                            </tr>
                            <tr>
                                <td>Rotura del coso</td>
                                <td>Incidencia</td>
                                <td>Mario Mendoza</td>
                                <td>Abierto</td>
                                <td>FIUBA</td>
                                <td>25/12/2022</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className='d-flex flex-row justify-content-between'>
                        <Link to='/soporte' className='btn btn-secondary boton_pie_pagina'>
                            Volver a Productos
                        </Link>
                        <p className='btn btn-dark boton_pie_pagina'>Crear nuevo ticket</p>
                    </div>
                </div>

                <div className='aside shadow bg-white rounded'>
                    <div className='info'>
                        <h6>El cosito no funciona</h6>
                        <div>
                            <p className='subtitulo margen_chico'>Descripción:</p>
                            <p className='margen_chico descripcion'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur quia numquam velit reiciendis incidunt iste, placeat deserunt rerum aliquam neque ratione? Dolores unde tempora numquam ex tempore aspernatur corrupti ratione.</p>
                        </div>
                        <div className='d-flex flex-row justify-content-around info_item'>
                            <div>
                                <p className='subtitulo margen_chico'>Tipo:</p>
                                <p className='margen_chico'>Consulta</p>
                            </div>
                            <div>
                                <p className='subtitulo margen_chico'>Severidad:</p>
                                <p className='margen_chico'>Urgente(4)</p>
                            </div>
                        </div>
                        <div className='d-flex flex-row justify-content-evenly'>
                            <div>
                                <p className='subtitulo margen_chico'>Fecha creación:</p>
                                <p className='margen_chico'>22/12/2021</p>
                            </div>
                            <div>
                                <p className='subtitulo margen_chico'>Fecha límite:</p>
                                <p className='margen_chico'>29/12/2021</p>
                            </div>
                        </div>
                        <div className='d-flex flex-row justify-content-around'>
                            <div>
                                <p className='subtitulo margen_chico'>Cliente:</p>
                                <p className='margen_chico'>Juan Perez</p>
                            </div>
                            <div>
                                <p className='subtitulo margen_chico'>Creador:</p>
                                <p className='margen_chico'>Ruby Rails</p>
                            </div>
                        </div>
                        <div className='d-flex flex-row justify-content-center'>
                            <p className='subtitulo margen_chico margen_derecho'>Recurso:</p>
                            <p className='margen_chico'>Maria Perez</p>
                        </div>

                        <div className='d-flex flex-column align-items-center'>
                            <p className='btn btn-link boton_tareas'>Ver tareas asociadas</p>
                            <p className='btn btn-secondary boton_accion'>Eliminar</p>
                            <p className='btn btn-dark boton_accion'>Modificar</p>
                        </div>
                    </div>
                    <div></div>   
                </div>
            </div>
            
        </div>
      </>
      )
  }

  export default TicketsView;