import React from 'react'
import moment from 'moment'
import Button from 'react-bootstrap/Button'
import { AnyRecord } from 'dns';
import {Link} from 'react-router-dom';
import { List, ListItem, ListItemText} from '@mui/material';
import useTypedSelector from 'hooks/useTypedSelector';

const Descripcion = (props:any) => {
    let {ticket} = props;
    const state = useTypedSelector((state) => state.tareas);
    const tareas = state.tareas;
    const tareas_ticket = tareas.filter((tarea:any) => {return ticket.tareas.includes(tarea.idTarea)});
    if(!ticket){
        return (<div></div>)
    }
    if(state.loading){
        return (
            <h2>Loading...</h2>
        )
    }
    return (
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
                    <p className='margen_chico'>{moment(new Date(parseInt(ticket.fecha_creacion))).format("DD/MM/YYYY")}</p>
                </div>
                <div>
                    <p className='subtitulo margen_chico'>Fecha límite:</p>
                    <p className='margen_chico'>{moment(new Date(parseInt(ticket.fecha_limite))).format("DD/MM/YYYY")}</p>
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

            <p className='subtitulo margen_chico margen_derecho'>Tareas:</p>
            <List>
                {tareas_ticket.map((tarea:any) => (
                    <ListItem disablePadding>
                        <ListItemText primary={tarea.nombre} />
                    </ListItem>
                ))}
            </List>
            <div className='d-flex flex-column align-items-center'>
                
                <Link to='/soporte/tickets/eliminar' 
                className='btn btn-secondary boton_accion'
                state={{ ticketID: ticket.id,
                 nombre : ticket.nombre ,
                 descrip : ticket.descripcion,
                 estado : ticket.estado}}>
                    Eliminar
                </Link>


                <Link to='/soporte/tickets/modificar' 
                className='btn btn-secondary boton_accion'
                state={{ ticketID: ticket.id,
                 nombre : ticket.nombre ,
                 descrip : ticket.descripcion,
                 severidad : ticket.severidad,
                 estado : ticket.estado
                 }}>
                    Modificar
                </Link>
                
            </div>
        </div>
    )
}

export default Descripcion