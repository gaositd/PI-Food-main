import React, {
  useEffect,
  // useState
} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDiets,
  filterByDiet
} from '../../../action/allActions';
// import '../navbar.css';

export function SelectOption() {
  // const [select, setSelect] = useState([]);
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