import React from 'react'
import {Link} from "react-router-dom";
//import Button from 'components/Button/Button';
//import './index.css'
import {Button, Accordion} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioEliminar from 'components/FormularioEliminar/FormularioEliminar';

const FormularioEliminarTicketView = (props: any) => {
//  const {onGetTickets} = props;
//  const {tickets}      = props;

  return (
    <>
      <div className='body'>
            
            <div className='d-flex flex-row' id="titulo">{/* Lo pongo a la izquierda y que ocupe todo el ancho  */}
                <h2>Eliminar Ticket</h2>
            </div>
            
            <FormularioEliminar/>

        </div>
    </>
    )
}

export default FormularioEliminarTicketView;
