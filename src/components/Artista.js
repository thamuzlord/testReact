import React from 'react'
import PropTypes from 'prop-types';

const Artista = ({name, image}) => (
    <div  id="container">
        <img className="img-circle" src={image} alt={name} />
        <h3 className="centeredText">{name}</h3>
    </div>
)


Artista.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
}

export default Artista