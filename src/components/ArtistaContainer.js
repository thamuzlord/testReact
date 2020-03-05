import React, {useState, useEffect} from 'react'
import Artista from './Artista'
import { getArtistas } from '../services/artistas'

const ArtistaContainer = () => {
    const [artistas, setArtistas] = useState([]);
  
    async function fetchData() {
      const data = await getArtistas()
      setArtistas(data)    
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
        <section>
          {                        
              artistas.map((artista) => <Artista image={artista.image} name={artista.name} id={artista.id} key={artista.id} />)
          }
        </section>
    );
  };
  
export default ArtistaContainer;