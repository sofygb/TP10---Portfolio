//Puerto 3000 para el front, 3001 para el back
const API = `http://localhost:3001/favoritos`

const API2 = `http://localhost:3001/usuarios`
/* 
?nombre=
?descripcion=
?imagen=
*/

export const getData = async () => {
    const res = await fetch(API, {
        method: "GET",
    })
    console.log(res) 
    return await res.json()
}

export const getUsuarios = async () => {
    const res = await fetch(API2, {
        method: "GET",
    })
    console.log(res) 
    return await res.json()
}

export const getUsuarioByMailContrasenia = async (email, contrasenia) => {
    const res = await fetch(API2 + `?email=${email}&contrasenia=${contrasenia}`, {
        method: "GET",
    })
    console.log(res) 
    return await res.json()
}

export const setUsuarioActual = async (email,contrasenia) => { //TESTEAR
    var [usuario] = await getUsuarioByMailContrasenia(email, contrasenia)

    const res = await fetch(API2 + `/${usuario.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
         },
        body: JSON.stringify({
            'id': usuario.id,
            'nombre': usuario.nombre,
            'email': usuario.email,
            'contrasenia': usuario.contrasenia,
            'activo': usuario.activo ? false : true,
        })
    })
    console.log(res) 
    return await res.json()
}

export const setFavoritos = async (creacion) => {
    const res = await fetch(API + '/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
         },
        body: JSON.stringify({
            'idCreacion': creacion.idCreacion,
            'nombre': creacion.nombre,
            'descripcion': creacion.descripcion,
            'imagen': creacion.imagen,
            'respositorio': creacion.repositorio,
        })
    })
    console.log(res) 
    return await res.json()
}

export const deleteFavoritos = async (creacion) => { //Recibe la creacion de la lista de todas las creaciones, no tiene idCreacion
    const data = await getData()
    const index = data.findIndex((item) => item.idCreacion === creacion.idCreacion)
    const res = await fetch(API + `/${data[index].id}`, {
        method: "DELETE",
    })
    console.log(res) 
    return await res.json()
}