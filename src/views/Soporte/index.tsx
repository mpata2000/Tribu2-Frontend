import React from 'react'
import {Link} from "react-router-dom";
import Button from 'components/Button/Button';
import './index.css'

const SoporteView = (props: any) => {
  const {onGetTickets} = props;

  return (
    <>
      <main>
        <h2>Esta es la página de soporte</h2>
      </main>
      <Button onClick={onGetTickets} text={"Get Tickets"}/>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
    )
}

export default SoporteView;
