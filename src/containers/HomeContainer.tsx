import React from 'react'
import HomeView from 'views/Home'
import {useDispatch} from 'react-redux'
import { onHoursGetAll } from 'redux_folder/actions/hours.actions';
import useTypedSelector from 'hooks/useTypedSelector';

const HomeContainer = () => {
    
    
    const dispatch = useDispatch();

    const hours = useTypedSelector((state) => state.hours.hours)
    console.log(hours)

    const onGetHours = () => {
        dispatch(onHoursGetAll());
        console.log("click")
    }
    return (
        <HomeView onGetHours={onGetHours}/>
    )
}

export default HomeContainer
