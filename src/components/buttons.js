import React from "react";
// import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import { Button, ButtonGroup, IconButton } from "@mui/material";
import { Fingerprint } from "@mui/icons-material";
const Buttons = () => {
  return (
    <>
      <h1>Text BUTTONS</h1>     
      <Button variant="contained">Text Button</Button>
      <Button variant="text">button 2</Button>
      <Button variant="outlined" color="secondary">OutlinedButton</Button>
      <Button variant="string" href="https://www.google.com" target="_blank"> StringButton</Button>     {/*_blank for new tab*/}


      <h1>Contained Buttons</h1>
      <Button variant="contained">Text Button</Button>
      <Button disabled variant="contained">disabled</Button>
      <Button variant="contained" color="error" href="https://www.amazon.com" target="_blank">Click me</Button>
      
      <h1>size</h1>
      <Button size="large" variant="outlined">Large</Button>
      <Button size="small" variant="outlined">Small</Button>
      <Button size="medium" variant="outlined">Medium</Button>

      <h1>Button with Icons</h1>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon/>}>Delete</Button>

      <h1>icons</h1>
      <IconButton color="secondary"><DeleteIcon/></IconButton>
      <IconButton aria-label="fingerprint" color="success"><Fingerprint/></IconButton>

      <h1>custom css</h1>
      <Button variant="secondary" style={{background :  "black" , color:"white" , borderRadius:"50px"}}>customcss</Button>
      <Button variant="secondary" sx = {{background :  "black" , color:"white" , borderRadius:"50px"}}>customcss</Button>

      <h1>button with click event</h1>
      <Button variant="secondary" onClick={() => {alert("hello world")}}>Click me</Button>

      <h1>Button group</h1>
      <ButtonGroup>
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>
      </ButtonGroup>

      <h1>vertical button group</h1>
      <ButtonGroup orientation="vertical">
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>
      </ButtonGroup>

      <h1>Floating Action Button</h1>
    </>
  );
};
export default Buttons;
