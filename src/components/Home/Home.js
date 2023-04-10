import  { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList'

export default function Home() {
    const [Movies , setMovies]=useState([]); 
    async function getMovies(){
        const url=process.env.REACT_APP_SERVER_URL;

        const response = await fetch(`${url}/trending`);
        const jsonData = await response.json();
        setMovies(jsonData)
    }
    function commentHandler (newMoveData,id){
      Movies.map(movie=>{
        if(movie.id === id){
          movie.comment=newMoveData.userComment;

          return movie;
        }
        else {return movie}
        
      })
    }


    useEffect(() => {
        getMovies()
      },[]);
    
    return (
        <>   
          <h1>this is home components</h1> 
          <MovieList Movies={Movies}  commentHandler={commentHandler}/>
 
        </>
    )}
