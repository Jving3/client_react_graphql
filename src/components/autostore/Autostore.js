import React, {useEffect} from 'react';
import { gql, useQuery } from '@apollo/client';
//import {BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import Barra from '../layout/Barra';
import '../../index.css';

const OBTENER_AUTOSTORE = gql`
query{
    obtenerUsuario {
      nombre
    }
  }
`;

const AutoStore = () => {

    const {data, loading, error, startPolling, stopPolling} = useQuery(OBTENER_AUTOSTORE);

  useEffect(() => {
      startPolling(1000);
      return () => {
          stopPolling();
      }
  }, [startPolling, stopPolling])

  if(loading) return 'cargando...';
    console.log(loading)
    console.log(error)
  
    if (loading) return 'Cargando..';
    console.log(data.obtenerUsuario);

    const {obtenerUsuario} = data;
    console.log(obtenerUsuario);



    return ( 
        <div > 
        

            <div>
                <main>
                   <Barra/>
                    <div className="contenedor-evento">
                        <h1>Desde AutoStore</h1>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default AutoStore;