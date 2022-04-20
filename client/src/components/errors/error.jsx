import React from 'react';

export function ErrorPopUp(message) {
  if(message){
    return(
      <div className="position">
        <span className="errorText">{message}</span>
      </div>
    )
  }else <div></div>
}