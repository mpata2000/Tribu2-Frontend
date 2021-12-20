import React from 'react'
import {Link} from "react-router-dom";
//import Button from 'components/Button/Button';
//import './index.css'
import {Button, Accordion} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioCrear from 'components/FormularioCrear/FormularioCrear';
import {crearTicket} from 'services/api';

const FormularioTicketsView = (props: any) => {
//  const {onGetTickets} = props;
//  const {tickets}      = props;

  const handleSubmit = (data:any) => {
    console.log(data)
    const formData = new FormData()
    formData.append('nombre',data.nombre)
    formData.append('tipo',data.tipo)
    formData.append('estado',data.estado)
    formData.append('severidad',data.severidad)
    formData.append('cliente',data.cliente)
    formData.append('creador',data.creador)
    formData.append('descripcion',data.descripcion)
    formData.append('recurso',data.recurso)
    formData.append('tareas',data.tareas)
    formData.append('producto',data.producto)
    formData.append('version',data.version)

    crearTicket(formData);
  }

  return (
    <>
      <div className='body'>
            
            <div className='d-flex flex-row' id="titulo">{/* Lo pongo a la izquierda y que ocupe todo el ancho  */}
                <h2>Crear ticket</h2>
            </div>
            
            <FormularioCrear handleSubmit={handleSubmit}/>

        </div>
    </>
    )
}

export default FormularioTicketsView;
