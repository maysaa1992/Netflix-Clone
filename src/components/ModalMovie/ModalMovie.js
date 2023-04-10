import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useRef } from 'react';

function ModalMovie(props) {
    const commentRef=useRef();
    function submitHandler(e){
        e.preventDefault()
        let userComment=commentRef.current.value;
let newMoveData={...props.MovieData,userComment}
console.log(newMoveData);
props.commentHandler(newMoveData,newMoveData.id)
    }
 async function addMovieHandller (e,movie){
    e.preventDefault();
    let url=`${process.env.REACT_APP_SERVER_URL}/addMove`

        let data={
            title:props.MovieData.title,
            comments:props.MovieData.comment
        }
        const response = await fetch(url, {
            method: "POST",
           
            headers: {
              "Content-Type": "application/json"},
              body: JSON.stringify(data), 
            })  
            const reseveData= await response.json();
console.log(reseveData)
if(response.status===201){alert("successfly added")}
    }
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.MovieData.title}</Modal.Title>
                </Modal.Header>
                <img src={`https://image.tmdb.org/t/p/w400/${props.MovieData.poster_path}`} alt={props.MovieData.title} />
                <Modal.Body>
                    {props.MovieData.overview.substring(0,1000)}
                    <br/>
                    <br/>
                    {props.MovieData.comment?props.MovieData.comment:"no comment added"}
                    <br/>
                <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control ref={commentRef} type="text" placeholder="Enter your comment" />
                            <Form.Text className="text-muted">
                                Enter your comment  </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e)=>submitHandler(e)}>
                            Submit
                        </Button>
                        <Button variant="primary" type="submit" onClick={(e)=>addMovieHandller(e,props.MovieData)}>
                            Add Favourit Movie
                        </Button>
                    </Form>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalMovie;