import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "../home";
import './pagination.css';

export function Pagination({currentPage, setCurrentPage, maxPages, totalRecipes}){
  const [input, setInput] = useState(1);
  let arrPageRecipes = [];

  function handleChange(event) {
    event.preventDefault();
    setInput(event.target.value)
  }

  function nextPage(){
    if(input < maxPages) {
      setInput(input  + 1);
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage(){
    if(input > 1){
      setInput(input  - 1);
      setCurrentPage(currentPage - 1);
    }
  }

  function goPage(event) {
    if(event.keyCode === 13){
      setCurrentPage(parseInt(event.target.value));
      if(parseInt(event.target.value < 1) ||
         parseInt(event.target.value > Math.ceil(maxPages) ||
         isNaN(event.target.value))){
          setCurrentPage(1);
          setInput(1);
      }else{
        setCurrentPage(parseInt(event.target.value));
      }
    }
  }
  
  for (let i = 0; i < maxPages; i++) {
    arrPageRecipes.push(i + 1);
  }
  
  function paginate(page){
    setCurrentPage(currentPage = parseInt(page.target.text));
  }

  function firstPage(){
    setCurrentPage(currentPage = 1);
  }

  function lastPage(){
    setCurrentPage(currentPage = arrPageRecipes.length);
  }

  return(
    <div className="containerPagination">
      <button className="btnPagination" onClick={prevPage}>
        <span className="title">↩</span>
      </button>
      <span className="font title">
        {
          arrPageRecipes && arrPageRecipes.map((page) =>{
            return (
              <Link to={Home}
                key={page}
                className="numPage"
                onClick={(page) =>paginate(page)}>
                  {page+"·"}
              </Link>
            )
          })
        }
      </span>
      <button className="btnPagination" onClick={nextPage}>
        <span className="title">↪</span>
      </button>
      <span className="font title">Page number#</span>
      <input
        type="number"
        max={maxPages}
        min="0"
        onChange = {handleChange}
        onKeyDown={goPage}
        placeholder="Press enter to go to the page"
        title="Press enter to go to the page"
      />
      
      <button className="btnPagination" onClick={firstPage}>
        <span className="title" title="First Page">Page 1</span>
      </button>
      <button className="btnPagination" onClick={lastPage}>
        <span className="title" title="Last Page">Page {arrPageRecipes.length}</span>
      </button>
    </div>
  );
}