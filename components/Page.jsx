import { Container, Row, Col } from 'react-bootstrap';
import SubPageList from './SubPageList';
import Image from 'next/image';

const Page = ({ page, subPage }) => {

    return <Container fluid>
        <Row style={{
            minHeight: "40vh",
            backgroundImage: `url(${page.big_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginTop: "-16px"
        }}>
            <Col md={{ span: 4, offset: 4 }}>
                <div style={{
                    border: " 2px solid",
                    padding: "10px",
                    borderRadius: " 50px",
                    borderColor: "rgb(255, 255, 255)",
                    opacity: " 0.7",
                    filter: "alpha(opacity=50)",
                    zoom: "1",
                    marginTop: "22%",
                    textAlign: "center",
                    paddingTop: "3%",
                    backgroundColor: "aliceblue",
                }} >
                    <h1>{page.title}</h1>
                </div>
            </Col>
        </Row>

        <Row style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center"
        }}>
            <Col className='center-block' md={{ span: 4, offset: 3 }} style={{
                marginTop: "-2%",
            }}>
                <Image
                    src={page.small_image}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                />
            </Col>
        </Row>

        <Row>
            <Col md={{ span: 4, offset: 4 }}>
                <div style={{
                    marginTop: "4%",
                    textAlign: "center"
                }}>
                    <h2>Páginas</h2>
                    <hr />
                </div>
                <div>
                    <SubPageList pages={subPage} />
                </div>
            </Col>
        </Row>
    </Container>;

};

export default Page;