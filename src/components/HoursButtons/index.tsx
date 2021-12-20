import { useInterval } from 'hooks/useInterval';
import React, { useEffect, useState } from 'react'
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import './index.css'
import { useDispatch } from 'react-redux';
import { Button, IconButton, Modal } from '@mui/material';
import {BiEdit} from 'react-icons/bi'
import AddTaskToHoursModal from 'components/AddTaskToHoursModal';
import EditHoursModal from 'components/EditHoursModal';
import { onHoursEdit } from 'redux_folder/actions/hours.actions';

const HoursButtons = (props:any) => {
    const {hour, date, timerOn, setTimerOn} = props
    const [seconds, setSeconds] = useState(hour.seconds)
    const [minutes, setMinutes] = useState(hour.minutes)
    const [hours, setHours] = useState(hour.hours)

    const [pause, setPause] = useState(false);
    const [play, setPlay] = useState(false);
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handlePlay = () => {
        if(!timerOn){
            setPlay(true)
            setTimerOn(true)
        }
    }

    const dispatch = useDispatch();

    useEffect(() => {
        if(play){
            setPause(false)
        }
    }, [play])

    useEffect(() => {
        if(pause){
            setPlay(false)
            setTimerOn(false)
            dispatch(onHoursEdit({hours,minutes,seconds, id:hour.id}))
        }
    }, [pause])

    useInterval(() => {
        if (play){
            setSeconds(seconds + 1);
        }
      }, 1000);
    
    useEffect(() => {
        if(seconds > 59){
            setMinutes((m: number) => m + 1)
            setSeconds(0)
        }
    }, [seconds])
    
    useEffect(() => {
        if(minutes > 59){
            setHours((h: number) => h + 1)
            setMinutes(0)
        }
    }, [minutes])

    
    useEffect(() => {
        if(hours >= 24){
            setHours(23)
            setMinutes(59)
            setSeconds(59)
            setPause(true)
        }
    }, [hours])

    const extraSecondsCero = (seconds < 10) ? '0' : '';
    const extraMinutesCero = (minutes < 10) ? '0' : '';
    const extraHoursCero = (hours < 10) ? '0' : '';
    
    const time = ` ${extraHoursCero}${hours}:${extraMinutesCero}${minutes}:${extraSecondsCero}${seconds}`
    return (
        <div className='container2'>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <EditHoursModal hour={hour} handleClose={handleClose} date={date}/>
            </Modal>
            <div className='time'>{time}</div>
            <IconButton style={{alignSelf: 'center'}} onClick={() => {(play) ? setPause(true) : handlePlay()}}>
                    {(play) 
                    ? (<PauseCircleIcon style={{color: 'darkcyan' }}/>) 
                    : <PlayCircleIcon style={{color: 'darkcyan' }}/>}
            </IconButton >
                
            <IconButton style={{alignSelf: 'center'}} onClick={handleOpen}>
                <BiEdit />
            </IconButton>
                
        </div>
    )
}

export default HoursButtons
