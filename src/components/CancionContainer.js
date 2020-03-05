import React, {useState, useEffect} from 'react'
import Cancion from './Cancion'
import { getCanciones } from '../services/canciones'

const CancionContainer = ({match:{params:{id}}}) => {
    const [canciones, setCanciones] = useState([]);
  
    async function fetchData() {
      const data = await getCanciones(id)
      setCanciones(data[0].songs)
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
            <section className="container">
                <h2 className="song-name">Canciones</h2>
                <table className="table tabla-canciones">
                  <tbody>
                    {                        
                        canciones.map((cancion) => <Cancion preview_url={cancion.preview_url} name={cancion.name} id={cancion.id} spotify_url={cancion.spotify_url} duration_ms={cancion.duration_ms} key={cancion.id} />)
                    }
                  </tbody>
                </table>
            </section>
    );
  };
  
export default CancionContainer;