import React from 'react'
import './FormularioModificar.css'
import Form from 'react-bootstrap/Form'
import { FloatingLabel } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';

const FormularioModificar = (props:any) => {
    const location = useLocation();
    const { ticketID } = location.state;
    const {nombre} = location.state;
    const {descrip} = location.state

    //const {tickets} = props;

    return (
        <div className='d-flex justify-content-center'>
            <Form className='d-flex flex-column justify-content-evenly formulario'>

            <Form.Group className="d-flex flex-row justify-content-evenly" controlId="formBasicEmail">
                    <Form.Label className='etiqueta'>ID del Ticket</Form.Label>
                    <Form.Control value={ticketID} readOnly={true} className='input_grande' type="text" placeholder="Nombre del ticket" />
                </Form.Group>

                <Form.Group className="d-flex flex-row justify-content-evenly" controlId="formBasicEmail">
                    <Form.Label className='etiqueta'>Nombre del Ticket</Form.Label>
                    <Form.Control value={nombre} readOnly={true} className='input_grande' type="text" placeholder="Severidad" />
                </Form.Group>


                <Form.Group className="d-flex flex-row justify-content-evenly" controlId="formBasicEmail">
                    <Form.Label className='etiqueta'>Severidad</Form.Label>
                    <Form.Control  readOnly={true} className='input_grande' type="text" placeholder="Estado" />
                </Form.Group>


                <Form.Group className="d-flex flex-row justify-content-evenly" controlId="formBasicEmail">
                    <Form.Label className='etiqueta'>Estado</Form.Label>
                    <Form.Control readOnly={true} className='input_grande' type="text" placeholder="Nombre del ticket" />
                </Form.Group>

                <div className="d-flex flex-row justify-content-evenly">
                    <Form.Group className='d-flex flex-row' controlId="formBasicEmail">
                        <Form.Label  className='etiqueta'>Descripcion</Form.Label>
                        <Form.Control

                            className='input_descripcion'
                            as="textarea"
                            placeholder={descrip}
                            style={{ height: '100px' }}
                            />
                    </Form.Group>
                </div>

                <div className="d-flex flex-row justify-content-evenly">
                    <Form.Group className='d-flex flex-row' controlId="formBasicEmail">
                    <Button className='btn btn-dark' type="submit">
                        Modificar ticket
                    </Button>

                    </Form.Group>
                </div>

            </Form>
        </div>
    )
}

export default FormularioModificar