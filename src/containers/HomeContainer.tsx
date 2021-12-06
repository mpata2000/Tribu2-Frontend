import React from 'react'
import HomeView from 'views/Home'
import {useDispatch} from 'react-redux'
import { onHoursGetAll } from 'redux_folder/actions/hours.actions';

const HomeContainer = () => {
    
    const dispatch = useDispatch();
    const onGetHours = () => {
        dispatch(onHoursGetAll);
        console.log("click")
    }
    return (
        <HomeView onGetHours={onGetHours}/>
    )
}

export default HomeContainer
