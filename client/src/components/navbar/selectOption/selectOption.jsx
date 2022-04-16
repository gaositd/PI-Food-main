import React, {
  useEffect,
  // useState
}
from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDiets } from '../../../action/allActions';
import '../navbar.css';

export function SelectOption(){
  // const [select, setSelect] = useState([]);
  const dispatch = useDispatch();
  const diets = useSelector(state => state.getDiets);
  useEffect(() => {dispatch(getDiets()) },[dispatch]);

  return (
    <React.Fragment>
      {
        console.log(diets)
      }
    <select className="navSelect" id="navSelect" name="navSelect">
      {
        console.log(`typeof(diets) ${typeof(diets)}`)
        // diets && diets.map(
        //   diet => {return (<option key={diet.id} id={diet.id} value={diet.name} alt={diet.summary}>{diet.name}</option>)}
        // )
      }
    </select>
    </React.Fragment>
  )
}