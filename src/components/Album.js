import React from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const Album = ({id, name, image, spotify_url, total_tracks}) => (
    <div className="music-box">
        <div className="music-info">
            <div className="music-img">
                <img src={image} alt={name} />
            </div>
            <div className="music-name">
                <h6 className="song-name">{name}</h6>
                <p className="song-name">Canciones: {total_tracks}</p>
            </div>
            <div className="music-play">
            <Link to={`/CancionContainer/${id}`}><div className="play-button"></div></Link>
            </div>
        </div><hr />
    </div>
)

Album.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    spotify_url: PropTypes.string,
    total_tracks: PropTypes.number,
}

export default Album