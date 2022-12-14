import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NewPage from './NewPage';
import Link from 'next/link';


const PageList = ({ pages }) => {
    const [pageData, setPagesData] = useState(pages);

    const page = pageData.map(elm => {
        return <Col key={elm.id} md={6}>
            <div style={{ padding: 30 }}>
                <Link href={`/page/${elm.id}`}>
                    <a style={{
                        // textDecoration: 'underline',
                        color: 'black',
                        fontSize: 30
                    }}>
                        <h3>{elm.title}</h3>
                    </a>
                </Link>
            </div>
        </Col>;
    });

    return <Container>

        <Row style={{
            textAlign: "center"
        }}>
            {page}
            <NewPage setPagesData={setPagesData} />
        </Row>

    </Container>;

};

export default PageList;