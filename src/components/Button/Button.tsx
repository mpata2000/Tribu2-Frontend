import React from 'react'

const Button = (props:any) => {
    const {text, onClick} = props;
    return (
        <button onClick={onClick} className="Button">{text}</button>
    )
}

export default Button
