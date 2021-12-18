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
import { IconButton, Modal } from '@mui/material';
import AddTaskToHoursModal from 'components/AddTaskToHoursModal';
import { onHoursGet } from 'redux_folder/actions/hours.actions';
import { useDispatch } from 'react-redux';
import useTypedSelector from 'hooks/useTypedSelector';
import { format } from 'date-fns';


const HoursView = (props:any) => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch()
    const creationSucceeded = useTypedSelector((state) => state.hours.creationSucceeded)
    useEffect(() => {
        if(creationSucceeded){
            dispatch(onHoursGet({day: format(date,'yyyy-MM-dd'), user_id: '102889'}))  
        }
    }, [creationSucceeded,date, dispatch])

    useEffect(() => {
        dispatch(onHoursGet({day: format(date,'yyyy-MM-dd'), user_id: '102889'}))
    }, [date,dispatch])

    const hours = useTypedSelector((state) => state.hours.hours)

    useEffect(() => {
        //dispatch(onGetTasksByIds(hours.map((hour) => hour.id)))
    }, [hours])

    const onSearchByDate =() =>{
        dispatch(onHoursGet({day: format(date,'yyyy-MM-dd'), user_id: '102889'}))
    }

    
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
                    <IconButton style={{width: 40, height: 40, alignSelf:'center'}} onClick={() => onSearchByDate()}>
                        <ArrowForwardIosIcon  />
                    </IconButton>
                    
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
                <AddTaskToHoursModal date={date } handleClose={handleClose}/>
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
