/* eslint-disable react/prop-types */

const PeliAzar = ({ titulo, link }) => {
    return (
        <div className="peliAzar">
            <h2 className="titulo">{titulo}</h2>
            <a className="link" href={link} target='_blank' rel="noreferrer" >Ir a IMDb</a>
        </div>
    )
}

export default PeliAzar