import React from 'react'
import '../App.css';
import {FormControl,Input,IconButton} from "@mui/material/";
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from 'react';
import { db, timestamp } from '../firebase';
import Message from "../Message";
import FlipMove from "react-flip-move";


export default function Chat({username}) {
    const[input,setInput]=useState("");
    const [message,setMessage]=useState([]);
    useEffect(()=>{
        db.collection("messages").orderBy("timestamp","desc").onSnapshot((snapshot)=>{
          setMessage(snapshot.docs.map((doc)=>({id: doc.id , message : doc.data()})))
        });
  
    },[])
    
    
   
    const sendmessage=(e)=>{
      e.preventDefault();
      db.collection("messages").add({
        username:username,
        message:input,
        timestamp:timestamp,
      });
      
  setInput("");
     
    };
  
    return (<>
      <div className="App">
        <div className="App-header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png"
           className="App-logo"
            alt="logo"
             />
            <h2>Message App Clone</h2>
            <p>The <strong>SparkSpeed </strong> production</p>
            <h3>Welcome {username}</h3>
            <form className='app__form'>
            <FormControl className="app__formControl">
              <Input 
              placeholder="Type a message" 
              className="app__input"
              onChange={(event)=>{setInput(event.target.value)}}
              value={input}></Input>
                <IconButton 
                variant="contained" 
                color='primary' 
                type='submit' 
                className='app__button'
                disabled={!input}
                onClick={sendmessage}>
                  <SendIcon  />
              </IconButton>
            </FormControl>
            </form>
            <div className='message_show'>
              <FlipMove>
                {message.map(({message,id})=>{
                  return <Message key={id} message={message} username={username}/> 
                })}
              </FlipMove>
              
        
            </div>
          </div>
          
      </div>
      </>);
}
