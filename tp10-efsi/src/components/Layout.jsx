import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Badge } from "@mui/material";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { createSvgIcon } from '@mui/material/utils';
import { getData } from "../Consultas";
import { useState } from "react";
import Footer from "./Footer";

const Layout = () => {
    const infoUsuario = window.localStorage

    useEffect(() => {
        localStorage.setItem("InfoUsuario", JSON.stringify({
            idUsuario: -1,
            favoritos: []
        }));
    },[])
    
    useEffect(() => {
        traerListaFavoritos()
    }, [])

    const { favoritos = [], idUsuario = -1 } = JSON.parse(localStorage.getItem("InfoUsuario")) || {};
    const [listaFavoritos, setListaFavoritos] = useState([])

    const PlusIcon = createSvgIcon(
        // credit: plus icon from https://heroicons.com/
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>,
        'Plus',
      );

      const traerListaFavoritos = async () => {
        const data = await getData()
        setListaFavoritos(data)
    }
    /* 
    {
        idUsuario: int,
        favoritos: [{}]
    }

    const { historial = [], idActivo = -1 } = JSON.parse(localStorage.getItem("Historial")) || {};
    const newData = {
      historial:[...historial, {
      producto: document.getElementById("id").value,
      nombreTacho: nombreTacho,
      fecha: new Date()
    }],
      idActivo: idActivo || -1
    }
    setHistorial2(newData)
    localStorage.setItem("Historial", JSON.stringify(newData)); AZUL #1c3d78
    */

    return (
        <>
            <link rel='stylesheet' href="Styles.css" />
            <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
            <div className="App">
                <nav
                    style={{display: 'flex', backgroundColor:'beige', borderBottomStyle: 'solid',
                    borderBottomColor: 'black',
                    borderBottomWidth:'0.12rem'}}
                    className="navbar navbar-expand-lg"
                >
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginTop: "0.1rem", marginBottom: "0.5rem"}}>
                        <ul className="navbar-nav mr-auto" style={{fontSize: "1rem"}}>
                            <li className="nav-item active" style={{ marginRight: "8%", marginLeft: "1.2rem" }}>
                                <a
                                    className="navbar-brand"
                                    href="/home"
                                    style={{ fontSize: "1.45rem"}}
                                    >
                                    <Icon icon="mingcute:arrow-left-fill" style={{color: 'black'}}></Icon>
                                </a>
                            </li>
                            <li className="nav-item" style={{ marginRight: "8%" }}>
                                <a className="nav-link" href="/info-personal" style={{  color: 'black' }}>
                                    Información
                                </a>
                            </li>
                            <li className="nav-item" style={{ marginRight: "8%", minWidth: '40%' }}>
                                <a className="nav-link" href="/mis-creaciones" style={{  color: 'black' }}>
                                    Mis Creaciones
                                </a>
                            </li>
                            <li className="nav-item" style={{ marginRight: "8%" }}>
                                <a className="nav-link" href="/favoritos" style={{  color: 'black' }}>
                                    Favoritos
                                </a>
                            </li>
                            <li className="nav-item" style={{ marginRight: "8%" }}>
                                <a className="nav-link" href="/perfil" style={{  color: 'black' }}>
                                    Perfil
                                </a>
                            </li>
                            <li className="nav-item" style={{ marginRight: "8%", display: 'flex', alignItems: 'center' }}>
                                    <Badge badgeContent={listaFavoritos.length || 0} color="primary">
                                        <Icon icon="icon-park-solid:like" style={{ color: "black"}}></Icon>
                                    </Badge>
                            </li>
                        </ul>
                    </div>
                </nav>
                <header
                    className="App-header"
                    style={{
                        backgroundColor:
                            'beige',
                        paddingTop: "4%",
                    }}
                >
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                        crossOrigin="anonymous"
                    />

                    <Outlet />

                </header>
                <Footer />
            </div>
        </>
    )
}

export default Layout