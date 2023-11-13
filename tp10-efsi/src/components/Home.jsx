import React, { } from 'react';
import '../css/Styles.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Proyecto1 from '../img/Proyecto1.jpg';
import snifterlylogo2 from '../img/snifterlylogo2.png'
import Logo from '../img/Logo.png'
import Reciclaje from '../img/Reciclaje.PNG'
import check from '../img/check.png'
import thesandbox2 from '../img/thesandbox2.PNG'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Footer from './Footer';

const Home = () => {
    const [favorito, setFavorito] = useState(false)
    const agregarAFavoritos = () => {
        setFavorito(favorito ? false : true)
    }
    return (
        <>
            <link rel='stylesheet' href="Styles.css" />
            <div className="App" style={{ backgroundColor: 'beige' }}>
                <div
                    className="App-header"
                    style={{
                        backgroundColor:
                            'beige',
                    }}
                >

                    <h1 style={{ color: 'black', marginBottom: '2%' }}>Mi Portfolio</h1>

                    <div style={{ display: 'flex', fontSize: "1.45rem", color: 'black', minWidth: '60%', justifyContent: 'space-between', marginBottom: '2%' }}>
                        <a href="/info-personal" style={{ padding: '3%', textDecoration: 'none', fontWeight: 'bold', color: '#1c3d78' }}>
                            Información
                        </a>
                        <a href="/mis-creaciones" style={{ padding: '3%', textDecoration: 'none', fontWeight: 'bold', color: '#1c3d78' }}>
                            Mis Creaciones
                        </a>
                        <a href="/favoritos" style={{ padding: '3%', textDecoration: 'none', fontWeight: 'bold', color: '#1c3d78' }}>
                            Favoritos
                        </a>
                        <a href="/perfil" style={{ padding: '3%', textDecoration: 'none', fontWeight: 'bold', color: '#1c3d78' }}>
                            Perfil
                        </a>
                    </div>
                </div>

                <h1 style={{ fontSize: '3.1rem' }}>Proyectos destacados</h1>

                <Container style={{ backgroundColor: 'beige', paddingLeft: '4rem', paddingRight: '4rem', marginLeft: '20rem', marginRight: '20rem' }}>
                    <Row style={{ display: 'flex', marginTop: '7rem' }}>
                        <Col style={{ display: 'flex', color: 'black', flexDirection: 'column', textAlign: 'initial', alignItems: 'flex-start', maxWidth: '65%', marginRight: '4rem' }}>
                            <div style={{ display: 'flex', alignContent: 'space-around', alignItems: 'baseline' }}>
                                <h1 style={{ marginBottom: '5%', marginRight: '0.5rem' }}>Snifterly</h1>
                                <button onClick={() => agregarAFavoritos()} style={{ paddingBottom: '0.15rem', backgroundColor: 'transparent', borderColor: 'transparent' }}>
                                    {
                                        !favorito ? <Icon icon="icon-park-outline:like"></Icon> : <Icon icon="icon-park-solid:like" style={{ color: "#c41b1b" }}></Icon>
                                    }
                                </button>
                            </div>
                            <p style={{ fontSize: '1.3rem' }}>Snifterly es una aplicación mobile con el objetivo de promover el consumo responsable de alcohol. La aplicación trabaja con un sistema organizado por jornadas (un período de tiempo en el cual el usuario va a estar ingiriendo bebidas) donde se podrá medir la cantidad de alcohol que uno tiene en su organismo, utilizando un dispositivo alcoholímetro con bluetooth integrado. La app registrará la medición, la duración de la jornada, y el recorrido de su consumo, permitiendo al usuario observar sus hábitos comprensiblemente.</p>
                            <button rel="noopener noreferrer" style={{ fontWeight: 'bold', letterSpacing: '1px', position: 'relative', background: 'beige', padding: '14px 24px', borderRadius: '22px', border: '4', borderColor: '#1c3d78', borderWidth: '2px', fontSize: '1rem', color: 'black', textDecoration: 'none' }}><a href={'https://github.com/sofygb/Snifterly.git'} target="_blank" style={{ textDecoration: 'none', color: 'black' }}>Ver Repositorio</a></button>
                        </Col>
                        <Col>
                            <img src={snifterlylogo2} alt='' width='100%' style={{ borderRadius: '2.2rem' }} />
                        </Col>
                    </Row>

                    <Row style={{ display: 'flex', marginTop: '9rem', marginBottom: '1.5rem' }}>
                        <Col style={{ display: 'flex', color: 'black', flexDirection: 'column', textAlign: 'initial', alignItems: 'flex-start', maxWidth: '65%', marginRight: '4rem' }}>
                            <div style={{ display: 'flex', alignContent: 'space-around', alignItems: 'baseline' }}>
                                <h1 style={{ marginBottom: '5%', marginRight: '0.5rem' }}>Reciclaje</h1>
                                <button onClick={() => agregarAFavoritos()} style={{ paddingBottom: '0.15rem', backgroundColor: 'transparent', borderColor: 'transparent' }}>
                                    {
                                        !favorito ? <Icon icon="icon-park-outline:like"></Icon> : <Icon icon="icon-park-solid:like" style={{ color: "#c41b1b" }}></Icon>
                                    }
                                </button>
                            </div>
                            <p style={{ fontSize: '1.3rem' }}>Para promover las prácticas de reciclaje surge ... un sitio en el cual busca concientizar y educar para contribuir en el cuidado del medio ambiente. </p>
                            <button rel="noopener noreferrer" style={{ fontWeight: 'bold', letterSpacing: '1px', position: 'relative', background: 'beige', padding: '14px 24px', borderRadius: '22px', border: '4', borderColor: '#1c3d78', borderWidth: '2px', fontSize: '1rem', color: 'black', textDecoration: 'none' }}><a href={'https://github.com/MatheoYaco240/TP09--EFSI.git'} target="_blank" style={{ textDecoration: 'none', color: 'black' }}>Ver Repositorio</a></button>
                        </Col>
                        <Col style={{ marginLeft: '7rem', marginTop: '2rem' }}>
                            <img src={Reciclaje} alt='' width='50%' />
                        </Col>
                    </Row>

                    <Row style={{ display: 'flex', marginTop: '9rem' }}>
                        <Col style={{ display: 'flex', color: 'black', flexDirection: 'column', textAlign: 'initial', alignItems: 'flex-start', maxWidth: '65%', marginRight: '4rem' }}>
                            <div style={{ display: 'flex', alignContent: 'space-around', alignItems: 'baseline' }}>
                                <h1 style={{ marginBottom: '5%', marginRight: '0.5rem' }}>The Sandbox</h1>
                                <button onClick={() => agregarAFavoritos()} style={{ paddingBottom: '0.15rem', backgroundColor: 'transparent', borderColor: 'transparent' }}>
                                    {
                                        !favorito ? <Icon icon="icon-park-outline:like"></Icon> : <Icon icon="icon-park-solid:like" style={{ color: "#c41b1b" }}></Icon>
                                    }
                                </button>
                            </div>
                            <p style={{ fontSize: '1.3rem' }}>The SandBox es un prototipo hecho en Figma, basado en las estrevistas hechas a un cliente relacionadas con el Metaverso.</p>
                            <button rel="noopener noreferrer" style={{ fontWeight: 'bold', letterSpacing: '1px', position: 'relative', background: 'beige', padding: '14px 24px', borderRadius: '22px', border: '4', borderColor: '#1c3d78', borderWidth: '2px', fontSize: '1rem', color: 'black', textDecoration: 'none' }}><a href={'https://www.figma.com/proto/K7keqvuTEqWNtKLHJt5YeN/EFSI---Prototipado-alta?node-id=107-69&starting-point-node-id=107%3A69'} target="_blank" style={{ textDecoration: 'none', color: 'black' }}>Ver Proyecto</a></button>
                        </Col>
                        <Col style={{ marginTop: '3rem' }}>
                            <img src={thesandbox2} alt='' width='100%' />
                        </Col>
                    </Row>

                    <Row style={{ display: 'flex', marginTop: '9rem' }}>
                        <Col style={{ display: 'flex', color: 'black', flexDirection: 'column', textAlign: 'initial', alignItems: 'flex-start', maxWidth: '65%', marginRight: '4rem' }}>
                            <div style={{ display: 'flex', alignContent: 'space-around', alignItems: 'baseline' }}>
                                <h1 style={{ marginBottom: '5%', marginRight: '0.5rem' }}>Librería</h1>
                                <button onClick={() => agregarAFavoritos()} style={{ paddingBottom: '0.15rem', backgroundColor: 'transparent', borderColor: 'transparent' }}>
                                    {
                                        !favorito ? <Icon icon="icon-park-outline:like"></Icon> : <Icon icon="icon-park-solid:like" style={{ color: "#c41b1b" }}></Icon>
                                    }
                                </button>
                            </div>
                            <p style={{ fontSize: '1.3rem' }}>El usuario podrá crear Libros en los cuales podrá personalizar la portada, personajes, agregar descripción y dejar reseñas. </p>
                            <button rel="noopener noreferrer" style={{ fontWeight: 'bold', letterSpacing: '1px', position: 'relative', background: 'beige', padding: '14px 24px', borderRadius: '22px', border: '4', borderColor: '#1c3d78', borderWidth: '2px', fontSize: '1rem', color: 'black', textDecoration: 'none' }}><a href={'https://github.com/sofygb/TP09.git'} target="_blank" style={{ textDecoration: 'none', color: 'black' }}>Ver Repositorio</a></button>
                        </Col>
                        <Col>
                            <img src={Logo} alt='' width='60%' />
                        </Col>
                    </Row>

                    <Row style={{ display: 'flex', marginTop: '9rem' }}>
                        <Col style={{ display: 'flex', color: 'black', flexDirection: 'column', textAlign: 'initial', alignItems: 'flex-start', maxWidth: '65%', marginRight: '4rem' }}>
                            <div style={{ display: 'flex', alignContent: 'space-around', alignItems: 'baseline' }}>
                                <h1 style={{ marginBottom: '5%', marginRight: '0.5rem' }}>Proyecto 1</h1>
                                <button onClick={() => agregarAFavoritos()} style={{ paddingBottom: '0.15rem', backgroundColor: 'transparent', borderColor: 'transparent' }}>
                                    {
                                        !favorito ? <Icon icon="icon-park-outline:like"></Icon> : <Icon icon="icon-park-solid:like" style={{ color: "#c41b1b" }}></Icon>
                                    }
                                </button>
                            </div>
                            <p style={{ fontSize: '1.3rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie lacus malesuada est commodo, at aliquet leo sodales. Donec ac neque at arcu suscipit ullamcorper. Phasellus venenatis dui vel eros faucibus, vel porttitor eros finibus. Sed bibendum, justo quis sagittis vulputate, augue lorem bibendum dolor, nec congue enim lacus ut quam. </p>
                            <button rel="noopener noreferrer" style={{ fontWeight: 'bold', letterSpacing: '1px', position: 'relative', background: 'beige', padding: '14px 24px', borderRadius: '22px', border: '4', borderColor: '#1c3d78', borderWidth: '2px', fontSize: '1rem', color: 'black', textDecoration: 'none' }}><a href={''} target="_blank" style={{ textDecoration: 'none', color: 'black' }}>Ver Repositorio</a></button>
                        </Col>
                        <Col>
                            <img src={Proyecto1} alt='' width='100%' />
                        </Col>
                    </Row>

                    <Row style={{ display: 'flex', marginTop: '9rem' }}>
                        <Col style={{ display: 'flex', color: 'black', flexDirection: 'column', textAlign: 'initial', alignItems: 'flex-start', maxWidth: '65%', marginRight: '4rem' }}>
                            <div style={{ display: 'flex', alignContent: 'space-around', alignItems: 'baseline' }}>
                                <h1 style={{ marginBottom: '5%', marginRight: '0.5rem' }}>CheckList</h1>
                                <button onClick={() => agregarAFavoritos()} style={{ paddingBottom: '0.15rem', backgroundColor: 'transparent', borderColor: 'transparent' }}>
                                    {
                                        !favorito ? <Icon icon="icon-park-outline:like"></Icon> : <Icon icon="icon-park-solid:like" style={{ color: "#c41b1b" }}></Icon>
                                    }
                                </button>
                            </div>
                            <p style={{ fontSize: '1.3rem' }}>Check es una app móvil que permite registrar tareas/tasks y marcar si están completadas.</p>
                            <button rel="noopener noreferrer" style={{ fontWeight: 'bold', letterSpacing: '1px', position: 'relative', background: 'beige', padding: '14px 24px', borderRadius: '22px', border: '4', borderColor: '#1c3d78', borderWidth: '2px', fontSize: '1rem', color: 'black', textDecoration: 'none' }}><a href={'https://github.com/sofygb/TP06---DAI.git'} target="_blank" style={{ textDecoration: 'none', color: 'black' }}>Ver Repositorio</a></button>
                        </Col>
                        <Col style={{ marginBottom: '20rem' }}>
                            <img src={check} alt='' width='30%' />
                        </Col>
                    </Row>
                </Container>
                <footer style={{ display: 'flex', padding: '1.5%', backgroundColor: '#1c3d78', color: 'white', flexDirection: 'column' }}>
            <div style={{ marginLeft: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                <Row style={{ display: 'flex', marginTop: '1rem', marginBottom: '0.5rem' }}>
                    <Col style={{ display: 'flex', color: 'white', flexDirection: 'column', textAlign: 'initial', alignItems: 'flex-start', marginRight: '4rem' }} md={4}>
                        <div>
                            <h4>Contacto</h4>
                            <p>Gmail: myacovino1@gmail.com</p>
                            <p>Teléfono: + 54 911 2865-3947</p>
                        </div>
                    </Col>
                    <Col style={{ display: 'flex', color: 'white', flexDirection: 'column', textAlign: 'initial', alignItems: 'flex-start', marginRight: '4rem' }} md={4}>
                        <div>
                            <h4>Mis Redes</h4>
                            <a href='https://www.instagram.com/matheo.yacovino/' style={{ color: 'white', textDecoration: 'none' }} target="_blank">Instagram</a><br />
                            <p><a href='https://twitter.com/MatheoYaco' style={{ color: 'white', textDecoration: 'none' }} target="_blank">Twitter</a></p>
                        </div>
                    </Col>
                    <Col style={{ display: 'flex', color: 'white', flexDirection: 'column', textAlign: 'initial', alignItems: 'flex-start', marginRight: '4rem' }} md={4}>
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
            </div>
        </>
    )
}


export default Home;