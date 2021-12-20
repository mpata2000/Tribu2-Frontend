import React, { useState } from 'react'

import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import Button from 'components/Button/Button';
import { Box, FormControl, Input, InputLabel, MenuItem, Select } from '@mui/material';

const ProjectForm = (props: any) => {
    const [enteredNombre, setEnteredNombre] = useState('');
    const [enteredDescripcion, setEnteredDescripcion] = useState('');
    const [enteredFechaInicioReal, setEnteredFechaInicioReal] = useState('');
    const [enteredFechaInicioEstimada, setEnteredFechaInicioEstimada] = useState('');
    const [enteredFechaFinalReal, setEnteredFechaFinalReal] = useState('');
    const [enteredFechaFinalEstimada, setEnteredFechaFinalEstimada] = useState('');
    const [enteredFechaEntrega, setEnteredFechaEntrega] = useState('');
    const [enteredHoras, setEnteredHoras] = useState(0);
    const [enteredEstado, setEnteredEstado] = useState('');
    const [enteredPrioridad, setEnteredPrioridad] = useState('');

    const estados = [
        { value: 'no iniciado', label: 'no iniciado' },
        { value: 'iniciado', label: 'iniciado' },
        { value: 'finalizado', label: 'finalizado' }
    ]

    const prioridades = [
        { value: 'alta', label: 'alta' },
        { value: 'media', label: 'media' },
        { value: 'baja', label: 'baja' }
    ]

    const footer = (
        <div>
            <Button text="Guardar" icon="pi pi-check" onClick={() => {
                const projectData = {
                    nombre: enteredNombre,
                    descripcion: enteredDescripcion,
                    fechaInicioReal: enteredFechaInicioReal,
                    fechaFinalizacionReal: enteredFechaFinalReal,
                    fechaInicioEstimada: enteredFechaInicioEstimada,
                    fechaFinalizacionEstimada: enteredFechaFinalEstimada,
                    fechaEntregaComunicadaACliente: enteredFechaEntrega,
                    horasEstimadas: enteredHoras,
                    prioridad: enteredPrioridad,
                    estado: enteredEstado
                }
                props.onSave(projectData);
                setEnteredNombre('');
                setEnteredDescripcion('');
                setEnteredFechaInicioReal('');
                setEnteredFechaInicioEstimada('');
                setEnteredFechaFinalReal('');
                setEnteredFechaFinalEstimada('');
                setEnteredFechaEntrega('');
                setEnteredHoras(0);
                setEnteredEstado('');
                setEnteredPrioridad('');
            }} />
        </div>
    );

    const nombreChangeHandler = (event) => {
        let val = event.target.value;
        setEnteredNombre(val);
    }
    const descripcionChangeHandler = (event) => {
        let val = event.target.value;
        setEnteredDescripcion(val);
    }
    const fechaInicioRealChangeHandler = (event) => {
        let val = event.target.value.toString();
        setEnteredFechaInicioReal(val);
    };
    const fechaFinalizacionRealChangeHandler = (event) => {
        let val = event.target.value.toString();
        setEnteredFechaFinalReal(val);
    };
    const fechaInicionEstimadoChangeHandler = (event) => {
        let val = event.target.value.toString();
        setEnteredFechaInicioEstimada(val);
    };
    const fechaFinalizacionEstimadoChangeHandler = (event) => {
        let val = event.target.value.toString();
        setEnteredFechaFinalEstimada(val);
    };
    const fechaEntregaChangeHandler = (event) => {
        let val = event.target.value.toString();
        setEnteredFechaEntrega(val);
    };
    const horasChangeHandler = (event) => {
        let val = parseInt(event.target.value);
        setEnteredHoras(val);
    }
    const estadoChangeHandler = (event) => {
        let val = event.target.value;
        setEnteredEstado(val);
    };
    const prioridadChangeHandler = (event) => {
        let val = event.target.value;
        setEnteredPrioridad(val);
    };

    return (
        <div>
            <Dialog header={'Crear Proyecto'} visible={props.visible} style={{ width: '400px' }} footer={footer} modal={true} onHide={() => props.setVisible(false)}>
                <form id="proyecto-form"  style={{ width: '100%' }}>
                    <span className="p-float-label">
                        <label htmlFor="nombre">Nombre</label>
                        <Input type='text' name='nombre' value={enteredNombre} style={{ width: '100%' }} id="nombre" onChange={nombreChangeHandler} />
                    </span>
                    <br />
                    <span className="p-float-label">
                        <label htmlFor="descripcion">Descripción</label>
                        <Input type='text' value={enteredDescripcion} style={{ width: '100%' }} id="descripcion" onChange={descripcionChangeHandler} />
                    </span>
                    <br />
                    <label htmlFor="fechaInicioReal">Fecha Inicio Real</label>
                    <span className="p-float-label">
                        <Input type='date' data-data-format='YYYY-MM-DD' value={enteredFechaInicioReal} onChange={fechaInicioRealChangeHandler} />
                    </span>
                    <br />
                    <label htmlFor="fechaFinalizacionReal">Fecha Finalización Real</label>
                    <span className="p-float-label">
                        <Input type='date' data-data-format='YYYY-MM-DD' value={enteredFechaFinalReal} onChange={fechaFinalizacionRealChangeHandler} />
                    </span>
                    <br />
                    <label htmlFor="fechaInicioEstimada">Fecha Inicio Estimada</label>
                    <span className="p-float-label">
                        <Input type='date' data-data-format='YYYY-MM-DD' value={enteredFechaInicioEstimada} onChange={fechaInicionEstimadoChangeHandler} />
                    </span>
                    <br />
                    <label htmlFor="fechaFinalizacionEstimada">Fecha Finalización Estimada</label>
                    <span className="p-float-label">
                        <Input type='date' data-data-format='YYYY-MM-DD' value={enteredFechaFinalEstimada} onChange={fechaFinalizacionEstimadoChangeHandler} />
                    </span>
                    <br />
                    <label htmlFor="fechaEntregaComunicadaACliente">Fecha de Entrega</label>
                    <span className="p-float-label">
                        <Input type='date' data-data-format='YYYY-MM-DD' value={enteredFechaEntrega} onChange={fechaEntregaChangeHandler} />
                    </span>
                    <br />
                    <span className="p-float-label">
                        <InputText type={'number'} value={enteredHoras} style={{ width: '100%' }} id="horasEstimadas" onKeyPress={horasChangeHandler} onInput={horasChangeHandler} />
                        <label htmlFor="HorasEstimadas">Horas estimadas</label>
                    </span>
                    <br />
                    <span className="p-float-label">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id='prioridad'>Prioridad</InputLabel>
                                <Select labelId='prioridad' id="prioridades" label='Prioridad' onChange={prioridadChangeHandler} value={enteredPrioridad}
                                >
                                    <MenuItem value={'Urgente!'}>Urgente!</MenuItem>
                                    <MenuItem value={'Importante'}>Importante</MenuItem>
                                    <MenuItem value={'Media'}>Media</MenuItem>
                                    <MenuItem value={'Baja'}>Baja</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </span>
                    <br />
                    <span className="p-float-label">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id='estado'>Estado</InputLabel>
                                <Select labelId='Estado' id="estados" label='Estado' onChange={estadoChangeHandler} value={enteredEstado}
                                >
                                    <MenuItem value={'No iniciada'}>No iniciada</MenuItem>
                                    <MenuItem value={'En desarrollo'}>En desarrollo</MenuItem>
                                    <MenuItem value={'En prueba'}>En prueba</MenuItem>
                                    <MenuItem value={'Completada'}>Completada</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </span>
                </form>
            </Dialog>
        </div>
    )
}

export default ProjectForm;