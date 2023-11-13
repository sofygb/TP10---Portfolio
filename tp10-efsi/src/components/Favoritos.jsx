import { useState, useEffect, useContext } from "react"
import { CreationContext } from '../context/CreationContext'
import { getData, setFavoritos, deleteFavoritos } from '../Consultas';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Icon } from '@iconify/react';

const Favoritos = () => {
    const { creaciones } = useContext(CreationContext)
    const [listaFavoritos, setListaFavoritos] = useState(null)
    const [llegaronLosValores, setLlegaronLosValores] = useState(false)
    const [favorito, setFavorito] = useState(null)

    const traerListaFavoritos = async () => {
        const data = await getData()
        setListaFavoritos(data)
    }
    
    const agregarAFavoritos = (id) => { //Recibe el idCreacion
        const elId = parseInt(id)
        const creacion = creaciones.findIndex((item) => item.idCreacion === elId) //ID de la creacion en la lista de todas las creaciones
        const idPosicion = listaFavoritos.findIndex((item) => item.idCreacion === elId) //Posición de la creacion en el array de favoritos
        if(creacion !== -1){
            var listaBool = favorito
            if(favorito[idPosicion].favorito){
                //setFavorito(favorito[id] ? false : true)
                setListaFavoritos(listaFavoritos.filter((item) => item.idCreacion !== elId))
                listaBool[idPosicion].favorito = false
                setFavorito(listaBool)
                deleteFavoritos(creaciones[creacion])
            }
            else{
                setListaFavoritos([...listaFavoritos ,creaciones[creacion]])
                listaBool[elId-1].favorito = true
                setFavorito(listaBool)
                setFavoritos(creaciones[creacion])
            }
        }
        else{
            console.error("No se encontró la creación, ID: " + id)
        }
    }

    useEffect(() => {
        traerListaFavoritos()
        console.log(listaFavoritos)
    }, [])

    useEffect(() => {
        if (listaFavoritos != null) {
            var listaBool = []
            listaFavoritos.map((creacion) => {
                listaBool = [...listaBool, {
                    id: creacion.idCreacion,
                    favorito: true
                }]
            })
            setFavorito(listaBool)
            console.log("ListaBooleanos: " + favorito)
            if (listaBool != []) {
                setLlegaronLosValores(true)
            }
        }
    }, [listaFavoritos])

    return (
        <Container style={{ backgroundColor: 'beige', paddingLeft: '4rem', paddingRight: '4rem' }}>
            <h1 style={{ color: 'black', marginBottom: '10%', fontSize: '3rem' }}>Lista de Favoritos</h1>
            {listaFavoritos != null &&
                listaFavoritos.map((creacion, index) =>
                    <>
                        <Row style={{ display: 'flex', marginTop: '7rem' }}>
                            <Col style={{ display: 'flex', color: 'black', flexDirection: 'column', textAlign: 'initial', alignItems: 'flex-start', maxWidth: '65%', marginRight: '2rem' }}>
                                <div id={parseInt(creacion.id)} style={{ display: 'flex', alignContent: 'space-around', alignItems: 'baseline' }}>
                                    <h1 style={{ marginBottom: '5%', marginRight: '0.5rem' }}>{creacion.nombre}</h1>
                                    <button id={creacion.idCreacion} key={creacion.id} onClick={(e) => agregarAFavoritos(e.currentTarget.id)} style={{ paddingBottom: '0.3rem', backgroundColor: 'transparent', borderColor: 'transparent' }}> {/*NO SE GUARDA EL ID, VER ESTO*/}
                                        {
                                            favorito != null &&
                                                !favorito[index].favorito ? <Icon icon="icon-park-outline:like" style={{ paddingBottom: '0.4rem' }}></Icon> : <Icon icon="icon-park-solid:like" style={{ color: "#c41b1b", paddingBottom: '0.4rem' }}></Icon>
                                        }
                                    </button>
                                </div>
                                <p style={{ fontSize: '1.3rem' }}>{creacion.descripcion}</p>
                                <button rel="noopener noreferrer" style={{ fontWeight: 'bold', letterSpacing: '1px', position: 'relative', background: 'beige', padding: '14px 24px', borderRadius: '22px', border: '4', borderColor: '#1c3d78', borderWidth: '2px', fontSize: '1rem', color: 'black', textDecoration: 'none' }}><a href={creacion.repositorio} target="_blank" style={{ textDecoration: 'none', color: 'black' }}>Ver Repositorio</a></button>
                            </Col>
                            <Col>
                                <img src={creacion.imagen} alt='' width='100%' />
                            </Col>
                        </Row><br></br><br></br><br></br>
                    </>
                )
            }
            {
                listaFavoritos != null && listaFavoritos.length === 0 &&
                <i style={{color: 'black'}}>¡Agrega mis creaciones a tu lista de favoritos!</i>
            }
        </Container>
    )
}

export default Favoritos;