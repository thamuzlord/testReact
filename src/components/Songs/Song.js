import React from 'react'
import millisToMinutesAndSeconds from '../../utils/utils'
import PropTypes from 'prop-types';

const Song = ({ id, name, duration_ms, spotify_url }) => (
    <tr>
        <th>{id}</th>
        <th>{name}</th>
        <th><a href={spotify_url} target='_blank' className="play-button"></a><span>{millisToMinutesAndSeconds(duration_ms)}</span></th>
    </tr>
)

Song.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    preview_url: PropTypes.string,
    spotify_url: PropTypes.string,
    duration_ms: PropTypes.string,
}

export default Song