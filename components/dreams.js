import styles from './dreams.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Dreams(props) {
    return (
        <Container fluid>
            <Row xs={3} md={4} lg={6}>
                <Col xs={2} sm={2}><div><img src="/avatar.svg" alt="Vercel Logo" className="avatarImage"/></div></Col>
                <Col sm={8}><h2>Başlık</h2></Col>
                <Col sm={2}><h4>20 Mayıs 2019</h4></Col>
            </Row>
            <Row xs={2} md={4} lg={6}>
                <Col md={{offset:2}}><h5>İçerik</h5></Col>
            </Row>
        </Container>
    )
}

export default Dreams