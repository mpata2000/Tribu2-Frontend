import React from 'react'
import {Link} from "react-router-dom";
//import Button from 'components/Button/Button';
import './index.css'
import {Button, Accordion} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import useTypedSelector from 'hooks/useTypedSelector';

const SoporteView = (props: any) => {
  const state = useTypedSelector((state) => state.products);
  const products = [{"name":"Siu Guarani","versions":["1.0.0"]},{"name":"Proyecto 2","versions":["2.0","2.1","2.1.1"]}];
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
                {/* Aca deberiamos mostrar lo del get de productos y versiones */}

                {products.map((product: { name: string; versions: string[];}, index:number)=> (
                    <Accordion.Item eventKey={index.toString()}>
                        <Accordion.Header>{product.name}</Accordion.Header>
                        <Accordion.Body>
                        {product.versions.map((version: string, index:number)=> (
                            <div>
                                <Link to="/soporte/tickets" state={{ product: product.name, version: version }}>
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
