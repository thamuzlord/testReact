import React, {useState, useEffect} from 'react'
import Album from './Album'
import { getAlbumes } from '../services/albumes'

const AlbumContainer = ({match:{params:{id}}}) => {
    const [albumes, setAlbumes] = useState([]);
  
    async function fetchData() {
      const data = await getAlbumes(id)
      setAlbumes(data[0].albums)
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
            <section className="container albumes">
                <h2 className="song-name">Álbumes</h2><hr/>
                {                        
                    albumes.map((album) => <Album image={album.image} name={album.name} id={album.id} spotify_url={album.spotify_url} total_tracks={album.total_tracks} key={album.id} />)
                }
            </section>
    );
  };
  
export default AlbumContainer;