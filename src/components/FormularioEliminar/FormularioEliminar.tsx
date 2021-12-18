import React from 'react';
import './FormularioEliminar.css';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const FormularioEliminar = (props:any) => {

    const {tickets} = props;

    return (
        <div className='d-flex justify-content-center'>
            <Form className='d-flex flex-column justify-content-evenly formulario'>
                <Form.Group className="d-flex flex-row justify-content-evenly" controlId="formBasicEmail">
                    <Form.Label className='etiqueta'>Nombre del Ticket</Form.Label>
                    <Form.Control readOnly={true} className='input_grande' type="text" placeholder="Nombre del ticket" />
                </Form.Group>

                <div className="d-flex flex-row justify-content-evenly">
                    <Form.Group className='d-flex flex-row' controlId="formBasicEmail">
                        <Form.Label className='etiqueta'>Descripcion</Form.Label>
                        <Form.Control
                            readOnly={true}
                            className='input_descripcion'
                            as="textarea"
                            placeholder="Descripción del ticket"
                            style={{ height: '100px' }}
                            />
                    </Form.Group>
                </div>

                <div className="d-flex flex-row justify-content-evenly">
                    <Form.Group className='d-flex flex-row' controlId="formBasicEmail">
                    <Button className='btn btn-dark' type="submit">
                        Eliminar ticket
                    </Button>

                    <Button className='btn btn-dark'>
                        Cancelar
                    </Button>
                    </Form.Group>
                </div>

            </Form>
        </div>
    )
}

export default FormularioEliminar