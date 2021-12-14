import { useInterval } from 'hooks/useInterval';
import React, { useEffect, useState } from 'react'

const HoursButtons = (props:any) => {
    const {minutes , seconds, hours} = props
    const [seconds_, setSeconds] = useState(seconds)
    const [minutes_, setMinutes] = useState(minutes)
    const [hours_, setHours] = useState(hours)

    useInterval(() => {
        setSeconds(seconds_ + 1);
      }, 1000);
    
    useEffect(() => {
        if(seconds_ > 59){
            setMinutes((m: number) => m + 1)
            setSeconds(0)
        }
    }, [seconds_])
    
    useEffect(() => {
        if(minutes_ > 59){
            setHours((h: number) => h + 1)
            setMinutes(0)
        }
    }, [minutes_])

    const time = ` ${hours_}:${minutes_}:${seconds_}`
    return (
        <div>
            <div className='timer'>
                <p>{time}</p>
            </div>
        </div>
    )
}

export default HoursButtons
