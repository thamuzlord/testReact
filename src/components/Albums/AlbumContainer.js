import React, { useState, useEffect } from 'react'
import Album from './Album'
import { getAlbums } from '../../services/albums'

const AlbumContainer = (props) => {
  const [albumList, setAlbumList] = useState([]);

  async function fetchData() {
    const id = props.match.params.id
    const data = await getAlbums(id)
    setAlbumList(data[0].albums)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="container albumes">
      <h2 className="song-name">Álbumes</h2><hr />
      {
        albumList.map((album) => <Album {...album} key={album.id} />)
      }
    </section>
  );
};

export default AlbumContainer;