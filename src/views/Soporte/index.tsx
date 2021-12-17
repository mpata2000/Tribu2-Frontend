import React from 'react'
import {Link} from "react-router-dom";
//import Button from 'components/Button/Button';
import './index.css'
import {Button, Accordion} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const SoporteView = (props: any) => {
  const {onGetTickets} = props;
  const {products} = props;
  const {setProduct} = props;

  return (
    <>
      <div className='body'>
            
            <div className='d-flex flex-row' id="titulo">{/* Lo pongo a la izquierda y que ocupe todo el ancho  */}
                <h2>Productos</h2>
        
            </div>
            
            <Accordion className='productos'>
                {/* Aca deberiamos mostrar lo del get de productos y versiones */}

                {products.map((product: { name: string; versions: [string];}, index:number)=> (
                    <Accordion.Item eventKey={index.toString()}>
                        <Accordion.Header>{product.name}</Accordion.Header>
                        <Accordion.Body>
                        {product.versions.map((version: string, index:number)=> (
                            <div>
                                <Link to="/soporte/tickets">
                                    <span onClick={() => {onGetTickets(product.name, version)}}>{version}</span>
                                </Link>
                            </div>
                        ))}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

            <Button onClick={onGetTickets} className='btn-primary boton_tickets_consola'>Ver tickets creados</Button>
            

        </div>
    </>
    )
}

export default SoporteView;
