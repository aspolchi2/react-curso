/* eslint-disable react/prop-types */

const Poster = ({ src, titulo }) => {
    return (
        <img src={src} alt={`Poster de la pelicula ${titulo}`} />
    )
}

export default Poster