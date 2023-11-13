import React from "react";
import { useEffect } from "react";
import Snifterly from '../img/snifterly.PNG'
import SandBox from '../img/the-sandbox.PNG'
import check from '../img/check.png'
import Logo from '../img/Logo.png'
import Reciclaje from '../img/Reciclaje.PNG'
import Cat from '../img/FindDaCat.png'

export const CreationContext = React.createContext();

const CreationProvider = (props) => {
    const [creaciones, setCreaciones] = React.useState([
        {
            idCreacion: 1,
            nombre: 'Snifterly',
            descripcion: 'Snifterly es una aplicación mobile con el objetivo de promover el consumo responsable de alcohol. La aplicación trabaja con un sistema organizado por jornadas (un período de tiempo en el cual el usuario va a estar ingiriendo bebidas) donde se podrá medir la cantidad de alcohol que uno tiene en su organismo, utilizando un dispositivo alcoholímetro con bluetooth integrado. La app registrará la medición, la duración de la jornada, y el recorrido de su consumo, permitiendo al usuario observar sus hábitos comprensiblemente.',
            imagen: Snifterly,
            repositorio: 'https://github.com/sofygb/Snifterly'
        },
        {
            idCreacion: 2,
            nombre: 'The SandBox',
            descripcion: 'The SandBox es un prototipo hecho en Figma, basado en las estrevistas hechas a un cliente relacionadas con el Metaverso.',
            imagen: SandBox,
            repositorio: 'https://www.figma.com/proto/K7keqvuTEqWNtKLHJt5YeN/EFSI---Prototipado-alta?node-id=107-69&starting-point-node-id=107%3A69'
        },
        {
            idCreacion: 3,
            nombre: 'Reciclaje Plus',
            descripcion: 'Para promover las prácticas de reciclaje surge Reciclaje Plus, un sitio web el cual busca concientizar y educar para contribuir en el cuidado del medio ambiente. El sitio brinda información sobre los tachos que existen en la actualidad y también uno puede ingresar un producto y el sitio te dirá en qué tacho/s se pueden tirar y por qué.',
            imagen: Reciclaje,
            repositorio: 'https://github.com/MatheoYaco240/TP09--EFSI.git'
        },
        {
            idCreacion: 4,
            nombre: 'Librería',
            descripcion: 'El usuario podrá crear Libros en los cuales podrá personalizar la portada, personajes, agregar descripción y dejar reseñas.',
            imagen: Logo,
            repositorio: 'https://github.com/sofygb/TP09.git'
        },
        {
            idCreacion: 5,
            nombre: 'CheckList - To-Do List',
            descripcion: 'CheckList es una app móvil que permite registrar tareas/tasks y marcar si están completadas. Una aplicación funcional que sirve para no olvidar las tareas que uno tiene que hacer durante el día o la semana.',
            imagen: check,
            repositorio: 'https://github.com/sofygb/TP06---DAI.git'
        },
        {
            idCreacion: 6,
            nombre: "Find da' Cat",
            descripcion: "Find da' Cat es un prototipo de una aplicación mobile que permite encontrar gatos perdidos, adoptarlos o ponerlos en adopción. La aplicación permite registrar un gato perdido, buscar gatos perdidos en un mapa y un sistema de chats entre las personas que ofrecen los gatos y los que quieren adoptarlos. También cuenta con una pestaña de comunidad en donde los usuarios pueden compartir fotos de sus gatos, comentar las fotos de los demás, pedir sugerencias, etc. Por último, una pestaña de información acerca de la correcta alimentación y cuidado de los gatos.",
            imagen: Cat,
            repositorio: "https://www.figma.com/proto/yn9cQU9Vw0e5dgHUSTHpNx/Prototipo-media%2Falta---Find-da'-Cat?node-id=17-47&starting-point-node-id=17%3A47&mode=design&t=6TrmnhVubPgQzcSL-1"
        }
    ]);


    return <CreationContext.Provider value={{ creaciones, setCreaciones }}>{props.children}</CreationContext.Provider>
}

export default CreationProvider;