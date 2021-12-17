import React from 'react'
import FormularioTicketsView from 'views/Soporte/FormularioTickets'
import {useDispatch} from 'react-redux'
// import { onTicketsGetAll } from 'redux_folder/actions/tickets.actions';
import useTypedSelector from 'hooks/useTypedSelector';

const FormularioTicketsContainer = () => {



    const ticket_state = useTypedSelector((state) => state.tickets);

    return (
        <FormularioTicketsView />
    )
}

export default FormularioTicketsContainer