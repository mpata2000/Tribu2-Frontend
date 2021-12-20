import { useState } from "react";

import Button from 'components/Button/Button';
import { Box, FormControl, Input, InputLabel, MenuItem, Select } from '@mui/material';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";

const TareasForm = (props: any) => {
    const [enteredNombre, setEnteredNombre] = useState('');
    const [enteredDescripcion, setEnteredDescripcion] = useState('');
    const [enteredIdLegajoEmpleado, setEnteredIdLegajoEmpleado] = useState(0);
    const [enteredFechaInicioReal, setEnteredFechaInicioReal] = useState('');
    const [enteredFechaFinalizacionReal, setEnteredFechaFinalizacionReal] = useState('');
    const [enteredHorasEstimadas, setenteredHorasEstimadas] = useState(0);
    const [enteredHorasTrabajadas, setEnteredHorasTrabajadas] = useState(0);
    const [enteredIdTicket, setEnteredIdTicket] = useState(0);
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
                debugger;
                const tareaData = {
                    nombre: enteredNombre,
                    idProyecto: {idProyecto: 1},//harcodeado
                    descripcion: enteredDescripcion,
                    fechaInicioReal: enteredFechaInicioReal,
                    fechaFinalizacionReal: enteredFechaFinalizacionReal,
                    horasEstimadas: enteredHorasEstimadas,
                    idTicket: enteredIdTicket,
                    prioridad: enteredPrioridad,
                    estado: enteredEstado
                }
                props.onSave(tareaData);
                setEnteredNombre('');
                setEnteredDescripcion('');
                setEnteredFechaInicioReal('');
                setEnteredFechaFinalizacionReal('');
                setenteredHorasEstimadas(0);
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
        setEnteredFechaFinalizacionReal(val);
    };

    const horasChangeHandler = (event) => {
        let val = parseInt(event.target.value);
        setenteredHorasEstimadas(val);
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
            <Dialog header={'Crear Tarea'} visible={props.visible} style={{ width: '400px' }} footer={footer} modal={true} onHide={() => props.setVisible(false)}>
                <form id="proyecto-form" style={{ width: '100%' }}>
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
                    <label htmlFor="fechaInicioReal">Fecha Inicio</label>
                    <span className="p-float-label">
                        <Input type='date' data-data-format='YYYY-MM-DD' value={enteredFechaInicioReal} onChange={fechaInicioRealChangeHandler} />
                    </span>
                    <br />
                    <label htmlFor="fechaFinalizacionReal">Fecha Finalización</label>
                    <span className="p-float-label">
                        <Input type='date' data-data-format='YYYY-MM-DD' value={enteredFechaFinalizacionReal} onChange={fechaFinalizacionRealChangeHandler} />
                    </span>
                    <br />
                    <span className="p-float-label">
                        <InputText type={'number'} value={enteredHorasEstimadas} style={{ width: '100%' }} id="horasEstimadas" onKeyPress={horasChangeHandler} onInput={horasChangeHandler} />
                        <label htmlFor="HorasEstimadas">Horas estimadas</label>
                    </span>
                    <br />
                    <span className="p-float-label">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id='prioridad'>Prioridad</InputLabel>
                                <Select labelId='prioridad' id="prioridades" label='Prioridad' onChange={prioridadChangeHandler} value={enteredPrioridad}
                                >
                                    <MenuItem value={'alta'}>Alta</MenuItem>
                                    <MenuItem value={'media'}>Media</MenuItem>
                                    <MenuItem value={'baja'}>Baja</MenuItem>
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
                                    <MenuItem value={'no iniciada'}>No iniciada</MenuItem>
                                    <MenuItem value={'iniciada'}>Iniciada</MenuItem>
                                    <MenuItem value={'finalizada'}>Finalizada</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </span>
                </form>
            </Dialog>
        </div>
    );
}

export default TareasForm;