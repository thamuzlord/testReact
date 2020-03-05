import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Artist = ({ image, name, id }) => (
    <Link to={`/albums/${id}`}>
        <div id="container">
            <img className="img-circle" src={image} alt={name} />
            <h3 className="centeredText" id={id}>
                {name}
            </h3>
        </div>
    </Link>
)

Artist.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
}

export default Artist