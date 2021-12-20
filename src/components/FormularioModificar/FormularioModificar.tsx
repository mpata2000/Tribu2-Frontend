import React , { useState }from 'react'
import './FormularioModificar.css'
import Form from 'react-bootstrap/Form'
import { FloatingLabel } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { allowedNodeEnvironmentFlags } from 'process';
import { put } from 'services/api';

const FormularioModificar = (props:any) => {
    const location = useLocation();
    const { ticketID } = location.state;
    const {nombre} = location.state;
    const {descrip} = location.state;
    const navigate = useNavigate();
    //const {tickets} = props;



    const [formValues, setFormValues ] = useState({
        estado: 'abierto',
        severidad: '1',
        descripcion: descrip,
    })

    const handleChange = (event:any) => {
        const {name , value} = event.target;
        //console.log(name, value);
        setFormValues({...formValues, [name]: value});
    }

    const enviar_solicitud_modificar = (e:any) => {
        e.preventDefault();
        put(`https://shielded-shelf-11253.herokuapp.com/tickets/${ticketID}`, formValues);
        alert("Ticket correctamente actualizado");
        //console.log(formValues);
        navigate(-1);
    }


    return (
        <div className='d-flex justify-content-center'>
            <Form className='d-flex flex-column justify-content-evenly formulario_modificar'>

            <Form.Group className="d-flex flex-row justify-content-evenly" controlId="formBasicEmail">
                    <Form.Label className='etiqueta_modificar'>ID del Ticket</Form.Label>
                    <Form.Control value={ticketID} readOnly={true} className='input_grande' type="text" placeholder="Nombre del ticket" />
                </Form.Group>

                <Form.Group className="d-flex flex-row justify-content-evenly" controlId="formBasicEmail">
                    <Form.Label className='etiqueta_modificar'>Nombre del Ticket</Form.Label>
                    <Form.Control value={nombre} readOnly={true} className='input_grande' type="text"  onChange={handleChange} />
                </Form.Group>
                <br></br>
                <br></br>
                <h2 className="flex-row justify-content-evenly" >Campos Modificables</h2>
                <br></br>
                <Form.Group className="d-flex flex-row justify-content-evenly" controlId="formBasicEmail" >
                    <Form.Label className='etiqueta_modificar'>Severidad</Form.Label>
                    <Form.Select className='input_grande' name="severidad" value={formValues.severidad} onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </Form.Select>
                </Form.Group>
                <br></br>

                <Form.Group className="d-flex flex-row justify-content-evenly" controlId="formBasicEmail">
                    <Form.Label className='etiqueta_modificar'>Estado</Form.Label>
                    <Form.Select className='input_grande' name="estado" value={formValues.estado} onChange={handleChange}>
                            <option value="Abierto">Abierto</option>
                            <option value="En Proceso">En Proceso</option>
                            <option value="A la espera de desarollo">A la espera de desarollo</option>
                            <option value="A la espera de cliente">A la espera de cliente</option>
                            <option value="Cerrado">Cerrado</option>
                        </Form.Select>
                </Form.Group>
                <br></br>
                <div className="d-flex flex-row justify-content-evenly">
                    <Form.Group className='d-flex flex-row' controlId="formBasicEmail">
                        <Form.Label  className='etiqueta_modificar'>Descripcion</Form.Label>
                        <Form.Control
                            value={formValues.descripcion}
                            name="descripcion"
                            onChange={handleChange}
                            className='input_descripcion'
                            as="textarea"
                            placeholder={descrip}
                            style={{ height: '100px' }}
                            />
                    </Form.Group>
                </div>

                <div className="d-flex flex-row justify-content-evenly">
                    <Form.Group className='d-flex flex-row' controlId="formBasicEmail">
                    <Button className='btn btn-dark' onClick={enviar_solicitud_modificar}>
                        Modificar ticket
                    </Button>
                    <Button className='btn btn-dark' onClick={() => navigate(-1)} >
                        Cancelar
                    </Button>

                    </Form.Group>
                </div>

            </Form>
        </div>
    )
}

export default FormularioModificar