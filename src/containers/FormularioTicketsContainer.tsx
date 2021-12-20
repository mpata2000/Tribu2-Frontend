import React from 'react'
import FormularioTicketsView from 'views/Soporte/FormularioTickets'
import {useDispatch} from 'react-redux'
import { onResourcesGetAll, onTareasGetAll, onClientsGetAll } from 'redux_folder/actions/tickets.actions';
const FormularioTicketsContainer = () => {
    const dispatch = useDispatch();
    dispatch(onResourcesGetAll());
    dispatch(onTareasGetAll());
    dispatch(onClientsGetAll());

    return (
        <FormularioTicketsView />
    )
}

export default FormularioTicketsContainer