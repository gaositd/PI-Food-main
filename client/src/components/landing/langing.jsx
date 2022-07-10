import React from "react"
import { useNavigate } from 'react-router-dom';
import './landing.css';
import { Si1001Tracklists } from "react-icons/si";

export function LandingPage(){
  const history = useNavigate();

  function handleButtom(){
    history('/home');
  }

  return(
    <div className="landing" >
      <Si1001Tracklists className="music" title="Music by https://www.fiftysounds.com/es/musica-libre-de-derechos/romantico.html"/>
      <h1 className="love">Passion for food</h1>
      <h1 className="love">Made with pinch of love</h1>
      <button className="btn btn-lg" onClick={handleButtom}>
        To Restaurant
      </button>
    </div>
  )
}