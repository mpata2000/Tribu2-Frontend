import React, { useState } from 'react'
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
import { Modal } from '@mui/material';
import AddTaskToHoursModal from 'components/AddTaskToHoursModal';


const HoursView = (props:any) => {
    const {hours} = props;
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    <ArrowForwardIosIcon style={{margin:10, padding: 5, width: 40, height: 40, alignSelf:'center'}}/>
                </div>
            </div>
            <Button style={{marginLeft: 40}} startIcon={<AddIcon/>} onClick={handleOpen}>
                Add task
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <AddTaskToHoursModal date={date }/>
            </Modal>
            <div className="hoursList">
                <ul className='list'>
                    {hours.map((hour:any) => (
                        <div>
                            <ListItem item={hour}>
                                <HoursButtons hour={hour}/>
                            </ListItem>
                        </div>
                    )) }
                </ul>
            </div>
        </div>
    )
}

export default HoursView
