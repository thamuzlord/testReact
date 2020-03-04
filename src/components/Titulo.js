import React from 'react'
import PropTypes from 'prop-types';


const Titulo = ({children}) => <nav className="navbar navbar-expand-lg bg-nav shadow">
                                    <div className="container">
                                        <h3 className="navbar-brand">Prueba</h3>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarResponsive">
                                            <ul className="navbar-nav ml-auto">
                                                <li className="nav-item active">
                                                    <h3 className="nav-link">{children}</h3>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>

Titulo.propTypes = {
    children: PropTypes.string.isRequired
}

export default Titulo