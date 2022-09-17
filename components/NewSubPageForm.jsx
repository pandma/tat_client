
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { useRouter } from 'next/router';
import subPageService from '../pages/api/service/subPage.service';

const NewSubPageForm = ({ close, setPagesData }) => {
    const { query } = useRouter();
    console.log(query.id);

    const [pageData, setPageData] = useState({
        title: "",
        big_image: "",
        small_image: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (pageData.title) {
                pageData.page_id = query.id;
                await subPageService.newPage(JSON.stringify(pageData));
                const newPage = await subPageService.getPages();
                const rest = newPage.data.data;
                setPagesData(rest);
            }
            close();
        } catch (error) {
            console.error(error);
        }

    };
    const handleInputChange = (e) => {
        const { value, name } = e.currentTarget;
        setPageData({ ...pageData, [name]: value });
    };

    const { title, big_image, small_image } = pageData;

    return <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" placeholder="Nombre nueva pagina" name="title" value={title} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Imagen de Portada</Form.Label>
                <Form.Control type="text" placeholder="Añadir imagen" name="big_image" value={big_image} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Logo de pagina</Form.Label>
                <Form.Control type="text" placeholder="Añadir logo" name="small_image" value={small_image} onChange={handleInputChange} />
            </Form.Group>
            <Button variant="light" type="submit" >
                <strong>
                    Añadir <NoteAddIcon />
                </strong>
            </Button>
        </Form>
    </>;
};


export default NewSubPageForm;