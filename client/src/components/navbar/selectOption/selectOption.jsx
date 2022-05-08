import React, {
  useEffect,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDiets,
  filterByDiet
} from '../../../action/allActions';

export function SelectOption() {
  let dispatch = useDispatch();
  const diets = useSelector(state => state.allDiets);
  useEffect(()=> dispatch(getDiets()),[dispatch]);

  const handleChange = (event)=>{
    dispatch(filterByDiet(event.target.value));
  }
  
  return (
    <React.Fragment>
      <select className="navSelect listSelect" id="navSelect" name="navSelect"
      onChange={handleChange}>
        <option value="" key="option"></option>
        {diets && diets.map( diet => <option key={diet.ID} id={diet.id} value={diet.name}>{diet.name}</option> ) }
      </select>
    </React.Fragment>
  )
}