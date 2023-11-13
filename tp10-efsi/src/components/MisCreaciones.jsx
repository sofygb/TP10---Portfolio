import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Proyecto1 from '../img/Proyecto1.jpg'
import { CreationContext } from '../context/CreationContext'
import { useContext, useState } from 'react';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { getData, setFavoritos, deleteFavoritos } from '../Consultas';
import { useSearchParams } from 'react-router-dom';

const MisCreaciones = () => {
    const { creaciones } = useContext(CreationContext)
    const [listaFavoritos, setListaFavoritos] = useState([])
    const [llegaronLosValores, setLlegaronLosValores] = useState(false)

    console.log(creaciones)

    const [favorito, setFavorito] = useState([{id: 0, favorito: false}])
    /* 
        Estructura:
        [
            {
                id: 1
                favorito: false
            }
        ]
    */
   const refrescarListaBool = () => {
    var listaBool = []
    creaciones.map((creacion) => {
        listaFavoritos.findIndex((item) => item.idCreacion === creacion.idCreacion) !== -1 ?
        listaBool = [...listaBool, {
            id: creacion.idCreacion,
            favorito: true
        }]
        :
        listaBool = [...listaBool, {
            id: creacion.idCreacion,
            favorito: false
        }]
    })
    setFavorito(listaBool)
   }

    const agregarAFavoritos = (id) => {
        const elId = parseInt(id)
        const creacion = creaciones.findIndex((item) => item.idCreacion === elId)
        const idPosicion = listaFavoritos.findIndex((item) => item.idCreacion === elId) //Posición de la creacion en el array de favoritos
        if(creacion !== -1){
            var listaBool = favorito
            if(favorito[creacion].favorito){
                //setFavorito(favorito[id] ? false : true)
                setListaFavoritos(listaFavoritos.filter((item) => item.idCreacion !== elId))
                listaBool[creacion].favorito = false
                setFavorito(listaBool)
                deleteFavoritos(creaciones[creacion])
            }
            else{
                setListaFavoritos([...listaFavoritos , creaciones[creacion]])
                listaBool[elId-1].favorito = true
                setFavorito(listaBool)
                setFavoritos(creaciones[creacion])
            }
        }
        else{
            console.error("No se encontró la creación, ID: " + id)
        }
    }
    
    const traerListaFavoritos = async () => {
        const data = await getData()
        setListaFavoritos(data)
        setLlegaronLosValores(true)
    }

    useEffect(() => {
        traerListaFavoritos()
        console.log(listaFavoritos)
    },[])
    
    useEffect(() => {
        if(!llegaronLosValores){
        }
        refrescarListaBool()
        //setLlegaronLosValores(true)
        console.log("ListaBooleanos: " + favorito)
    }, [listaFavoritos, llegaronLosValores])

    return (
        <>
            <Container style={{ backgroundColor: 'beige', paddingLeft: '4rem', paddingRight: '4rem' }}>
                {creaciones != null &&
                    creaciones.map((creacion, index) =>
                        <>
                            <Row style={{ display: 'flex', marginTop: '7rem' }}>
                                <Col style={{ display: 'flex', color: 'black', flexDirection: 'column', textAlign: 'initial', alignItems: 'flex-start', maxWidth: '65%', marginRight: '2rem' }}>
                                    <div id={parseInt(creacion.idCreacion)} style={{ display: 'flex', alignContent: 'space-around', alignItems: 'baseline' }}>
                                        <h1 style={{ marginBottom: '5%', marginRight: '0.5rem' }}>{creacion.nombre}</h1>
                                        <button id={creacion.idCreacion} key={creacion.idCreacion} onClick={(e) => agregarAFavoritos(e.currentTarget.id)} style={{ paddingBottom: '0.3rem', backgroundColor: 'transparent', borderColor: 'transparent' }}> {/*NO SE GUARDA EL ID, VER ESTO*/}
                                            {
                                                llegaronLosValores &&
                                                !favorito[index].favorito ? <Icon icon="icon-park-outline:like" style={{paddingBottom: '0.4rem'}}></Icon> : <Icon icon="icon-park-solid:like" style={{ color: "#c41b1b", paddingBottom: '0.4rem' }}></Icon>
                                            }
                                        </button>
                                    </div>
                                    <p style={{ fontSize: '1.3rem' }}>{creacion.descripcion}</p>
                                    <button rel="noopener noreferrer" style={{ fontWeight: 'bold', letterSpacing: '1px', position: 'relative', background: 'beige', padding: '14px 24px', borderRadius: '22px', border: '4', borderColor: '#1c3d78', borderWidth: '2px', fontSize: '1rem', color: 'black', textDecoration: 'none' }}><a href={creacion.repositorio} target="_blank" style={{textDecoration: 'none', color: 'black'}}>Ver Repositorio</a></button>
                                </Col>
                                <Col>
                                    <img src={creacion.imagen} alt='' width='100%' />
                                </Col>
                            </Row><br></br><br></br><br></br>
                        </>
                    )
                }
            </Container>
        </>
    )
}

export default MisCreaciones;