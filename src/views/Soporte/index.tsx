import React from 'react'
import {Link} from "react-router-dom";
//import Button from 'components/Button/Button';
import './index.css'
import {Button, Accordion} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const SoporteView = (props: any) => {
  const {onGetTickets} = props;
//  const {tickets}      = props;

  return (
    <>
      <div className='body'>
            
            <div className='d-flex flex-row' id="titulo">{/* Lo pongo a la izquierda y que ocupe todo el ancho  */}
                <h2>Productos</h2>
        
            </div>
            
            <Accordion className='productos'>
                {/* Aca deberiamos mostrar lo del get de productos y versiones */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Siu Guarani</Accordion.Header>
                    <Accordion.Body>
                        <Link to="/soporte/tickets">
                            <span onClick={onGetTickets}>Version 1.0</span>
                        </Link>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Proyecto 2</Accordion.Header>
                    <Accordion.Body>Version 2.0</Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Button onClick={onGetTickets} className='btn-primary boton_tickets_consola'>Ver tickets creados</Button>
            

        </div>
    </>
    )
}

export default SoporteView;
