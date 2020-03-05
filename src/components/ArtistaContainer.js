import React, {useState, useEffect} from 'react'
import Artista from './Artista'
import Titulo from './Titulo'
import Footer from './Footer'
import { getArtistas } from '../services/artistas'

const ArtistaContainer = () => {
    const [artistas, setArtistas] = useState([]);
  
    async function fetchData() {
      const data = await getArtistas()
      setArtistas(data)    
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
        <>
        <Titulo>Artistas Favoritos</Titulo>
        <section>
            {                        
                artistas.map((artista) => <Artista image={artista.image} name={artista.name} key={artista.id} />)
            }
        </section>
        <Footer></Footer>
        </>
    );
  };
  
export default ArtistaContainer;

/* class ArtistaContainer extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            artistas: [],
            isFetch: true,
        }
    }

    async componentDidMount (){
        const responseJson = await getArtistas()
        this.setState({artistas : responseJson, isFetch: false})
    }

    render(){
        const { isFetch, artistas } = this.state
        if (isFetch) {
            return 'Cargando'
        }
        return (
            <>
                <Titulo>Artistas Favoritos</Titulo>
                <section>
                    {                        
                        artistas.map((artista) => <Artista image={artista.image} name={artista.name} key={artista.id} />)
                    }
                </section>
                <Footer></Footer>
            </>
        )
    }
}

export default ArtistaContainer */