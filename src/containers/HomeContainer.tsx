import React from 'react'
import HomeView from 'views/Home'
import {useDispatch} from 'react-redux'
import { onHoursGet } from 'redux_folder/actions/hours.actions';
import useTypedSelector from 'hooks/useTypedSelector';

const HomeContainer = () => {
    
    
    const dispatch = useDispatch();

    const hours = useTypedSelector((state) => state.hours.hours)
    console.log(hours)

    return (
        <HomeView/>
    )
}

export default HomeContainer
