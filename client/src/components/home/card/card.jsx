import React from 'react';

export function Card(props){
  <React.Fragment>
    <img src={props.images} with="100px" height="auto" alt={props.name} />
    <h3>{props.name}</h3>
    <h3>Diets</h3>
    for(prop in props.diets){
      <h4>diet</h4>
    }
  </React.Fragment>
}