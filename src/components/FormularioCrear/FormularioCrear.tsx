import React, { useState } from 'react'
import './FormularioCrear.css'
import Form from 'react-bootstrap/Form'
import { FloatingLabel } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import useTypedSelector from 'hooks/useTypedSelector';
import { post } from 'services/api';
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';

const FormularioCrear = (props:any) => {
    const {tickets} = props;
    const {onRowClick} = props;
    const {handleSubmit} = props;
    const navigate = useNavigate();

    const location = useLocation();
    const { producto } = location.state;
    const {version} = location.state;

    const resources_state = useTypedSelector((state) => state.resources);
    const tareas_state = useTypedSelector((state) => state.tareas);
    const clients_state = useTypedSelector((state) => state.clients);
    const resources = resources_state.resources;
    //console.log(tareas_state)
    const tareas = tareas_state.tareas.filter((tarea:any) => {return tarea.idTicket == 0});
    const clients = clients_state.clients;

    const [formValues, setFormValues ] = useState({
        nombre: '',
        producto: producto,
        version: version,
        estado: 'Abierto',
        tipo: 'consulta',
        severidad: '1',
        cliente: '',
        recurso: '',
        descripcion: '',
        creador: '',
        tareas: [] as string[],
    })
    const tareasAgregadas:string[] = [];

    const handleChangeTarea = (event:any) => {
        const target = event.target;
        const name = target.name;
        if(formValues.tareas.includes(target.value)){
            formValues.tareas.splice(formValues.tareas.indexOf(target.value),1)
        }
        else{
            formValues.tareas.push(target.value);
        }
        console.log(formValues.tareas)
        setFormValues({...formValues, [name]: formValues.tareas})
    };

    const handleChange = (event:any) => {
        const {name , value} = event.target
        //console.log(name, value)
        setFormValues({...formValues, [name]: value})
    }

    const enviar_solicitud_agregar = (e:any) => {
        console.log(formValues.tareas)
        e.preventDefault()
        post(`https://shielded-shelf-11253.herokuapp.com/tickets`,formValues);
        alert("Ticket correctamente creado");
        console.log("click")
        console.log(formValues);
        navigate(-1);
    }

    const agregarTarea = () => {
        formValues.tareas.map((tarea) => (
           <ul>
               <li>{tarea}</li>
           </ul> 
        ))
    }
    

    if(resources_state.loading || tareas_state.loading || clients_state.loading){
        return (
            <h2>Loading...</h2>
        )
    }
    return (
        <div className='d-flex justify-content-between'>
            <Form className='d-flex flex-column justify-content-evenly formulario'>
                <div className='d-flex flex-row justify-content-evenly'>
                    <div className='d-flex flex-column justify-content-evenly'>

                        <Form.Group className="d-flex flex-row justify-content-evenly margen" controlId="formBasicEmail">
                            <Form.Label className='etiqueta'>Nombre</Form.Label>
                            <Form.Control className='input_grande' type="text" placeholder="Nombre del ticket" name="nombre" value={formValues.nombre} onChange={handleChange} />
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                        </Form.Group>
                        <div className="d-flex flex-row justify-content-evenly doble_input">
                            <Form.Group className='d-flex flex-row primer_input margen' controlId="floatingSelect">
                                <Form.Label className='etiqueta'>Proyectos</Form.Label>
                                <Form.Control type="text" className='input_chico' name="producto" value={formValues.producto} readOnly={true}  />
                            </Form.Group>
                            <Form.Group className='d-flex flex-row primer_input margen' controlId="floatingSelect">
                                <Form.Label className='etiqueta'>Version</Form.Label>
                                <Form.Control type="text" className='input_chico' name="version" value={formValues.version} readOnly={true} />
                            </Form.Group>
                        </div>

                        <div className="d-flex flex-row justify-content-evenly">
                            <Form.Group className='d-flex flex-row primer_input margen' controlId="floatingSelect">
                                <Form.Label className='etiqueta'>Estado</Form.Label>
                                <Form.Select className='input_chico' name="estado" value={formValues.estado} onChange={handleChange}>
                                    <option value="Abierto">Abierto</option>
                                    <option value="En proceso">En Proceso</option>
                                    <option value="A la espera de desarrollo">A la espera de desarollo</option>
                                    <option value="A la espera de cliente">A la espera de cliente</option>
                                    <option value="Cerrado">Cerrado</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className='d-flex flex-row primer_input margen' controlId="floatingSelect">
                                <Form.Label className='etiqueta'>Tipo</Form.Label>
                                <Form.Select className='input_chico' name="tipo" value={formValues.tipo} onChange={handleChange}>
                                    <option value="consulta">Consulta</option>
                                    <option value="incidencia">Incidencia</option>
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <div className="d-flex flex-row justify-content-evenly">
                            <Form.Group className='d-flex flex-row primer_input margen' controlId="floatingSelect">
                                <Form.Label className='etiqueta'>Severidad</Form.Label>
                                <Form.Select className='input_chico' name="severidad" value={formValues.severidad} onChange={handleChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className='d-flex flex-row primer_input margen' controlId="floatingSelect">
                                <Form.Label className='etiqueta'>Cliente</Form.Label>
                                <Form.Select className='input_chico' name="cliente" value={formValues.cliente} onChange={handleChange}>
                                <option value=""></option>
                                    {clients.map((client:any) =>(
                                        <option value={client.id}>{client['razon social']}</option>
                                        ))}
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <Form.Group className="d-flex flex-row justify-content-evenly margen" controlId="formBasicEmail">
                            <Form.Label className='etiqueta'>Creador</Form.Label>
                            <Form.Control className='input_grande' type="text" placeholder="Complete" name="creador" value={formValues.creador} onChange={handleChange}/>
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                        </Form.Group>
                        
                        <Form.Group className='d-flex flex-row margen' controlId="floatingSelect">
                            <Form.Label className='etiqueta'>Recurso</Form.Label>
                            <Form.Select className='input_grande' name="recurso" value={formValues.recurso} onChange={handleChange}>
                                <option value=""></option>
                                {resources.map((resource:any) =>(
                                    <option value={resource.legajo}>{resource.Nombre + ' ' + resource.Apellido}</option>
                                    ))}
                            </Form.Select>
                        </Form.Group>
                        <div className="d-flex flex-row justify-content-evenly">
                            <Form.Group className='d-flex flex-row margen' controlId="formBasicEmail">
                                <Form.Label className='etiqueta'>Descripcion</Form.Label>
                                <Form.Control
                                    className='input_descripcion_crear'
                                    as="textarea"
                                    placeholder="Descripción del ticket"
                                    name="descripcion"
                                    value={formValues.descripcion}
                                    onChange={handleChange}
                                    style={{ height: '100px' }}
                                    />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="mb-3">
                        <Form.Group className='d-flex flex-column margen' controlId="floatingSelect">
                            <Form.Label className='etiqueta'>Tareas</Form.Label>
                            <Form.Select name="tareas" value={formValues.tareas} onChange={handleChangeTarea}>
                                    
                                {tareas.map((tarea:any) =>(
                                    <option value={tarea.idTarea}>{tarea.idTarea + ' : ' + tarea.nombre}</option>
                                ))}
                            </Form.Select>
                            {/* <Button onClick={agregarTarea}>
                                Agregar Tarea
                            </Button> */}
                        </Form.Group>
                        {<div>
                            <ul>
                                {formValues.tareas.map((tarea:any) =>(<li>{tarea}</li>))}
                            </ul>
                        </div>}
                        {/* {tareas.map((tarea:any) =>(
                        <Form.Check 
                            type='checkbox'
                            id={tarea.idTarea}
                            label={tarea.idTarea + ":" + tarea.nombre}
                            value={formValues.tareas}
                            name="tareas"
                            onChange={handleChangeTarea}
                        />
                        ))} */}
                    </div>
                </div>
                        
                <Button className='btn btn-dark' onClick={enviar_solicitud_agregar}>
                    Crear ticket
                </Button>
            </Form>
        </div>
    )
}

export default FormularioCrear