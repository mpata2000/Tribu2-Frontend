import React from 'react'
import HoursView from 'views/Hours';

const HoursContainer = () => {
    
    const hours = [
        {
            name: 'Task 1',
            description: 'Description 1',
            minutes: 0,
            hours: 0,
            seconds: 0,
        },
        {
            
            name: 'Task 2',
            description: 'Description 2',
            minutes: 58,
            hours: 0,
            seconds: 55,
        }
    ]
    return (
        <HoursView hours={hours}/>    
    )
}

export default HoursContainer;
