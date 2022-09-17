import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddIcon from '@mui/icons-material/Add';
import NewSubPageForm from './NewSubPageForm';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Añade una pagina nueva
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <NewSubPageForm setPagesData={props.setPagesData} close={props.onHide} />
            </Modal.Body>
        </Modal>
    );
}

const NewSubPage = ({ setPagesData }) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)}>
                <Button variant="light" >
                    <strong>
                        Añadir <AddIcon />
                    </strong>
                </Button>
            </div>

            <MyVerticallyCenteredModal
                setPagesData={setPagesData}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default NewSubPage;