import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

const InfoPersonal = () => {
    return (
        <Container>
            <Row style={{ color: 'black', paddingLeft: '3rem', paddingRight: '3rem' }}>
                <h1 style={{ color: 'black', marginBottom: '10%', fontSize: '3rem' }}>Información Personal</h1>
                <Col md={6}>
                    <p style={{ fontSize: '1.5rem' }}>Mi nombre es Sofía Bonaldo, tengo {new Date().getFullYear() - new Date(2005, 11, 16).getFullYear()} años y me gusta hacer el diseño de páginas web.</p>
                    <p style={{ fontSize: '1.5rem' }}>Soy un estudiante del colegio ORT Sede Almagro, cursando último año de la especialidad de Informática (5to informática A).</p>
                </Col>
                <Col>
                    <p style={{ fontSize: '1.5rem' }}>A lo largo del secundario he aprendido varios lenguajes de programación frontend y backend tales como JavaScript, CSS, HTML, MSSQL, etc; herramientas muy usadas en la actualidad como Photoshop, Illustrator, Figma, GitHub, Trello y librerías como React o React Native. </p>
                </Col>
            </Row>
        </Container>
    )
}

export default InfoPersonal;