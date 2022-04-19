import React from 'react';

export function errorPopUp(message) {

  return(
    <div className="position">
      <span className="errorText">{message}</span>
    </div>
  )
}