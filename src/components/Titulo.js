import React from 'react'
import { Link } from 'react-router-dom';

const Titulo = () => <nav className="navbar navbar-expand-lg bg-nav shadow">
                                    <div className="container">
                                        <h3 className="navbar-brand">Prueba</h3>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarResponsive">
                                            <ul className="navbar-nav ml-auto">
                                                <li className="nav-item active">
                                                    <h3 className="nav-link">Lista de Artistas</h3>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>

export default Titulo