import React from 'react'
import SoporteView from 'views/Soporte'
import {useDispatch} from 'react-redux'
import { onTicketsGetAll } from 'redux_folder/actions/tickets.actions';
import useTypedSelector from 'hooks/useTypedSelector';

const SoporteContainer = () => {
    
    
    const dispatch = useDispatch();

    const tickets = useTypedSelector((state) => state.tickets.tickets);
    console.log(tickets);

    const onGetTickets = () => {
        dispatch(onTicketsGetAll());
        console.log("click")
    }
    return (
        <SoporteView onGetTickets={onGetTickets} tickets={tickets}/>
    )
}

export default SoporteContainer
