import styles from './home.module.css';
import PageList from '../PageList';
import { Container, Row, Col } from 'react-bootstrap';

const HomeComponet = ({ pages }) => {
    return <Container fluid>
        <Row>
            <Col md={{ span: 4, offset: 4 }}>
                <div className={styles.hometitle}>
                    <h1 className={styles.title}>Welcome, Tati</h1>
                </div>
                <div style={{
                    paddingTop: "10%",
                    textAlign: "center"
                }}>
                    <h2>Páginas</h2>
                    <div>
                        <hr />
                    </div>
                </div>
                <div>
                    <PageList pages={pages} />
                </div>
            </Col>
        </Row>
    </Container>;
};


export default HomeComponet;