import React from 'react'
import {Link} from "react-router-dom";
//import Button from 'components/Button/Button';
//import './index.css'
import {Button, Accordion} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioCrear from 'components/FormularioCrear/FormularioCrear';
import {post} from 'services/api';

const FormularioTicketsView = (props: any) => {
//  const {onGetTickets} = props;
//  const {tickets}      = props;

  const handleSubmit = (data:any) => {
    console.log(data)
    const respuesta = post('https://shielded-shelf-11253.herokuapp.com/tickets',data);
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
