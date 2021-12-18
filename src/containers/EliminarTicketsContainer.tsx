import React from 'react';
import FormularioEliminarTicketView from 'views/Soporte/FormularioEliminarTicket';
import {useDispatch} from 'react-redux';
// import { onTicketsGetAll } from 'redux_folder/actions/tickets.actions';
import useTypedSelector from 'hooks/useTypedSelector';

const EliminarTicketsContainer = () => {



    const ticket_state = useTypedSelector((state) => state.tickets);

    return (
        <FormularioEliminarTicketView />
    )
}

export default EliminarTicketsContainer