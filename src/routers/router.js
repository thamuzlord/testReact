import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import ArtistsContainer from '../components/Artists/ArtistsContainer';
import AlbumContainer from '../components/Albums/AlbumContainer';
import SongsContainer from '../components/Songs/SongsContainer';

class Main extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Content>
                    <Route path="/" exact component={ArtistsContainer} />
                    <Route path="/albums/:id" component={AlbumContainer} />
                    <Route path="/songs/:id" component={SongsContainer} />
                </Content>
                <Footer />
            </Router>
        );
    }
}

export default Main;