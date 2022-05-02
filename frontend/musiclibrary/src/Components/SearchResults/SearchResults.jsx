import React from "react";


const SearchPage = (props) =>{


   const handleClick = (event, id, title, artist, album, releaseDate, genre) => {
   event.preventDefault();
   props.setCurrentSongId(id);
   props.setCurrentSongTitle(title);
   props.setCurrentSongArtist(artist);
   props.setCurrentSongAlbum(album);
   props.setCurrentSongReleaseDate(releaseDate);
   props.setCurrentSongGenre(genre);
   console.log(id, title, artist, album, releaseDate, genre)
   }

    return (
    <div>
        <div className="container">
            <h1>Here are your search results!</h1>
            
        </div>
        <div>   
            <table> 
                <tbody>
                {props.searchResults.map((song, index) => {
                    return(
                        
                        <tr key={index}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <input type="image" src={song} 
                            onClick={(event) => handleClick(event, song.id, song.title, song.artist, song.album, song.release_date, song.genre)}
                            />
                        </tr>
                    )
                })}
                </tbody>
            </table>

        </div>
    </div>
    );
};
    


export default SearchPage