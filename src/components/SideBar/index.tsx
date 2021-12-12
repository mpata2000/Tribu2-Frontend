import { List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import React from 'react'
import './index.css';
const Sidebar = () => {
      
    return (
    <List
        sx={{ width: 175, maxWidth: 360, bgcolor: 'background.paper', borderColor: 'black', borderRadius: 2, borderWidth: 50 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
    >
        <ListItemButton>
        <ListItemText primary="Tasks" />
        </ListItemButton>
        <ListItemButton>
        <ListItemText primary="Hours" />
        </ListItemButton>
    </List>
    );
}

export default Sidebar;
