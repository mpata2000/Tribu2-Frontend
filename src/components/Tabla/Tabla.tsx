import React from 'react'
//import './Table.css'
import Table from 'react-bootstrap/Table'

const Tabla = (props:any) => {
    const {tickets} = props;
    const {onRowClick} = props;
    return (
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
                            {tickets.map((ticket: { nombre: string; tipo: string; recurso: string; estado: string; cliente: string; fecha_limite: string;}, index:number)=> (
                            <tr onClick={()=>{onRowClick(index)}}>
                                <td>{ticket.nombre}</td>
                                <td>{ticket.tipo}</td>
                                <td>{ticket.recurso}</td>
                                <td>{ticket.estado}</td>
                                <td>{ticket.cliente}</td>
                                <td>{ticket.fecha_limite}</td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
    )
}

export default Tabla