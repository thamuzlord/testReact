import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Titulo from '../components/Titulo';
import Footer from '../components/Footer';
import Content from '../components/Content';
import ArtistaContainer from '../components/ArtistaContainer';
import AlbumContainer from '../components/AlbumContainer';
import CancionContainer from '../components/CancionContainer';

class Main extends Component {
    render() {
        return (
            <Router>
                <Titulo />
                    <Content>
                        <Route path="/" exact component={ ArtistaContainer } />
                        <Route path="/AlbumContainer/:id" component={ AlbumContainer } />                        
                        <Route path="/CancionContainer/:id" component={ CancionContainer } />                        
                    </Content>   
                <Footer />
            </Router>
        );
    }
}

export default Main;