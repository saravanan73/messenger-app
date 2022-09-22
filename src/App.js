import React from "react";
import Chat from "./components/Chat";
import Homepage from "./components/Homepage";
import {useState} from 'react';


function App() {
  const [username, setUsername] = useState("");
  const [startChat, setStartChat] = useState(false);

    if(startChat){
    return <Chat username={username}  />
  }return <Homepage
 
  setUsername={setUsername}
  setStartChat={setStartChat} 
 />
  
}

export default App;
