import React from "react";
import "./Cards.css"

function Card(props){
    return(
      <>

      <div className="container">
      <div className="cards">
       <div className="card">
         <img src={props.imgsrc} alt="mypic" className="card_img" />
         <div className="card_info">
           <span className="card_category">{props.title}</span>
           <h3 className="card_title">{props.mname}</h3>
           <a href={props.link} target="_blank">
             <button> Watch Now </button>
           </a>
         </div>
         </div>
      </div>
      </div>
      
   </>
    );
  }

  export default Card;