import React from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const Cancion = ({id, name, image, preview_url, spotify_url, duration_ms}) => (        
    <tr>
        <th>{id}</th>
        <th>{name}</th>
        <th>{duration_ms}</th>
    </tr>
)

Cancion.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    preview_url: PropTypes.string,
    spotify_url: PropTypes.string,
    duration_ms: PropTypes.string,
}

export default Cancion