import React, { useState, useEffect } from 'react'
import Song from './Song'
import { getSongs } from '../../services/songs'

const SongsContainer = (props) => {
  const [songList, setSongs] = useState([]);

  async function fetchData() {
    const id = props.match.params.id;
    const data = await getSongs(id)
    setSongs(data[0].songs)
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
            songList.map((song) => <Song {...song} key={song.id} />)
          }
        </tbody>
      </table>
    </section>
  );
};

export default SongsContainer;