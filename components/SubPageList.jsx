import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NewSubPage from './NewSubPage';
import Link from 'next/link';


const SubPageList = ({ pages }) => {
    const [pageData, setPagesData] = useState(pages);

    const page = pageData.map(elm => {
        return <Col key={elm.id} md={6}>
            <div style={{ padding: 30 }}>
                <Link href={`/subpage/${elm.id}`}>
                    <a style={{
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
            <NewSubPage setPagesData={setPagesData} />
        </Row>

    </Container>;

};

export default SubPageList;