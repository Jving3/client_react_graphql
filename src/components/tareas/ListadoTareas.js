import { Fragment } from "react/cjs/react.production.min";
import Tarea from "./Tarea";


const ListadoTareas = () => {

        const tareasProyecto = [
            {nombre: 'Elección de KPI´s', estado: true},
            {nombre: 'Diseño de Formulas', estado: false},
            {nombre: 'Acceso a Bases de Datos', estado: false},
            {nombre: 'Diseño Front-end', estado: true},
        ]

    return ( 
        <Fragment>
            <h2>Sistema de Gestión</h2>

            <ul className="listado-tareas">
            {tareasProyecto.length === 0 
               ? (<li className="tarea"><p>No hay tareas</p></li>) 
                : tareasProyecto.map( tarea => (
                    <Tarea 
                        tarea={tarea}
                    />
                ))
            }
            </ul>

            <button     
                type="button"
                className="btn btn-eliminar"
               
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;