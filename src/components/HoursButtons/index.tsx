import { useInterval } from 'hooks/useInterval';
import React, { useEffect, useState } from 'react'
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import './index.css'
import { useDispatch } from 'react-redux';
import { Button, IconButton } from '@mui/material';

const HoursButtons = (props:any) => {
    const {hour} = props
    const [seconds, setSeconds] = useState(hour.seconds)
    const [minutes, setMinutes] = useState(hour.minutes)
    const [hours, setHours] = useState(hour.hours)

    const [pause, setPause] = useState(true);
    const [stop, setStop] = useState(true);
    const [play, setPlay] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if(stop){
            //dispatch(onUpdateHours())
            setPause(true)
        }
    }, [stop])

    useEffect(() => {
        if(play){
            setStop(false);
            setPause(false)
        }
    }, [play])

    useEffect(() => {
        if(pause){
            setPlay(false)
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

    const extraSecondsCero = (seconds < 10) ? '0' : '';
    const extraMinutesCero = (minutes < 10) ? '0' : '';
    const extraHoursCero = (hours < 10) ? '0' : '';
    
    const time = ` ${extraHoursCero}${hours}:${extraMinutesCero}${minutes}:${extraSecondsCero}${seconds}`
    return (
        <div className='container2'>
            <div className='timer'>
                <p className='time'>{time}</p>
            </div>
            <div className='rowDiv2'>
                <IconButton onClick={() => setPause(true)}>
                    <PauseCircleIcon  style={{color: (pause && !stop) ? 'darkcyan' : 'black' }}/>
                </IconButton>
                <IconButton onClick={() => setPlay(true)}>
                    <PlayCircleIcon style={{color: (play) ? 'darkcyan' : 'black' }}/>
                </IconButton>
                <IconButton onClick={() => setStop(true)}>
                    <StopCircleIcon style={{color: 'black'}} />
                </IconButton>
            </div>
        </div>
    )
}

export default HoursButtons
