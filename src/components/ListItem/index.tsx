import React from 'react'
import './index.css'

const ListItem = (props:any) => {
    const {item, task, children} = props;
    console.log(task)
    return (
        <div className="container" >
            <div className="columnDiv" >
                <p className="title2"> {task?.nombre} </p>
                <p className="description"> {item.note} </p>
            </div>
            {children}
        </div>
    )
}

export default ListItem
