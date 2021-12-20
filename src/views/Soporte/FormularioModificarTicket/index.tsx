import React from 'react'
import {Link} from "react-router-dom";
//import Button from 'components/Button/Button';
//import './index.css'
import {Button, Accordion} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioModificar from 'components/FormularioModificar/FormularioModificar';

const FormularioModificarTicketView = (props: any) => {
//  const {onGetTickets} = props;
//  const {tickets}      = props;

  return (
    <>
      <div className='body'>
            
            <div className='d-flex flex-row' id="titulo">{/* Lo pongo a la izquierda y que ocupe todo el ancho  */}
                <h2>Modificar ticket</h2>
            </div>
            
            <FormularioModificar/>

        </div>
    </>
    )
}

export default FormularioModificarTicketView;
