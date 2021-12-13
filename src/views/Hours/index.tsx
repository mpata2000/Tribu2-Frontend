import React, { useState } from 'react'
import './index.css';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HoursView = () => {
    const [value, setValue] = useState(null);

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
                                value={value}
                                onChange={(newValue) => {
                                setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <ArrowForwardIosIcon style={{margin:10, padding: 5, width: 40, height: 40, alignSelf:'center'}}/>
                </div>
                

            </div>
        </div>
    )
}

export default HoursView
