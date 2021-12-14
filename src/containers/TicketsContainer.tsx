import React from 'react'
import TicketsView from 'views/Soporte/Tickets'
import {useDispatch} from 'react-redux'
import { onTicketsGetAll } from 'redux_folder/actions/tickets.actions';
import useTypedSelector from 'hooks/useTypedSelector';

const TicketsContainer = () => {


    const dispatch = useDispatch();

    const tickets = useTypedSelector((state) => state.tickets.tickets);
    console.log(tickets);

    const onGetTickets = () => {
        dispatch(onTicketsGetAll());
        console.log("click")
    }

    return (
        <TicketsView tickets={tickets} />
    )
}

export default TicketsContainer