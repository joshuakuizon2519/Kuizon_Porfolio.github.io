import React from "react";
import "./head.css";
import profile from "../../src/img/header-profile3.jpg.jpg";
import arrow from "../../src/img/down-arrow.png";
import Typical from 'react-typical';

const head = () => {
  return (
    <div className="box">
      <div className="flexhead">
        <img className = "profilepic"src={profile} alt="Profile pic"></img>
          <div className="introduction">
              <h2 className="Hi">Hi!</h2>
              <div className="name">
              <h1>I'm Joshua</h1>
              <p>
                {''}
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    'Computer Science Student', 1000,
                    'Programmer', 1000,
                    'Coffee Lover', 1000,
                    'Cook (Wannabe)',1000,
                    'Future frontend Developer',1000,
                  ]}></Typical>
              </p>
              </div>
          </div>
        </div>
        <div className="position">
          <img className="down-arrow" src = {arrow} alt= "down arrow icon"></img>
        </div>
    </div>
  )
}

export default head