import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {

// Extrar proyectos de state inicial
const proyectosContext = useContext(proyectoContext);
const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

// revisar si proyectos tiene contenido
if(proyectos.length === 0 ) return <p>No hay proyectos, comienza creando uno</p>;
 
    return ( 

        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                    key={proyecto._id}
                    proyecto={proyecto}
                />
            ))}
            
        </ul>
     );
}
 
export default ListadoProyectos;