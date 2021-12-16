import React from 'react'

const Descripcion = (props:any) => {
    let {ticket} = props;
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
    )
}

export default Descripcion