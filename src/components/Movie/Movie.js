import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import ModalMovie from '../ModalMovie/ModalMovie'
import { useState } from 'react';
export default function Movie(props) {

    const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    return (
<>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.movie.image} />
            <Card.Body>
                <Card.Title>{props.movie.title}</Card.Title>
                <Card.Text>
                    {props.movie.overview}
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>add favorite list</Button>
            </Card.Body>
        </Card>
        <ModalMovie show={show} handleClose={handleClose} MovieData={props.movie}/>

        </>
    )
}
