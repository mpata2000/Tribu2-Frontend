import React from 'react'
import './FormularioCrear.css'
import Form from 'react-bootstrap/Form'
import { FloatingLabel } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const FormularioCrear = (props:any) => {
    const {tickets} = props;
    const {onRowClick} = props;
    return (
        <div className='d-flex justify-content-center'>
            <Form className='d-flex flex-column justify-content-evenly formulario'>
                <Form.Group className="d-flex flex-row justify-content-evenly" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="email" placeholder="Nombre del ticket" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>
                <div className="d-flex flex-row justify-content-evenly">
                    <Form.Group controlId="floatingSelect">
                        <Form.Label>Proyectos</Form.Label>
                        <Form.Select>
                            <option> </option>
                            <option value="1">SIU-GUARANI</option>
                            <option value="2">Proyecto2</option>
                            <option value="3">Proyecto3</option>
                        </Form.Select>
                    </Form.Group>
                    <FloatingLabel controlId="floatingSelect" label="Versiones">
                        <Form.Label>Version</Form.Label>
                        <Form.Select>
                            <option> </option>
                            <option value="1">1.0</option>
                            <option value="2">2.0</option>
                            <option value="3">2.1</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Descripción del ticket"
                        style={{ height: '100px' }}
                        />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default FormularioCrear