import React from 'react'
import {Link} from "react-router-dom";
import Button from 'components/Button/Button';
import './index.css'

const HomeView = (props: any) => {
  const {onGetHours} = props;

  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
      </main>
      <Button onClick={onGetHours} text={"Get Hours"}/>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/soporte">Soporte</Link>
      </nav>
    </>
    )
}

export default HomeView;
