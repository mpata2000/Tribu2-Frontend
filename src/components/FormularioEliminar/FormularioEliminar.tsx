import React, { Component } from 'react';
import './FormularioEliminar.css';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { NavigateFunction, useLocation } from 'react-router-dom';
import { AnyARecord } from 'dns';
import { delete_ } from 'services/api';
import { useNavigate } from 'react-router-dom';

function solicitarEliminacionDeTicket( id : any, estado : any, navigate : NavigateFunction) {


    if (estado == "cerrado") {
        const respuesta = delete_(`https://shielded-shelf-11253.herokuapp.com/tickets/${id}`);
        alert("Ticket correctamente eliminado");
        navigate(-1);
    }
    else{
        alert("El ticket debe estar cerrado para poder ser eliminado");
        navigate(-1); //va a la pagina previa
    }
}



const FormularioEliminar = (props:any) => {

    const location = useLocation();
    const { ticketID } = location.state;
    const {nombre} = location.state;
    const {descrip} = location.state;
    const {estado} = location.state;
    const navigate = useNavigate();

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
                    <Form.Control value={nombre} readOnly={true} className='input_grande' type="text" placeholder="Nombre del ticket" />
                </Form.Group>

                <div className="d-flex flex-row justify-content-evenly">
                    <Form.Group className='d-flex flex-row' controlId="formBasicEmail">
                        <Form.Label  className='etiqueta'>Descripcion</Form.Label>
                        <Form.Control
                            value={descrip}
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
                    <Button className='btn btn-dark' onClick={() =>solicitarEliminacionDeTicket(ticketID, estado, navigate)}>
                        Eliminar ticket
                    </Button>

                    </Form.Group>
                </div>

            </Form>
        </div>
    )
}

export default FormularioEliminar