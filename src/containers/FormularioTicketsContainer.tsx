import React from 'react'
import FormularioTicketsView from 'views/Soporte/FormularioTickets'
import {useDispatch} from 'react-redux'
import { onResourcesGetAll } from 'redux_folder/actions/tickets.actions';
const FormularioTicketsContainer = () => {



    const dispatch = useDispatch();
    dispatch(onResourcesGetAll());

    return (
        <FormularioTicketsView />
    )
}

export default FormularioTicketsContainer