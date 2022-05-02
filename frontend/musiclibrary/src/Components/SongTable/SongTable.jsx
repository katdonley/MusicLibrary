import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./SongTable.css"



const SongTable = (props) => {
    return (
        <div>
            <table>
            <thead>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
            </thead>
                <tbody>
                    {
                        props.allSongs.map((song, index) => {
                            return(
                                <tr key={index}>
                                    <td>{song.title}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.album}</td>
                                    <td>{song.release_date}</td>
                                    <td>{song.genre}</td>
                                </tr>
                            )
                    })}
                </tbody>
            </table>
        </div>
        
                    
            
        
    );
}

export default SongTable


