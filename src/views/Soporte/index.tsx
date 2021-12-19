import React from 'react'
import {Link} from "react-router-dom";
//import Button from 'components/Button/Button';
import './index.css'
import {Button, Accordion} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import useTypedSelector from 'hooks/useTypedSelector';

const SoporteView = (props: any) => {
  const state = useTypedSelector((state) => state.products);
    if(state.loading){
        return (
            <h2>Loading...</h2>
        )
    }
  return (
    <>
      <div className='body'>
            
            <div className='d-flex flex-row' id="titulo">{/* Lo pongo a la izquierda y que ocupe todo el ancho  */}
                <h2>Productos</h2>
            </div>
            
            <Accordion className='productos'>
                {Object.entries(state.products).map((product: any, index:number)=> (
                    <Accordion.Item eventKey={index.toString()}>
                        <Accordion.Header>{product[0]}</Accordion.Header>
                        <Accordion.Body>
                        {product[1].map((version: string, index:number)=> (
                            <div>
                                <Link to="/soporte/tickets" state={{ product: product[0], version: version }}>
                                    <span>{version}</span>
                                </Link>
                            </div>
                        ))}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    </>
    )
}

export default SoporteView;
