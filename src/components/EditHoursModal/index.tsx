import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Alert, Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Tooltip, Typography  } from '@mui/material'
import { useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import { format, hoursToMilliseconds } from 'date-fns';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { onHoursDelete, onHoursEdit, onHoursGet } from 'redux_folder/actions/hours.actions';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const EditHoursModal = (props: any) => {
    const {hour, handleClose, date} = props;
    const dispatch = useDispatch()

    const [dateViewer, setDateViewer] = useState(date)
    const {
        handleSubmit, control, formState: { errors },
      } = useForm();

    useEffect(() => {
    }, [])
    
    const style = {
        position: 'absolute' as 'absolute',
        top: '51%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: '2px 2px darkcyan',
        p: 4,
      };

    const onSubmit_ = (data:any) =>{
        data = {
            ...data,
            id: hour.id,
        }
        dispatch(onHoursEdit(data));
        handleClose(true);
    }

    const handleDelete = () => {
        console.log(hour)
        dispatch(onHoursDelete(hour.id));
        handleClose(true);
    }
    return (
        <Box sx={style}>
            <Typography id="title" variant="h6" component="h2">
                Aca poner el nombre de la tarea
            </Typography>
            <form onSubmit={handleSubmit(onSubmit_)} style={{display: 'flex', flexDirection:'column', justifyContent:'center', marginTop: 20}}>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => {
                    return(
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date"
                                value={dateViewer}
                                onChange={(newValue) => {onChange(format(newValue, 'yyyy-MM-dd')); setDateViewer(newValue)}}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    )
                }} 
                name="day"
            />
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => {
                return (
                    <FormControl style={{margin: '40px 0px'}}>
                        <InputLabel id="note"/> 
                        <TextField id="note" inputProps={{ maxLength: 100 }} defaultValue={hour.note} label='Note' multiline rows={4} variant="outlined" onChange={onChange}/>
                    </FormControl>
                        
                    )}}
                    name="note"
                />
                <div style={{display: 'flex' , justifyContent: 'center'}}>
                            
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => {
                            return (
                                <Tooltip title="Hours">
                                    <TextField id="hours"  inputProps={{style: {textAlign: 'center', width: 70}}} defaultValue={hour.hours} placeholder='00'  variant="standard" onChange={onChange}/>
                                </Tooltip>
                                    
                                
                            )}}
                        name="hours"
                        rules={{pattern: /^((?:[0-9]|1[0-9]|2[0-3])(?:.\d{1,2})?|23(?:.00?)?)$/}}
                    />
                    <p style={{alignSelf: 'center', margin: 10}}>:</p>
                        
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => {
                            return (
                                <Tooltip title="Minutes">
                                    <TextField id="minutes"  inputProps={{style: {textAlign: 'center', width: 70}}} defaultValue={hour.minutes} placeholder='00'  variant="standard" onChange={onChange}/>
                                </Tooltip>
                                )}}
                        name="minutes"
                        rules={{pattern: /^((?:[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])(?:.\d{1,2})?|59(?:.00?)?)$/}}
                    />
                    <p style={{alignSelf: 'center', margin: 10}}>:</p>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => {
                            return (
                                <Tooltip title="Seconds">
                                    <TextField id="seconds"  inputProps={{style: {textAlign: 'center', width: 70}}} defaultValue={hour.seconds} placeholder='00'  variant="standard" onChange={onChange}/>
                                </Tooltip>
                                )}}
                        name="seconds"
                        rules={{pattern: /^((?:[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])(?:.\d{1,2})?|59(?:.00?)?)$/ }}
                    />
                            
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop: 30}}>
                    <Button variant="outlined" color="error" startIcon={<DeleteOutlinedIcon />} onClick={handleDelete}>
                        Delete
                    </Button>
                    <Button endIcon={<EditIcon/>} variant="contained" onClick={handleSubmit(onSubmit_)}>
                        Edit
                    </Button>

                </div>
                
                </form>
                {errors?.hours?.type === 'pattern' && <p style={{color: 'red', fontSize: 10}}>Enter a valid number</p>}
                {errors?.minutes?.type === 'pattern' && <p style={{color: 'red', fontSize: 10}}>Enter a valid number</p>}
                {errors?.seconds?.type === 'pattern' && <p style={{color: 'red', fontSize: 10}}>Pls enter a valid number</p>}
            </Box>
    )
}

export default EditHoursModal
