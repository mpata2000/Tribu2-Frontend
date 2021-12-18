import { Alert, Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { format } from 'date-fns';
import useTypedSelector from 'hooks/useTypedSelector';
import React from 'react'
import './index.css'
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { onCreateHours } from 'redux_folder/actions/hours.actions';

const AddTaskToHoursModal = (props: any) => {

    const {date} = props;

    const {
        handleSubmit, control, formState: { errors },
      } = useForm();
    
    const dispatch = useDispatch()
    const tasks = [
        {
          "idTarea": 'XD PATA',
          "idProyecto": {
            "idProyecto": 0,
            "idLegajo": 0,
            "nombre": "Proyecto 1",
            "descripcion": "string",
            "fechaInicioReal": "2021-12-17",
            "fechaFinalizacionReal": "2021-12-17",
            "fechaInicioEstimada": "2021-12-17",
            "fechaFinalizacionEstimada": "2021-12-17",
            "fechaEntregaComunicadaACliente": "2021-12-17",
            "horasEstimadas": 0,
            "prioridad": "string",
            "estado": "string"
          },
          "idLegajo": 0,
          "nombre": "Tarea 1",
          "descripcion": "string",
          "fechaInicioReal": "2021-12-17",
          "fechaFinalizacionReal": "2021-12-17",
          "horasEstimadas": 0,
          "horasTrabajadas": 0,
          "idTicket": 0,
          "prioridad": "string",
          "estado": "string"
        }
      ]
      
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    
    const onSubmit = (data:any)=>{
        let data_ = {
            ...data,
            user_id: 102889,
            day: format(date, 'yyyy-MM-dd'),
        }
        if(!data.note){
            data_ = {
                ...data_,
                note: '',
            }
        }

        if(!data.hours){
            data_ = {
                ...data_,
                hours: '0',
            }
        }
        if(!data.minutes){
            data_ = {
                ...data_,
                minutes: '0',
            }
        }
        if(!data.seconds){
            data_ = {
                ...data_,
                seconds: '0',
            }
        }
        dispatch(onCreateHours(data_))
        

    }
    return(
        <Box sx={style}>
                <Typography id="title" variant="h6" component="h2">
                    New time entry for {format(date,'eeee dd/MM/yyyy')}
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection:'column', justifyContent:'center'}}>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => {
                        return (
                            <>
                                <InputLabel id="tasks"> Tasks </InputLabel>
                                <Select
                                    labelId="tasks"
                                    id="tasks"
                                    value={value}
                                    label="Tasks"
                                    onChange={onChange}
                                    style={{minWidth: '80%'}}
                                >
                                    {tasks.map((task) => <MenuItem value={task.idTarea}> {task.nombre} from {task.idProyecto.nombre}</MenuItem>)}
                                </Select>
                            </>
                        )}}
                    name="task_id"
                    rules={{ required: true }}
                />
                {errors?.tasks?.type === 'required' && <p style={{color: 'red', fontSize: 10}}>Required</p>}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => {
                        return (
                            <>
                                <InputLabel id="note"/>
                                <TextField id="note"  placeholder='Note'  variant="outlined" onChange={onChange}/>
                            </>
                        )}}
                    name="note"
                />
                <div style={{display: 'flex' , justifyContent: 'center'}}>
                            
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => {
                            return (
                                <>
                                    <InputLabel id="hours"/>
                                    <TextField id="hours"  placeholder='00'  variant="standard" onChange={onChange}/>
                                </>
                            )}}
                        name="hours"
                        rules={{pattern: /[0-9]*/}}
                    />
                    <p style={{alignSelf: 'center', margin: 10}}>:</p>
                        
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => {
                            return (
                                <>
                                    <InputLabel id="minutes"/>
                                    <TextField id="minutes"  placeholder='00'  variant="standard" onChange={onChange}/>
                                </>
                                )}}
                        name="minutes"
                        rules={{pattern: /[0-9]*/}}
                    />
                    <p style={{alignSelf: 'center', margin: 10}}>:</p>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => {
                            return (
                                <>
                                    <InputLabel id="seconds"/>
                                    <TextField id="seconds"  placeholder='00'  variant="standard" onChange={onChange}/>
                                </>
                                )}}
                        name="seconds"
                        rules={{pattern: /[0-9]*/}}
                    />
                            
                </div>  
                {errors?.hours?.type === 'pattern' && <p style={{color: 'red', fontSize: 10}}>Pls enter a number</p>}
                {errors?.minutes?.type === 'pattern' && <p style={{color: 'red', fontSize: 10}}>Pls enter a number</p>}
                {errors?.seconds?.type === 'pattern' && <p style={{color: 'red', fontSize: 10}}>Pls enter a number</p>}
                <input type="submit" />
                </form>    
            </Box>
    )
}

export default AddTaskToHoursModal;