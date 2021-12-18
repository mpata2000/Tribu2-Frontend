import React from 'react'
import './index.css'

const ListItem = (props:any) => {
    const {item, children} = props;
    return (
        <div className="container">
            <div className="columnDiv">
                <p className="title2"> {item.name} </p>
                <p className="description"> {item.description} </p>
            </div>
            {children}
        </div>
    )
}

export default ListItem
