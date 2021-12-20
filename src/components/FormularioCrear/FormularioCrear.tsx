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
    console.log(tareas_state)
    const tareas = tareas_state.tareas.filter((tarea:any) => {return tarea.idTicket == 0});
    const clients = clients_state.clients;

    const [formValues, setFormValues ] = useState({
        nombre: '',
        producto: producto,
        version: version,
        estado: 'Abierto',
        tipo: '',
        severidad: '1',
        cliente: '',
        recurso: '',
        descripcion: '',
        creador: '',
        tareas: ["1"],
    })

    const handleChange = (event:any) => {
        const {name , value} = event.target
        console.log(name, value)
        if (name=="tareas"){
            setFormValues({...formValues, [name]: [ parseInt(value) ]})
        }else{
            setFormValues({...formValues, [name]: value})
        }
    }

    const enviar_solicitud_agregar = (e:any) => {
        e.preventDefault()
        post(`https://shielded-shelf-11253.herokuapp.com/tickets`,formValues);
        alert("Ticket correctamente creado");
        console.log(formValues);
        navigate(-1);
    }
      
    const handleChangeTarea = (event) => {
      const {target: { value },} = event;
        setFormValues(
        // On autofill we get a the stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

    if(resources_state.loading || tareas_state.loading || clients_state.loading){
        return (
            <h2>Loading...</h2>
        )
    }
    return (
        <div className='d-flex justify-content-between'>
            <Form className='d-flex flex-column justify-content-evenly formulario'>
                <Form.Group className="d-flex flex-row justify-content-evenly" controlId="formBasicEmail">
                    <Form.Label className='etiqueta'>Nombre</Form.Label>
                    <Form.Control className='input_grande' type="text" placeholder="Nombre del ticket" name="nombre" value={formValues.nombre} onChange={handleChange} />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>
                <div className="d-flex flex-row justify-content-evenly doble_input">
                    <Form.Group className='d-flex flex-row primer_input' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Proyectos</Form.Label>
                        <Form.Control type="text" className='input_chico' name="producto" value={formValues.producto} readOnly={true}  />
                    </Form.Group>
                    <Form.Group className='d-flex flex-row primer_input' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Version</Form.Label>
                        <Form.Control type="text" className='input_chico' name="version" value={formValues.version} readOnly={true} />
                    </Form.Group>
                </div>

                <div className="d-flex flex-row justify-content-evenly">
                    <Form.Group className='d-flex flex-row primer_input' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Estado</Form.Label>
                        <Form.Select className='input_chico' name="estado" value={formValues.estado} onChange={handleChange}>
                            <option value="Abierto">Abierto</option>
                            <option value="En proceso">En Proceso</option>
                            <option value="A la espera de desarrollo">A la espera de desarollo</option>
                            <option value="A la espera de cliente">A la espera de cliente</option>
                            <option value="Cerrado">Cerrado</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='d-flex flex-row primer_input' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Tipo</Form.Label>
                        <Form.Select className='input_chico' name="tipo" value={formValues.tipo} onChange={handleChange}>
                            <option value="consulta">Consulta</option>
                            <option value="incidencia">Incidencia</option>
                        </Form.Select>
                    </Form.Group>
                </div>

                <div className="d-flex flex-row justify-content-evenly">
                    <Form.Group className='d-flex flex-row primer_input' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Severidad</Form.Label>
                        <Form.Select className='input_chico' name="severidad" value={formValues.severidad} onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='d-flex flex-row primer_input' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Cliente</Form.Label>
                        <Form.Select className='input_chico' name="cliente" value={formValues.cliente} onChange={handleChange}>
                            {clients.map((client:any) =>(
                            <option value={client.id}>{client['razon social']}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </div>

                <Form.Group className="d-flex flex-row justify-content-evenly" controlId="formBasicEmail">
                    <Form.Label className='etiqueta'>Creador</Form.Label>
                    <Form.Control className='input_grande' type="text" placeholder="Complete" name="creador" value={formValues.creador} onChange={handleChange}/>
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>
                
                <Form.Group className='d-flex flex-row' controlId="floatingSelect">
                    <Form.Label className='etiqueta'>Recurso</Form.Label>
                    <Form.Select className='input_grande' name="recurso" value={formValues.recurso} onChange={handleChange}>
                        {resources.map((resource:any) =>(
                            <option value={resource.legajo}>{resource.Nombre + ' ' + resource.Apellido}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                    <Form.Group className='d-flex flex-row' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Tarea</Form.Label>
                        <Form.Control as="select" className='input_grande' multiple name="tareas" onChange={handleChange} value={formValues.tareas}>
                            {tareas.map((tarea:any) =>(
                                <option value={tarea.idTarea}>{tarea.idTarea + ":" + tarea.nombre}</option>
                            ))}
                        </Form.Control>

                        {/* <FormControl sx={{ m: 1, width: 300 }}>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={formValues.tareas}
                                onChange={handleChangeTarea}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                                //MenuProps={MenuProps}
                                >
                                {tareas.map((tarea) => (
                                    <MenuItem key={tarea.idTarea} value={tarea.nombre}>
                                    <Checkbox checked={formValues.tareas.indexOf(tarea) > -1} />
                                    <ListItemText primary={tarea} />
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl> */}
                    </Form.Group>
                <div className="d-flex flex-row justify-content-evenly">
                    <Form.Group className='d-flex flex-row' controlId="formBasicEmail">
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

                    <Button className='btn btn-dark' onClick={enviar_solicitud_agregar}>
                        Crear ticket
                    </Button>
                </div>
            </Form>

            <div className='d-flex flex-column justify-content-center'>
                <h5>Tareas</h5>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </div>
    )
}

export default FormularioCrear