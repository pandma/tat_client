import { Container, Row, Col } from 'react-bootstrap';
import SubPageList from './SubPageList';

const Page = ({ page, subPage }) => {
    return <Container fluid>
        <Row style={{
            minHeight: "40vh",
            backgroundImage: `url(${page.big_image})`,
            // width: 400px;
            // height: 600px;
            // background-image: url(${props => props.desktopimg}); no-repeat;
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
        <Row>
            <Col md={{ span: 4, offset: 4 }}>

                <div style={{
                    paddingTop: "10%",
                    paddingLeft: "8%",
                }}>
                    <h2>Páginas</h2>
                    <div style={{
                        maxWidth: "500px"
                    }}>
                        <hr />
                    </div>
                </div>
                <div>
                    <SubPageList pages={subPage} />
                </div>
            </Col>
        </Row>
    </Container>;

};

export default Page;