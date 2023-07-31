import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import PeliAzar from './components/PeliAzar'
import Poster from './components/Poster'
import Trailer from './components/Trailer'

function App() {
  const [movie, setMovie] = useState({})
  const peliculas = [{
    id: 1,
    titulo: "Sueño de fuga",
    imdb: "https://www.imdb.com/title/tt0111161/?ref_=chttp_t_1",
    poster: "https://http2.mlstatic.com/D_NQ_NP_609518-MLA44564075447_012021-O.webp",
    embed: "https://www.youtube.com/embed/-FO-0tKQ2SY"
  }, {
    id: 2,
    titulo: "El Padrino",
    imdb: "https://www.imdb.com/title/tt0068646/?ref_=chttp_t_2",
    poster: "https://hips.hearstapps.com/hmg-prod/images/gabz-godfather-1646152137.png",
    embed: "https://www.youtube.com/embed/iOyQx7MXaz0"
  }, {
    id: 3,
    titulo: "Batman: El caballero de la noche",
    imdb: "https://www.imdb.com/title/tt0468569/?ref_=chttp_t_3",
    poster: "https://i.pinimg.com/originals/09/26/f5/0926f5f1b0f1eceb9c0d7a74cab63e8e.png",
    embed: "https://www.youtube.com/embed/dzQtWkpc2-c"
  }, {
    id: 4,
    titulo: "Alien",
    imdb: "https://www.imdb.com/title/tt0078748/?ref_=fn_al_tt_1",
    poster: "https://i.etsystatic.com/21028910/r/il/31011c/3923286549/il_fullxfull.3923286549_ap47.jpg",
    embed: "https://www.youtube.com/embed/jQ5lPt9edzQ"
  }, {
    id: 5,
    titulo: "Tiempos violentos",
    imdb: "https://www.imdb.com/title/tt0110912/?ref_=chttp_t_8",
    poster: "https://www.themoviedb.org/t/p/original/qoWK8srpkxeC1iV9JfhKskVmFIw.jpg",
    embed: "https://www.youtube.com/embed/tGpTpVyI_OQ"
  }]


  const randomNumber = Math.floor(Math.random() * 5) + 1

  const getRandomMovie = () => {
    const randomMovie = peliculas.find((peli) => peli.id === randomNumber)
    setMovie(randomMovie)
  }
  useEffect(() => {
    getRandomMovie()
  }, [])

  return (
    <div className='main'>
      <PeliAzar titulo={movie.titulo} link={movie.imdb} />
      <div>
        <Poster src={movie.poster} titulo={movie.titulo} />
        <Trailer embed={movie.embed} />
      </div>
    </div>
  )
}

export default App
