import React, { useState, useEffect } from 'react'
import Artist from './Artist'
import { getArtists } from '../../services/artists'

const ArtistsContainer = () => {
  const [artistList, setArtist] = useState([]);

  async function fetchData() {
    const data = await getArtists()
    setArtist(data)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      {
        artistList.map((artist) => <Artist image={artist.image} name={artist.name} id={artist.id} key={artist.id} />)
      }
    </section>
  );
};

export default ArtistsContainer;