import React from 'react'
import SoporteView from 'views/Soporte'
import {useDispatch} from 'react-redux'
import { onTicketsGetAll } from 'redux_folder/actions/tickets.actions';
import useTypedSelector from 'hooks/useTypedSelector';

const SoporteContainer = () => {
    
    
    const dispatch = useDispatch();

    const onGetTickets = () => {
        dispatch(onTicketsGetAll("Siu Guarani", "1.0.0"));
    }
    return (<SoporteView onGetTickets={onGetTickets}/>);
}

export default SoporteContainer
