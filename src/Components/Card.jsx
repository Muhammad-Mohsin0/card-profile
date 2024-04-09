import React from "react";

function Card(props){
    // console.log(props)

    return (
        <>
         <div className="card-container">
          <img src={props.imgsrc} alt=""  className="img"/>
           <div className="card-info">
           <h3 className="profile-name">{props.name}</h3>
           <span className="profile-title">{props.title}</span>
           {props.linkedin && (
            <a href={props.linkedin} target="_blank">
              <button>LinkedIn</button>
            </a>
          )}
          
          {props.email && (
            <a href={props.email} target="_blank">
              <button>Email</button>
            </a>
          )}
            </div>
            <div className="about">
            <h3>About</h3>
                {props.about}
            </div>
            <div className="interest">
            <h3>Interest</h3>
                {props.interest}
            </div>
         </div>
        </>
    )
}

export default Card;