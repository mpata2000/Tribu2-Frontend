import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Alert, Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography  } from '@mui/material'
import { useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import { format, hoursToMilliseconds } from 'date-fns';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { onHoursEdit } from 'redux_folder/actions/hours.actions';

const EditHoursModal = (props: any) => {
    const {hour, handleClose, date} = props;
    const dispatch = useDispatch()

    const {
        handleSubmit, control, formState: { errors },
      } = useForm();

    useEffect(() => {
    }, [])
    
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
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
        dispatch(onHoursEdit(data))
    }
    return (
        <Box sx={style}>
            <Typography id="title" variant="h6" component="h2">
                Aca poner el nombre de la tarea
            </Typography>
            <form onSubmit={handleSubmit(onSubmit_)} style={{display: 'flex', flexDirection:'column', justifyContent:'center'}}>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => {
                    return(
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date"
                                value={date}
                                onChange={(newValue) => onChange(format(newValue, 'yyyy-MM-dd'))}
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
                            <TextField id="note" defaultValue={hour.note} label='Note' multiline rows={4} variant="outlined" onChange={onChange}/>
                        </FormControl>
                    )}}
                    name="note"
                />
                <div style={{display: 'flex' , justifyContent: 'center'}}>
                            
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => {
                            return (
                                <>
                                    <TextField id="hours"  inputProps={{style: {textAlign: 'center', width: 70}}} defaultValue={hour.hours} placeholder='00'  variant="standard" onChange={onChange}/>
                                </>
                            )}}
                        name="hours"
                        rules={{pattern: /^((?:[0-9]|1[0-9]|2[0-3])(?:.\d{1,2})?|23(?:.00?)?)$/}}
                    />
                    <p style={{alignSelf: 'center', margin: 10}}>:</p>
                        
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => {
                            return (
                                <>
                                    <TextField id="minutes"  inputProps={{style: {textAlign: 'center', width: 70}}} defaultValue={hour.minutes} placeholder='00'  variant="standard" onChange={onChange}/>
                                </>
                                )}}
                        name="minutes"
                        rules={{pattern: /^((?:[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])(?:.\d{1,2})?|59(?:.00?)?)$/}}
                    />
                    <p style={{alignSelf: 'center', margin: 10}}>:</p>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => {
                            return (
                                <>
                                    <TextField id="seconds"  inputProps={{style: {textAlign: 'center', width: 70}}} defaultValue={hour.seconds} placeholder='00'  variant="standard" onChange={onChange}/>
                                </>
                                )}}
                        name="seconds"
                        rules={{pattern: /^((?:[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])(?:.\d{1,2})?|59(?:.00?)?)$/ }}
                    />
                            
                </div>  

                <Button style={{margin:'10px 0px',right: '0px', bottom:'0px', alignSelf: 'flex-end'}} endIcon={<EditIcon/>} variant="contained" onClick={handleSubmit(onSubmit_)}>
                    Edit
                </Button>
                </form>
                {errors?.hours?.type === 'pattern' && <p style={{color: 'red', fontSize: 10}}>Please enter a valid number</p>}
                {errors?.minutes?.type === 'pattern' && <p style={{color: 'red', fontSize: 10}}>Please enter a valid number</p>}
                {errors?.seconds?.type === 'pattern' && <p style={{color: 'red', fontSize: 10}}>Please enter a valid number</p>}
            </Box>
    )
}

export default EditHoursModal
