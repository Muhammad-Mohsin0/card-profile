import React from "react";
import Card from "./Components/Card";
import profileData from "./Components/ProfileData";

const proData = (value) =>{
  // console.log(value)
  return(
    <Card
    key={value.id}
    imgsrc={value.imgsrc}
    name={value.name}
    title={value.title}
    linkedin={value.linkedin}
    email={value.email}
    about={value.about}
    interest= {value.interest}
  />
  );

}
// console.log(profileData[0].name)
function App() {
  return (
    <>
     
      { profileData.map(proData)}
      
    </>
  );
}

export default App;
