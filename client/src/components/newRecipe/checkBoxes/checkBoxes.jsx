import React, {
  useEffect,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDiets } from '../../../action/allActions';
import './checkboxes.css';

export function Checkboxes() {
  // const [select, setSelect] = useState([]);
  const dispatch = useDispatch();
  const diets = useSelector(state => state.allDiets);
  useEffect(()=> dispatch(getDiets()),[dispatch]);
  // console.log('console.log(diets)');

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
              <input type="checkbox" value={diet.name} name={diet.ID} />
            </div>
          </div>
        )
      }
      </div>
    </React.Fragment>
  )
}