import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Button({onClick, children}) {
  return(
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function Toolbar({onMessage, onUpload}){
  return(
    <div onClick={() => {console.log("you clicked on the toolbar")}}>
      <Button onClick={onMessage}>Send a message</Button>
      <Button onClick={onUpload}>Upload a file</Button>
    </div>
  );
}

export default function App() {
  return(
    <Toolbar 
    onMessage={() => {
      console.log("sending a message");
    }} 
    onUpload={() => console.log("uploading")} />
  );
}

