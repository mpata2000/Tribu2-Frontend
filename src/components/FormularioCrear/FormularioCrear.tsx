import React, { useState } from 'react'
import './FormularioCrear.css'
import Form from 'react-bootstrap/Form'
import { FloatingLabel } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import useTypedSelector from 'hooks/useTypedSelector';


const FormularioCrear = (props:any) => {
    const {tickets} = props;
    const {onRowClick} = props;
    const {handleSubmit} = props;

    const resources_state = useTypedSelector((state) => state.resources);
    const tareas_state = useTypedSelector((state) => state.tareas);
    const clients_state = useTypedSelector((state) => state.clients);
    const resources = resources_state.resources;
    const tareas = tareas_state.tareas.filter((tarea:any) => {return tarea.idTicket == 0});
    const clients = clients_state.clients;

    const [formValues, setFormValues ] = useState({
        nombre: '',
        producto: '',
        version: '',
        estado: '',
        tipo: '',
        severidad: '',
        cliente: '',
        recurso: '',
        descripcion: '',
        creador: '',
        tareas: ['1'],
    })

    const handleChange = (event:any) => {
        const {name , value} = event.target
        console.log(name, value)

        setFormValues({...formValues, [name]: value})
    }

    const _handleSubmit = (e:any) => {
        e.preventDefault()
        handleSubmit({...formValues})
        //console.log(formValues)
    }

    if(resources_state.loading || tareas_state.loading || clients_state.loading){
        return (
            <h2>Loading...</h2>
        )
    }
    return (
        <div className='d-flex justify-content-between'>
            <Form className='d-flex flex-column justify-content-evenly formulario' onSubmit = {_handleSubmit}>
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
                        <Form.Select className='input_chico' name="producto" value={formValues.producto} onChange={handleChange}>
                            <option> </option>
                            <option value="1">SIU-GUARANI</option>
                            <option value="2">Proyecto2</option>
                            <option value="3">Proyecto3</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='d-flex flex-row primer_input' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Version</Form.Label>
                        <Form.Select className='input_chico' name="version" value={formValues.version} onChange={handleChange}>
                            <option> </option>
                            <option value="1">1.0</option>
                            <option value="2">2.0</option>
                            <option value="3">2.1</option>
                        </Form.Select>
                    </Form.Group>
                </div>

                <div className="d-flex flex-row justify-content-evenly">
                    <Form.Group className='d-flex flex-row primer_input' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Estado</Form.Label>
                        <Form.Select className='input_chico' name="estado" value={formValues.estado} onChange={handleChange}>
                            <option> </option>
                            <option value="1">Abierto</option>
                            <option value="2">Cerrado</option>
                            <option value="3">En curso</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='d-flex flex-row primer_input' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Tipo</Form.Label>
                        <Form.Select className='input_chico' name="tipo" value={formValues.tipo} onChange={handleChange}>
                            <option> </option>
                            <option value="1">Consulta</option>
                            <option value="2">Incidencia</option>
                        </Form.Select>
                    </Form.Group>
                </div>

                <div className="d-flex flex-row justify-content-evenly">
                    <Form.Group className='d-flex flex-row primer_input' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Severidad</Form.Label>
                        <Form.Select className='input_chico' name="severidad" value={formValues.severidad} onChange={handleChange}>
                            <option> </option>
                            <option value="1">Alta</option>
                            <option value="2">Media</option>
                            <option value="3">Baja</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='d-flex flex-row primer_input' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Cliente</Form.Label>
                        <Form.Select className='input_chico' name="cliente" value={formValues.cliente} onChange={handleChange}>
                            <option> </option>
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
                        <option> </option>

                        {resources.map((resource:any) =>(
                            <option value={resource.legajo}>{resource.Nombre + ' ' + resource.Apellido}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                    <Form.Group className='d-flex flex-row' controlId="floatingSelect">
                        <Form.Label className='etiqueta'>Tarea</Form.Label>
                        <Form.Select className='input_grande' name="tareas" value={formValues.tareas} onChange={handleChange}>
                            <option> </option>
                            {tareas.map((tarea:any) =>(
                                <option value={tarea.idTarea}>{tarea.nombre}</option>
                            ))}
                        </Form.Select>
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

                    <Button className='btn btn-dark' type="submit">
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