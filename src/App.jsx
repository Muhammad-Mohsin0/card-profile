import React from "react";
import Cards from "./Components/Card";
import Box from '@mui/material/Box';
import profileData from "./Components/ProfileData";


// console.log(profileData[0].name)
function App() {
  return (
    <>
     <Box sx={{
             display:"flex",
             flexWrap: "wrap",
             justifyContent : 'center',
             gap:4,
             bgcolor:'#607d8b',
            borderRadius:'5px'
      }}>
      { profileData.map((value)=>(
     
        <Cards
        key={value.id}
        imgsrc={value.imgsrc}
        name={value.name}
        title={value.title}
        linkedin={value.linkedin}
        email={value.email}
        about={value.about}
        interest= {value.interest}
        />
      ))}
      </Box>
    </>
  );
}

export default App;
