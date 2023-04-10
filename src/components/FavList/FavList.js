import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
function FavList() {
    const [favMovie,setFavMovie]=useState([]);
async function getFavMovie()
    {
        let url=`${process.env.REACT_APP_SERVER_URL}/getMovies`
        const response = await fetch(url, {
            method: "GET",
           
            })
            let reseveData=await response.json()
            setFavMovie(reseveData)  ;
            console.log( "hello",favMovie);
    }
    async function handelleDelete(id){
        let url=`${process.env.REACT_APP_SERVER_URL}/DELETE/${id}`
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },    
            })
            if(response.status===204){
                getFavMovie();
              //  alert("sucseccfuly delete");
            }

    }
    async function handelleUpdate(id,dataupdate){
        let url=`${process.env.REACT_APP_SERVER_URL}/UPDATE/${id}`
        let data={
            title:dataupdate.title,
            comments:dataupdate.comment
        }
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(data), 
   
            })
            if(response.status===201){
                getFavMovie();
              //  alert("sucseccfuly delete");
            }

    }

    useEffect(()=>{
        getFavMovie();
    },[])

    
    return (
        <>   
          {
          favMovie && favMovie.map(movie=>{
            return(
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.comment}
                    </Card.Text>
                   
                    <Button variant="primary" onClick={()=>handelleDelete(movie.id)}>Delete</Button>
                    <Button variant="primary" onClick={()=>handelleUpdate(movie.id,movie)}>Update</Button>
                </Card.Body>
            </Card>
            )

          })
          }

        </>
    )}
    export default FavList;