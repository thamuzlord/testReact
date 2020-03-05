import React from 'react'
import millisToMinutesAndSeconds from '../../utils/utils'
import PropTypes from 'prop-types';

const Song = ({ id, name, duration_ms }) => (
    <tr>
        <th>{id}</th>
        <th>{name}</th>
        <th>{millisToMinutesAndSeconds(duration_ms)}</th>
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