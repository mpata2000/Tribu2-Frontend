import React from 'react'
import TicketsView from 'views/Soporte/Tickets'
import {useDispatch} from 'react-redux'
import { onTicketsGetAll, onTareasGetAll } from 'redux_folder/actions/tickets.actions';
import { useLocation} from 'react-router-dom';

const TicketsContainer = () => {
    const product = useLocation().state.product;
    const version = useLocation().state.version;

    const dispatch = useDispatch();
    dispatch(onTicketsGetAll(product, version));
    dispatch(onTareasGetAll());

   
    return (
        <TicketsView product={product} version={version}/>
    )
}

export default TicketsContainer