import React, { useState } from 'react';
import SoporteView from 'views/Soporte'
import {useDispatch} from 'react-redux'
import { onTicketsGetAll, onProductsGetAll} from 'redux_folder/actions/tickets.actions';
import useTypedSelector from 'hooks/useTypedSelector';

const SoporteContainer = () => {
    
    
    const dispatch = useDispatch();
    
    const products = [{"name":"Siu Guaraniii","versions":["1.0.0"]},{"name":"Proyecto 2","versions":["2.0","2.1","2.1.1"]}];
    dispatch(onProductsGetAll());

    return (<SoporteView products ={products} />);
}

export default SoporteContainer
