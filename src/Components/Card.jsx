import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { IoMail } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {Button, CardActionArea, CardActions} from "@mui/material";

function Cards(props) {
  // console.log(props)

  return (
    <>
      <Card sx={{bgcolor:'#37474f',color:'white', marginTop:4,marginBottom:4, width: {   xs: '100%',
      sm: 225,
      md: 280,
      lg: 300,}}}>

        <CardActionArea>
          <CardMedia component="img" height="270" image={props.imgsrc} />
          <CardContent sx={{height: '80px !important' }}>
          
          <Typography gutterBottom variant="h6" align="center" fontWeight={'700'}>{props.name}</Typography>
          <Typography align="center" color='#ffe082'>{props.title}</Typography>
          
          </CardContent>
        </CardActionArea>
        <Stack spacing={1} direction={"row"} margin={2} justifyContent={"space-around"}>
         
         {props.email && (
          <a href={props.email} target="_blank">
            <Button variant="contained" sx={{'& svg': {marginRight: '5px'},bgcolor:'white', color:'black'}} ><IoMail size={18} />Email</Button>
          </a>
        )}
          {props.linkedin && (
          <a href={props.linkedin} target="_blank">
            <Button variant="contained" sx={{"& svg":{marginRight:'5px'}, }} ><BsLinkedin size={15}/> LinkedIn</Button>
          </a>
        )}
        </Stack>
        <CardContent sx={{height:'300px'}}>
          <Typography variant="h6">About</Typography>
          <Typography>{props.about}</Typography>
          <br />
          </CardContent>

          <CardContent >
          <Typography variant="h6">Interest</Typography>
          <Typography>{props.interest}</Typography>
          </CardContent>
          
          <Box sx={{bgcolor:'#263238', height:'50px',display:'flex', justifyContent:'space-evenly', alignItems:'center', }}>
          <FaTwitter size={25}/>
          <FaFacebook  size={25}/>
          <FaInstagram  size={25} />
          <BsLinkedin  size={25}/>
          <FaGithub  size={25}/>
          </Box>
          
         
          
      </Card>
    </>
  );
}

export default Cards;
