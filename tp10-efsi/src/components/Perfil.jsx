import { useContext, useEffect, useState } from "react"
import { UsuarioContext } from "../context/UsuarioContext"
import { getUsuarios, getUsuarioByMailContrasenia, setUsuarioActual } from '../Consultas';
import Footer from "./Footer";

const Perfil = () => {
    const [usuarios, setUsuarios] = useState(null)

    const [usuarioActivo, setUsuarioActivo] = useState(null)

    const [href, setHref] = useState("#")

    const traerUsuarios = async () => {
        const data = await getUsuarios()
        setUsuarios(data)
        console.log(data)
    }

    useEffect(() => {
        traerUsuarios()
    }, [])

    useEffect(() => {
        if (usuarios != null) {
            const elUsuario = usuarios.filter((usuario) => usuario.activo === true)
            setUsuarioActivo(elUsuario[0])
        }
    }, [usuarios])

    const cerrarSesion = () => {
        const data = setUsuarioActual(usuarioActivo.email, usuarioActivo.contrasenia)
        data != null && setHref("/")
    }

    return (
        <>
            <h1 style={{ color: 'black', marginBottom: '10%', fontSize: '3rem' }}>Perfil</h1>
            <div style={{ color: 'black', marginBottom: '2%', display: 'flex',marginBottom: '2%',flexDirection: 'column',alignItems: 'flex-start' }}>
                <p>Nombre: <i>{usuarioActivo != null ? usuarioActivo.nombre : '-'}</i></p>
                <p>Email: <i>{usuarioActivo != null ? usuarioActivo.email : '-'}</i></p>
                <p>Contraseña: <i>{usuarioActivo != null ? usuarioActivo.contrasenia : '-'}</i></p>
            </div>
            {
                usuarioActivo != null &&
            <a onClick={() => { cerrarSesion() }} href={href}>Log Out</a>
            }

        </>
    )
}

export default Perfil;