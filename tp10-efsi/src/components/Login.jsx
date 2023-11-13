import React, { useState, useEffect } from 'react';
import '../css/Styles.css'
import { getUsuarios, getUsuarioByMailContrasenia, setUsuarioActual } from '../Consultas';
import { Route, redirect } from 'react-router-dom';

const Login = () => {
    
    React.useEffect(()=>{
        traerUsuarios()
    },[])
    
    const [email, setEmail] = React.useState("admin")
    const [password, setPassword] = React.useState("admin")
    
    const [typeInput, setTypeInput] = React.useState("password")

    const [usuarios, setUsuarios] = React.useState(null)
    
    const [href, setHref] = React.useState("#")

    const [seguir, setSeguir] = React.useState(false)
    
    const traerUsuarios = async () => {
        const data = await getUsuarios()
        setUsuarios(data)
        console.log(data)
    }

    const mostrarPassword = () => {
        const togglePassword = document.querySelector("#togglePassword");
        //const password = document.querySelector("#password");

        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            //const type = password.getAttribute("type") === "password" ? "text" : "password";
            const type = typeInput === "password" ? "text" : "password";
            //password.setAttribute("type", type);
            setTypeInput(type);

            // toggle the icon
            //this.classList.toggle("bi-eye");
        });
    }

    const validacion = () => {
        const posicion = usuarios.findIndex((usuario) => usuario.email === email && usuario.contrasenia === password)
        if(posicion != -1){
            const data = setUsuarioActual(usuarios[posicion].email, usuarios[posicion].contrasenia) || null
            data != null && setHref("/home")
        }
        else{
            console.error("Error: Usuario no econtrado")
            setHref("#")
        }
    }

    return (
        <>
            <link rel='stylesheet' href="Styles.css" />
            <div className="App">
                <div
                    className="App-header"
                    style={{
                        backgroundColor:
                            'beige',
                    }}
                >

<h1 style={{ fontWeight: 'bold', fontSize: '3rem', marginBottom: '5%', color: 'black' }}>Inicio de Sesión</h1>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', marginBottom: '2%', textAlign: 'left', color: 'black', fontSize: '1.5rem'}}>
    <label htmlFor="email">Email:</label>
    <input id="email" type="text" placeholder="admin" style={{marginBottom: '5%'}} value={email} onChange={(e) => setEmail(e.target.value)}/>

    <label htmlFor="email">Contraseña:</label>
    <div>
        <input name="password" id="password" type={typeInput} placeholder="admin" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button style={{ cursor: "pointer" }} className="bi bi-eye-slash" id="togglePassword" onClick={mostrarPassword}>𓂀</button>
    </div>
</div>

<a style={{ fontSize: '1rem', backgroundColor: 'rgb(28, 61, 120)', padding: '1rem', color: 'white', textDecoration: 'none', borderRadius: '15%'}} onClick={() => validacion()} href={href} className='btn text-light'>Iniciar Sesión</a>

                </div>
                <footer style={{ display: 'flex', padding: '2%', backgroundColor: '#1c3d78' }}>

                </footer>
            </div>
        </>
    )
}

export default Login;