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
                    <Form.Label className='etiqueta'>Nombre</Form.Label>
                    <Form.Control className='input_grande' type="email" placeholder="Nombre del ticket" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>
                <div className="d-flex flex-row justify-content-evenly doble_input">
                    <Form.Group className='d-flex flex-row primer_input' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Proyectos</Form.Label>
                        <Form.Select className='input_chico'>
                            <option> </option>
                            <option value="1">SIU-GUARANI</option>
                            <option value="2">Proyecto2</option>
                            <option value="3">Proyecto3</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='d-flex flex-row primer_input' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Version</Form.Label>
                        <Form.Select className='input_chico'>
                            <option> </option>
                            <option value="1">1.0</option>
                            <option value="2">2.0</option>
                            <option value="3">2.1</option>
                        </Form.Select>
                    </Form.Group>
                </div>

                <div className="d-flex flex-row justify-content-evenly">
                    <Form.Group className='d-flex flex-row' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Estado</Form.Label>
                        <Form.Select className='input_chico'>
                            <option> </option>
                            <option value="1">Abierto</option>
                            <option value="2">Cerrado</option>
                            <option value="3">En curso</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='d-flex flex-row' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Tipo</Form.Label>
                        <Form.Select className='input_chico'>
                            <option> </option>
                            <option value="1">Consulta</option>
                            <option value="2">Incidencia</option>
                        </Form.Select>
                    </Form.Group>
                </div>

                <div className="d-flex flex-row justify-content-evenly">
                    <Form.Group className='d-flex flex-row' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Severidad</Form.Label>
                        <Form.Select className='input_chico'>
                            <option> </option>
                            <option value="1">Alta</option>
                            <option value="2">Media</option>
                            <option value="3">Baja</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='d-flex flex-row' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Cliente</Form.Label>
                        <Form.Select className='input_chico'>
                            <option> </option>
                            <option value="1">Cliente 1</option>
                            <option value="2">Cliente 2</option>
                        </Form.Select>
                    </Form.Group>
                </div>

                <Form.Group className="d-flex flex-row justify-content-evenly" controlId="formBasicEmail">
                    <Form.Label className='etiqueta'>Creador</Form.Label>
                    <Form.Control className='input_grande' type="email" placeholder="Complete" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>
                
                <Form.Group className='d-flex flex-row' controlId="floatingSelect">
                    <Form.Label className='etiqueta'>Recurso</Form.Label>
                    <Form.Select className='input_grande'>
                        <option> </option>
                        <option value="1">Recurso 1</option>
                        <option value="2">Recurso 2</option>
                    </Form.Select>
                </Form.Group>

                    <Form.Group className='d-flex flex-row' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Tarea</Form.Label>
                        <Form.Select className='input_grande'>
                            <option> </option>
                            <option value="1">Tarea1</option>
                            <option value="2">Tarea2</option>
                            <option value="3">Tarea3</option>
                        </Form.Select>
                    </Form.Group>
                <div className="d-flex flex-row justify-content-evenly">
                    <Form.Group className='d-flex flex-row' controlId="formBasicEmail">
                        <Form.Label className='etiqueta'>Descripcion</Form.Label>
                        <Form.Control
                            className='input_descripcion'
                            as="textarea"
                            placeholder="Descripción del ticket"
                            style={{ height: '100px' }}
                            />
                    </Form.Group>

                    <Button className='btn btn-dark' type="submit">
                        Crear ticket
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default FormularioCrear