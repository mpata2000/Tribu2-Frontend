import React, { useEffect, useState } from 'react'
import './index.css';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from 'components/ListItem';
import HoursButtons from 'components/HoursButtons';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { CircularProgress, IconButton, Modal } from '@mui/material';
import AddTaskToHoursModal from 'components/AddTaskToHoursModal';
import { onHoursGet } from 'redux_folder/actions/hours.actions';
import { useDispatch } from 'react-redux';
import useTypedSelector from 'hooks/useTypedSelector';
import { format } from 'date-fns';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { onGetTasksByIds } from 'redux_folder/actions/proyects.actions';



const HoursView = (props:any) => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [timerOn, setTimerOn] = useState(false);

    const dispatch = useDispatch()
    const actionSucceeded = useTypedSelector((state) => state.hours.actionSucceeded)
    const loading = useTypedSelector((state) => state.hours.loading)

    useEffect(() => {
        dispatch(onHoursGet({day:format(date, 'yyyy-MM-dd'), user_id: '106226'}))
    }, [])
    
    useEffect(() => {
        if(actionSucceeded){
            dispatch(onHoursGet({day:format(date, 'yyyy-MM-dd'), user_id: '106226'}))
        }
    }, [actionSucceeded, date, dispatch])

    const hours = useTypedSelector((state) => state.hours.hours)

    useEffect(() => {
        dispatch(onGetTasksByIds(hours.map((hour) => hour.task_id)))
    }, [hours, dispatch])




    const tasks = useTypedSelector((state) => state.proyects.tasks)

    
    return (
        <div className="hoursView">
            <div className="rowDiv">
                <h1 className='title'>
                    Area personal
                </h1>
                <div className="rowDiv">
                    <div className="calendar">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date"
                                value={date}
                                onChange={(newValue) => {if(newValue){setDate(newValue)}}}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    
                </div>
            </div>
            <Button style={{marginLeft: 40}} startIcon={<AddIcon/>} onClick={handleOpen}>
                A??adir entrada
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <AddTaskToHoursModal date={date } handleClose={handleClose}/>
            </Modal>
            
            
            <div className="listBox" >
                {((hours.length === 0) 
                    ? (loading)
                        ? <CircularProgress style={{top: '50%', left: '50%',}}/>
                        :<div style={{display: 'flex', flexDirection: 'column'}}>
                            <AssignmentIcon style={{alignSelf: 'center', width: 100, height: 100, color: 'grey', opacity: '0.5'}} />
                            <p style={{alignSelf: 'center', color: 'grey', fontSize:20, fontFamily:'Courier New, Courier, monospace', fontStyle:'italic', fontWeight:'500'}} >No hay entradas todavia</p> 
                        </div>
                    :<div className="hoursList">
                        <ul className='list'>
                            {hours.map((hour:any) => (
                                <div>
                                    <ListItem item={hour} task={tasks.find((task) => `${task.idTarea}` === hour.task_id)}>
                                        <HoursButtons hour={hour} date={date} timerOn={timerOn} setTimerOn={setTimerOn} task={tasks.find((task) => `${task.idTarea}` === hour.task_id)}/>
                                    </ListItem>
                                </div>
                            )) }
                        </ul>
                    </div>)}
            </div>
        </div>
    )
}

export default HoursView

