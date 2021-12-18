import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import Button from 'components/Button/Button';
import { Box, FormControl, Input, InputLabel, MenuItem, Select } from '@mui/material';

const ProjectEditForm = (props: any) => {

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
                props.onEdit();
            }} />
        </div>
    );

    const nombreChangeHandler = (event) => {
        let val = event.target.value;
        props.onSetEditedProject(() => {
            let proyecto = Object.assign({}, props.projectSelected);
            proyecto.nombre = val;
            return { proyecto };
        })
    }
    const descripcionChangeHandler = (event) => {
        let val = event.target.value;
        // setEnteredDescripcion(val);
        props.onSetEditedProject((prevProject: { proyecto: any; }) => {
            let proyecto = Object.assign({}, props.projectSelected);
            proyecto.descripcion = val;
            return { proyecto };
        })
    }
    const fechaInicioRealChangeHandler = (event) => {
        let val = event.target.value.toString();
        // setEnteredFechaInicioReal(val);
        props.onSetEditedProject((prevProject: { proyecto: any; }) => {
            let proyecto = Object.assign({}, props.projectSelected);
            proyecto.fechaInicioReal = val;
            return { proyecto };
        })
    };
    const fechaFinalizacionRealChangeHandler = (event) => {
        let val = event.target.value.toString();
        // setEnteredFechaFinalReal(val);
        props.onSetEditedProject((prevProject: { proyecto: any; }) => {
            let proyecto = Object.assign({}, props.projectSelected);
            proyecto.fechaFinalizacionReal = val;
            return { proyecto };
        })
    };
    const fechaInicionEstimadoChangeHandler = (event) => {
        let val = event.target.value.toString();
        // setEnteredFechaInicioEstimada(val);
        props.onSetEditedProject((prevProject: { proyecto: any; }) => {
            let proyecto = Object.assign({}, props.projectSelected);
            proyecto.fechaInicioEstimada = val;
            return { proyecto };
        })
    };
    const fechaFinalizacionEstimadoChangeHandler = (event) => {
        let val = event.target.value.toString();
        // setEnteredFechaFinalEstimada(val);
        props.onSetEditedProject((prevProject: { proyecto: any; }) => {
            let proyecto = Object.assign({}, props.projectSelected);
            proyecto.fechaFinalizacionEstimada = val;
            return { proyecto };
        })
    };
    const fechaEntregaChangeHandler = (event) => {
        let val = event.target.value.toString();
        // setEnteredFechaEntrega(val);
        props.onSetEditedProject((prevProject: { proyecto: any; }) => {
            let proyecto = Object.assign({}, props.projectSelected);
            proyecto.fechaEntregaComunicadaACliente = val;
            return { proyecto };
        })
    };
    const horasChangeHandler = (event) => {
        let val = parseInt(event.target.value);
        // setEnteredHoras(val);
        props.onSetEditedProject((prevProject: { proyecto: any; }) => {
            let proyecto = Object.assign({}, props.projectSelected);
            proyecto.fechaHorasEstimadas = val;
            return { proyecto };
        })
    }
    const estadoChangeHandler = (event) => {
        let val = event.target.value;
        // setEnteredEstado(val);
        props.onSetEditedProject((prevProject: { proyecto: any; }) => {
            let proyecto = Object.assign({}, props.projectSelected);
            proyecto.estado = val;
            return { proyecto };
        })
    };

    const prioridadChangeHandler = (event) => {
        let val = event.target.value;
        // setEnteredPrioridad(val);
        props.onSetEditedProject((prevProject: { proyecto: any; }) => {
            let proyecto = Object.assign({}, props.projectSelected);
            proyecto.prioridad = val;
            return { proyecto };
        })
    };

    return (
        <div>
            <Dialog header={'Editar Proyecto: ' + props.projectSelected.idProyecto} visible={props.visible} style={{ width: '400px' }} footer={footer} modal={true} onHide={() => props.setVisible(false)}>
                <form id="proyecto-form">
                    <span className="p-float-label">
                        <label htmlFor="nombre">Nombre</label>
                        <Input type='text' name='nombre' value={props.projectSelected.nombre} style={{ width: '100%' }} id="nombre" onChange={nombreChangeHandler} />
                    </span>
                    <br />
                    <span className="p-float-label">
                        <label htmlFor="descripcion">Descripción</label>
                        <Input type='text' value={props.projectSelected.descripcion} style={{ width: '100%' }} id="descripcion" onChange={descripcionChangeHandler} />
                    </span>
                    <br />
                    <label htmlFor="fechaInicioReal">Fecha Inicio Real</label>
                    <span className="p-float-label">
                        <Input type='date' data-data-format='YYYY-MM-DD' value={props.projectSelected.fechaInicioReal} onChange={fechaInicioRealChangeHandler} />
                    </span>
                    <br />
                    <label htmlFor="fechaFinalizacionReal">Fecha Finalización Real</label>
                    <span className="p-float-label">
                        <Input type='date' data-data-format='YYYY-MM-DD' value={props.projectSelected.fechaFinalizacionReal} onChange={fechaFinalizacionRealChangeHandler} />
                    </span>
                    <br />
                    <label htmlFor="fechaInicioEstimada">Fecha Inicio Estimada</label>
                    <span className="p-float-label">
                        <Input type='date' data-data-format='YYYY-MM-DD' value={props.projectSelected.fechaInicioEstimada} onChange={fechaInicionEstimadoChangeHandler} />
                    </span>
                    <br />
                    <label htmlFor="fechaFinalizacionEstimada">Fecha Finalización Estimada</label>
                    <span className="p-float-label">
                        <Input type='date' data-data-format='YYYY-MM-DD' value={props.projectSelected.fechaFinaliazacionEstimada} onChange={fechaFinalizacionEstimadoChangeHandler} />
                    </span>
                    <br />
                    <label htmlFor="fechaEntregaComunicadaACliente">Fecha de Entrega</label>
                    <span className="p-float-label">
                        <Input type='date' data-data-format='YYYY-MM-DD' value={props.projectSelected.fechaEntregaComunicadaACliente} onChange={fechaEntregaChangeHandler} />
                    </span>
                    <br />
                    <span className="p-float-label">
                        <InputText type={'number'} value={props.projectSelected.horasEstimadas} style={{ width: '100%' }} id="horasEstimadas" onKeyPress={horasChangeHandler} onInput={horasChangeHandler} />
                        <label htmlFor="HorasEstimadas">Horas estimadas</label>
                    </span>
                    <br />
                    <span className="p-float-label">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id='prioridad'>Prioridad</InputLabel>
                                <Select labelId='prioridad' id="prioridades" label='Prioridad' onChange={prioridadChangeHandler} value={props.projectSelected.prioridad}
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
                                <Select labelId='Estado' id="estados" label='Estado' onChange={estadoChangeHandler} value={props.projectSelected.estado}
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
    );

}

export default ProjectEditForm;