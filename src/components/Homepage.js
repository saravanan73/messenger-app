import React from 'react';
import {useState} from 'react';
import SendIcon from '@mui/icons-material/Send';
import './Homepage.css'
import { FormControl, IconButton } from '@mui/material';




function Homepage({setUsername,setStartChat}) {
    const [input, setInput] = useState("");
  const onSubmit=(e)=>{
    setUsername(input)
   console.log(input);
   setStartChat(true);
  };
  return (
    <>
    <div className='home-page'>
      <h1> MESSENGER APP</h1>
      <div className='from-use'>
    <FormControl  className='from-control'>
    <label >Enter Your Name 
      <div className='input-box' >
    <input  value={input} 
    placeholder='Please enter your name'
    onChange={(e)=>{setInput(e.target.value);}}></input>
    <IconButton type='submit'
    variant='containted'
    color='primary'
    onClick={onSubmit} 
    disabled={!input}><SendIcon className='icon-style'/></IconButton></div></label>
    </FormControl></div>
    </div></>
  );
}

export default Homepage;