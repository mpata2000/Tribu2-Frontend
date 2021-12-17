import { Box, Typography } from '@mui/material';
import { format } from 'date-fns';
import React from 'react'
import './index.css'

const AddTaskToHoursModal = (props: any) => {

    const {date} = props;

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return(
        <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    New time entry for {format(date,'eeee MM/dd/yyyy')}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
                </Box>
    )
}

export default AddTaskToHoursModal;