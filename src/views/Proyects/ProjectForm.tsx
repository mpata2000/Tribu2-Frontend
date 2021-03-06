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
        { value: 'No iniciada', label: 'No iniciada' },
        { value: 'En desarrollo', label: 'En desarrollo' },
        { value: 'Completada', label: 'Completada' }
    ]

    const prioridades = [
        { value: 'Urgente!', label: 'Urgente!' },
        { value: 'Importante', label: 'Importante' },
        { value: 'Media', label: 'Media' },
        { value: 'Baja', label: 'Baja' }
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
                debugger;
                console.log(projectData);
                props.setProject(projectData);
                props.onSave(projectData);
                //console.log(projectData)
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

    const fechaInicioRealChangeHandler = (event) => {
        let val = event.target.value.toString();
        setEnteredFechaInicioReal(val);
        // props.setProject((prevProject: { proyecto: any; }) => {
        //     let proyecto = Object.assign({}, props.project);
        //     return { proyecto };
        // })
    };
    const fechaFinalizacionRealChangeHandler = (event) => {
        let val = event.target.value.toString();
        setEnteredFechaFinalReal(val);
        // props.setProject((prevProject: { proyecto: any; }) => {
        //     let proyecto = Object.assign({}, props.project);
        //     proyecto.fechaFinalizacionReal = val;
        //     return { proyecto };
        // })
    };
    const fechaInicionEstimadoChangeHandler = (event) => {
        let val = event.target.value.toString();
        setEnteredFechaInicioEstimada(val);
        // props.setProject((prevProject: { proyecto: any; }) => {
        //     let proyecto = Object.assign({}, props.project);
        //     return { proyecto };
        // })

    };
    const fechaFinalizacionEstimadoChangeHandler = (event) => {
        let val = event.target.value.toString();
        setEnteredFechaFinalEstimada(val);
        // props.setProject((prevProject: { proyecto: any; }) => {
        //     let proyecto = Object.assign({}, props.project);
        //     proyecto.fechaFinalizacionEstimado = val;
        //     return { proyecto };
        // })
        // console.log(props.project);
    };
    const fechaEntregaChangeHandler = (event) => {
        let val = event.target.value.toString();
        setEnteredFechaEntrega(val);
        // props.setProject((prevProject: { proyecto: any; }) => {
        //     let proyecto = Object.assign({}, props.project);
        //     proyecto.fechaEntregaComunicadaACliente = val;
        //     return { proyecto };
        // })
        // console.log(props.project);
    };
    const horasChangeHandler = (event) => {
        let val = parseInt(event.target.value);
        setEnteredHoras(val);
        // props.setProject(() => {
        //     let proyecto = Object.assign({}, props.project);
        //     proyecto.descripcion = val;
        //     console.log(proyecto.horasEstimadas);
        //     return { proyecto };
        // })
    }
    const estadoChangeHandler = (event) => {
        let val = event.target.value;
        setEnteredEstado(val);
        // props.setProject((prevProject: { proyecto: any; }) => {
        //     let proyecto = Object.assign({}, props.project);
        //     proyecto.estado = val;
        //     return { proyecto };
        // })
        // console.log(val);
    };
    const prioridadChangeHandler = (event) => {
        let val = event.target.value;
        setEnteredPrioridad(val);
        // props.setProject((prevProject: { proyecto: any; }) => {
        //     let proyecto = Object.assign({}, props.project);
        //     proyecto.prioridad = val;
        //     return { proyecto };
        // })
        // console.log(val);
    };

    return (
        <div>
            <Dialog header={props.title} visible={props.visible} style={{ width: '400px' }} footer={footer} modal={true} onHide={() => props.setVisible(false)}>
                <form id="proyecto-form">
                    <span className="p-float-label">
                        <label htmlFor="nombre">Nombre</label>
                        <Input type='text' name='nombre' value={enteredNombre} style={{ width: '100%' }} id="nombre" onChange={(e: any) => {
                            let val = e.target.value;
                            setEnteredNombre(val);
                            // props.setProject((prevProject: { proyecto: any; }) => {
                            //     let proyecto = Object.assign({}, props.project);
                            //     proyecto.nombre = val;
                            //     // console.log(proyecto.nombre);
                            //     return { proyecto };
                            // })
                            console.log(enteredNombre);
                        }
                        } />
                    </span>
                    <br />
                    <span className="p-float-label">
                        <label htmlFor="descripcion">Descripci??n</label>
                        <Input type='text' value={enteredDescripcion} style={{ width: '100%' }} id="descripcion" onChange={(e: any) => {
                            let val = e.target.value;
                            setEnteredDescripcion(val);
                            // props.setProject((prevProject: { proyecto: any; }) => {
                            //     let proyecto = Object.assign({}, props.project);
                            //     proyecto.descripcion = val;
                            //    // console.log(proyecto.descripcion);
                            //     return { proyecto };
                            // })
                        }
                        } />
                    </span>
                    <br />
                    <label htmlFor="fechaInicioReal">Fecha Inicio Real</label>
                    <span className="p-float-label">
                        <Input type='date' data-data-format='YYYY-MM-DD' value={enteredFechaInicioReal} onChange={fechaInicioRealChangeHandler} />
                    </span>
                    <br />
                    <label htmlFor="fechaFinalizacionReal">Fecha Finalizaci??n Real</label>
                    <span className="p-float-label">
                        <Input type='date' data-data-format='YYYY-MM-DD' value={enteredFechaFinalReal} onChange={fechaFinalizacionRealChangeHandler} />
                    </span>
                    <br />
                    <label htmlFor="fechaInicioEstimada">Fecha Inicio Estimada</label>
                    <span className="p-float-label">
                        <Input type='date' data-data-format='YYYY-MM-DD' value={enteredFechaInicioEstimada} onChange={fechaInicionEstimadoChangeHandler} />
                    </span>
                    <br />
                    <label htmlFor="fechaFinalizacionEstimada">Fecha Finalizaci??n Estimada</label>
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