import React, { useState, useEffect } from 'react';
import {Routes, Route} from "react-router-dom";
import SongTable from "./Components/SongTable/SongTable";
import Navbar from './Components/NavBar/NavBar';
import SearchBar from './Components/SearchBar/SearchBar';
import axios from 'axios';


function App() {

  const[song, setSong] = useState([]);

  async function getSongs(){
    let response = await axios.get("http://127.0.0.1:8000/api/songs/")
    console.log(response.data)
    setSong(response.data)
}

function displaySongs(song){
    setSong(song)
    console.log(song)
    getSongs(song)
}

useEffect(()=>{
    displaySongs(song)
}, []);

  return (
    <div className='App'>
      {/* <Navbar/> */}
      <h1>Music Library</h1>
      <div className='container'>
        <SongTable allSongs={song}/>
      </div>
    </div>
  );
}

export default App;
