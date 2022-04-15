import React from "react"
import { useNavigate } from 'react-router-dom';
import './landing.css';

export function LandingPage(){
  const history = useNavigate();

  function handleButtom(){
    history('/home');
  }

  return(
    <div>
      <h1 className="love">Love for Food</h1>
      <h1 className="love">Made with pinch of love</h1>
      <button className="btn btnPosition" onClick={handleButtom}>
        Go to Restaurant
      </button>
    </div>
  )
}