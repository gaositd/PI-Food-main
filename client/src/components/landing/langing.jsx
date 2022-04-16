import React from "react"
import { useNavigate } from 'react-router-dom';
import './landing.css';

export function LandingPage(){
  const history = useNavigate();

  function handleButtom(){
    history('/home');
  }

  return(
    <div className="landing" >
      <h1 className="love">Passion for food</h1>
      <h1 className="love">Made with pinch of love</h1>
      <button className="btn" onClick={handleButtom}>
        Go to Restaurant
      </button>
    </div>
  )
}