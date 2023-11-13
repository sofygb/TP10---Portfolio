import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getData } from "../Consultas";


export const UsuarioContext = React.createContext();


const UsuarioProvider = (props) => {
    const [listaFavoritos, setListaFavoritos] = useState(null)
    const [usuarios, setUsuarios] = React.useState([
        {
            nombre: 'admin',
            email: 'admin',
            contrasenia: 'admin',
            activo: false
        }
    ]);

    useEffect(() => {

    },[])
    
    const traerListaFavoritos = async () => {
        const data = await getData()
        setListaFavoritos(data)
    }

    return <UsuarioContext.Provider value={{ usuarios, setUsuarios }}>{props.children}</UsuarioContext.Provider>
}

export default UsuarioProvider;

