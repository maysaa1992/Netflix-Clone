import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'


function ModalMovie(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.MovieData.title}</Modal.Title>
                </Modal.Header>
                <img src={props.MovieData.image} alt={props.MovieData.title} />
                <Modal.Body>{props.MovieData.overview}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalMovie;