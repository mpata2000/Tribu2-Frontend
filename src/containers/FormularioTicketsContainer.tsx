import React from 'react'
import FormularioTicketsView from 'views/Soporte/FormularioTickets'
import {useDispatch} from 'react-redux'
import { onResourcesGetAll, onTareasGetAll } from 'redux_folder/actions/tickets.actions';
const FormularioTicketsContainer = () => {
    const dispatch = useDispatch();
    dispatch(onResourcesGetAll());
    dispatch(onTareasGetAll());

    return (
        <FormularioTicketsView />
    )
}

export default FormularioTicketsContainer