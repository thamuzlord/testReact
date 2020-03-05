import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const Album = ({ id, name, image, total_tracks }) => (
    <Link to={`/songs/${id}`}>
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
                    <div className="play-button"></div>
                </div>
            </div><hr />
        </div>
    </Link>
)

Album.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    spotify_url: PropTypes.string,
    total_tracks: PropTypes.number,
}

export default Album