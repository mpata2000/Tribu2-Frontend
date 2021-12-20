import React from 'react'
import {Link} from "react-router-dom";
import Button from 'components/Button/Button';
import './index.css'

const HomeView = (props: any) => {
  const {onGetHours} = props;

  return (
    <div className="Home">
      <main >
        <h2>Welcome to the homepage!</h2>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
    )
}

export default HomeView;
