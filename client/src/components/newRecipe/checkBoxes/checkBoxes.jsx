import React, {
  useState,
  useEffect,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDiets } from '../../../action/allActions';
import './checkboxes.css';

export function Checkboxes() {
  const dispatch = useDispatch();
  const diets = useSelector(state => state.allDiets);
  useEffect(()=> dispatch(getDiets()),[dispatch]);

  const [checkboxes,setCheckboxes] = useState({})
  let checks = [];

  function handleCheckChange(e){
    // console.log(e.target.checked);
    // console.log(e.target.value);
    // return {
    //   ...checkboxes,
    //   [e.target.checked] : true,
    // }
    if(!checks.includes(e.target.value)){
      checks.push(e.target.value);
    }else{
      checks = checks.filter(check => check !== e.target.value);
    }
  }

  function handleBlur(){
    // console.log(checkboxes)
  }

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
                onBlur={handleBlur}
              />
            </div>
          </div>
        )
      }
      </div>
    </React.Fragment>
  )
}