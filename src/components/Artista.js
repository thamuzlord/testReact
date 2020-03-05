import React from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Artista = ({image, name, id}) => (
    <Router>
        <div  id="container">
            <img className="img-circle" src={image} alt={name} />
            <h3 className="centeredText" id={id}><Link to={`/AlbumContainer/${id}`}>{name}</Link></h3>
        </div>
    </Router>
)

Artista.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
}

export default Artista