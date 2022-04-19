import React, {
  useEffect,
  // useState
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDiets } from '../../../action/allActions';
import '../navbar.css';

export function SelectOption() {
  // const [select, setSelect] = useState([]);
  const dispatch = useDispatch();
  const diets = useSelector(state => state.allDiets);
  useEffect(()=> dispatch(getDiets()),[dispatch]);

  return (
    <React.Fragment>
      <select className="navSelect listSelect" id="navSelect" name="navSelect">
        <option value="" key="option"></option>
        {diets && diets.map( diet => <option key={diet.ID} id={diet.id} value={diet.name}>{diet.name}</option> ) }
      </select>
    </React.Fragment>
  )
}