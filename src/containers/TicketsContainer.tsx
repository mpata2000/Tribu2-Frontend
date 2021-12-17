import React from 'react'
import TicketsView from 'views/Soporte/Tickets'
import {useDispatch} from 'react-redux'
import { onTicketsGetAll } from 'redux_folder/actions/tickets.actions';
import useTypedSelector from 'hooks/useTypedSelector';

const TicketsContainer = () => {

    const ticket_state = useTypedSelector((state) => state.tickets);

    if(ticket_state.loading){
        return (
            <h2>Loading...</h2>
        )
    }
    return (
        <TicketsView tickets={ticket_state.tickets} />
    )
}

export default TicketsContainer