import React from 'react'
import {Link} from "react-router-dom";
//import Button from 'components/Button/Button';
//import './index.css'
import {Button, Accordion} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioCrear from 'components/FormularioCrear/FormularioCrear';
import {post} from 'services/api';

const FormularioTicketsView = (props: any) => {

  return (
    <>
      <div className='body'>
            
            <div className='d-flex flex-row' id="titulo">{/* Lo pongo a la izquierda y que ocupe todo el ancho  */}
                <h2>Crear ticket</h2>
            </div>
            
            <FormularioCrear/>

        </div>
    </>
    )
}

export default FormularioTicketsView;
