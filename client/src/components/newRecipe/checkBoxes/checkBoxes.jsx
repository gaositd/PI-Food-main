import React, {
  useEffect,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDiets,
  sendDiets,
 } from '../../../action/allActions';
import './checkboxes.css';

export function Checkboxes() {
  const dispatch = useDispatch();
  const diets = useSelector(state => state.allDiets);
  useEffect(()=> dispatch(getDiets()),[dispatch]);

  let checks = [];
  useEffect(()=> dispatch(sendDiets()),[dispatch]);

  function handleCheckChange(e){
    if(!checks.includes(e.target.value)){
      checks.push(e.target.value);
    }else{
      checks = checks.filter(check => check !== e.target.value);
    }
  }
  // dispatch(sendDiets(checks));

  return (
    <React.Fragment>
      <div key="1B" className="cheboxContainer">
      {
        diets && diets.map(
          diet =>
          <div key={diet.ID} className="cheboxLbl" >
            <div className="lblChekc">
              <label htmlFor={diet.ID}>{diet.name}</label>
            </div>
            <div className="inputCheck">
              <input
                type="checkbox"
                id={diet.ID}
                value={diet.name}
                name={diet.ID}
                onChange={handleCheckChange}
              />
            </div>
          </div>
        )
      }
      </div>
    </React.Fragment>
  )
}