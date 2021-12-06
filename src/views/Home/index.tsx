import React from 'react'
import {Link} from "react-router-dom";
import Button from 'components/Button/Button';
import './index.css'

const HomeView = (props) => {
  const {onHoursGetAll} = props;

  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
      </main>
      <Button onClick={onHoursGetAll} text={"Get Hours"}/>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
    )
}

export default HomeView;
