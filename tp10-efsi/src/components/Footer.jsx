import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <footer style={{ display: 'flex', padding: '1.5%', backgroundColor: '#1c3d78', color: 'white', flexDirection: 'column' }}>
            <div style={{ marginLeft: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                <Row style={{ display: 'flex', marginTop: '1rem', marginBottom: '0.5rem' }}>
                    <Col style={{ display: 'flex', color: 'white', flexDirection: 'column', textAlign: 'initial', alignItems: 'flex-start' }} md={3}>
                        <div>
                            <h4>Contacto</h4>
                            <p>Gmail: myacovino1@gmail.com</p>
                            <p>Teléfono: + 54 911 2865-3947</p>
                        </div>
                    </Col>
                    <Col style={{ display: 'flex', color: 'white', flexDirection: 'column', textAlign: 'initial', alignItems: 'flex-start' }} md={3}>
                        <div>
                            <h4>Mis Redes</h4>
                            <a href='https://www.instagram.com/matheo.yacovino/' style={{ color: 'white', textDecoration: 'none' }} target="_blank">Instagram</a><br />
                            <p><a href='https://twitter.com/MatheoYaco' style={{ color: 'white', textDecoration: 'none' }} target="_blank">Twitter</a></p>
                        </div>
                    </Col>
                    <Col style={{ display: 'flex', color: 'white', flexDirection: 'column', textAlign: 'initial', alignItems: 'flex-start' }} md={3}>
                        <div>
                            <h4>Más Proyectos</h4>
                            <a href='https://github.com/MatheoYaco240' style={{ color: 'white', textDecoration: 'none' }} target="_blank">GitHub</a>
                            <p><a href='https://www.linkedin.com/in/matheo-franco-yacovino-364398237/?original_referer=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2F&originalSubdomain=ar' style={{ color: 'white', textDecoration: 'none' }} target="_blank">LinkedIn</a></p>
                        </div>
                    </Col><br></br>
                </Row>
            </div>
            <div style={{ display: 'flex', marginLeft: '2.5rem' }}>
                <p>&copy; {new Date().getFullYear()} - Matheo Yacovino - <a href='https://drive.google.com/file/d/1FTPv9gsfbxKOqVY3vz7WxcFxUu6nZJn0/view?usp=sharing' style={{ color: 'white', textDecoration: 'none' }} target="_blank">Mi CV</a></p>
            </div>
        </footer>
    )
}

export default Footer;