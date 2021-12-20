import React, { Component } from 'react';
import './FormularioEliminar.css';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { NavigateFunction, useLocation , Link} from 'react-router-dom';
import { AnyARecord } from 'dns';
import { delete_ } from 'services/api';
import { useNavigate } from 'react-router-dom';

function solicitarEliminacionDeTicket( id : any, estado : any, navigate : NavigateFunction) {


    if (estado === "Cerrado") {
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
    const {producto} = location.state;
    const {version} = location.state;
    const {tareas} = location.state;

    //const {tickets} = props;

    return (
        <div className='d-flex justify-content-center'>
            <Form className='d-flex flex-column justify-content-evenly formulario_eliminar'>

                <Form.Group className="d-flex flex-row justify-content-evenly" controlId="formBasicEmail">
                    <Form.Label className='etiqueta_eliminar'>ID del Ticket</Form.Label>
                    <Form.Control value={ticketID} readOnly={true} className='input_grande_eliminar' type="text" placeholder="Nombre del ticket" />
                </Form.Group>

                <Form.Group className="d-flex flex-row justify-content-evenly" controlId="formBasicEmail">
                    <Form.Label className='etiqueta_eliminar'>Nombre del Ticket</Form.Label>
                    <Form.Control value={nombre} readOnly={true} className='input_grande_eliminar' type="text" placeholder="Nombre del ticket" />
                </Form.Group>

                <Form.Group className='d-flex flex-row' controlId="formBasicEmail">
                    <Form.Label  className='etiqueta_eliminar'>Descripcion</Form.Label>
                    <Form.Control
                        value={descrip}
                        readOnly={true}
                        className='input_grande_eliminar'
                        as="textarea"
                        placeholder="Descripción del ticket"
                        style={{ height: '100px' }}
                        />
                </Form.Group>

                <Form.Group className='d-flex flex-row justify-content-center' controlId="formBasicEmail">
                    <Button className='btn btn-secondary' onClick={() =>solicitarEliminacionDeTicket(ticketID, estado, navigate) }>
                        Eliminar ticket
                    </Button>
                    <Link to="/soporte/tickets" className='btn btn-dark' state={{ product: producto, version: version, tareas: tareas }}>
                        Cancelar
                    </Link>
                </Form.Group>

            </Form>
        </div>
    )
}

export default FormularioEliminar