import { List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import React from 'react'
import './index.css';
import {useNavigate} from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const goTo = (path:string) => {
        navigate(path);
    }
      
    return (
    <List
        sx={{ width: 175, maxWidth: 360, bgcolor: 'background.paper', borderColor: 'black', borderRadius: 2, borderWidth: 50 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
    >

        <ListItemButton onClick={() => goTo("/")}>
            <ListItemText primary="Home" />
        </ListItemButton>  
        
        <ListItemButton>
            <ListItemText primary="Tasks" />
        </ListItemButton>      

        <ListItemButton onClick={() => goTo("/hours")}>
            <ListItemText primary="Hours" />
        </ListItemButton>
        
        <ListItemButton onClick={() => goTo("/soporte")}>
            <ListItemText primary="Soporte" />
        </ListItemButton>
    </List>
    );
}

export default Sidebar;
