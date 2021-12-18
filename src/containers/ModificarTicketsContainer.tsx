import React from 'react';
import FormularioModificarTicketView from 'views/Soporte/FormularioModificarTicket';
import {useDispatch} from 'react-redux';
// import { onTicketsGetAll } from 'redux_folder/actions/tickets.actions';
import useTypedSelector from 'hooks/useTypedSelector';

const ModificarTicketsContainer = () => {



    const ticket_state = useTypedSelector((state) => state.tickets);

    return (
        <FormularioModificarTicketView />
    )
}

export default ModificarTicketsContainer