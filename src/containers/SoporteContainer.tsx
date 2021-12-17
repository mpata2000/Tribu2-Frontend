import React, { useState } from 'react';
import SoporteView from 'views/Soporte'
import {useDispatch} from 'react-redux'
import { onTicketsGetAll } from 'redux_folder/actions/tickets.actions';
import useTypedSelector from 'hooks/useTypedSelector';

const SoporteContainer = () => {
    
    const products = [{"name":"Siu Guarani","versions":["1.0.0"]},{"name":"Proyecto 2","versions":["2.0","2.1","2.1.1"]}];
    
    const dispatch = useDispatch();

    const onGetTickets = (product:string, version:string) => {
        dispatch(onTicketsGetAll(product, version));
    }

    return (<SoporteView onGetTickets={onGetTickets} products ={products} />);
}

export default SoporteContainer
