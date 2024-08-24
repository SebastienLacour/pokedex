import React from 'react'
import { Link } from 'react-router-dom'

function PokeArticle(props) {

    // On récupère les données du pokémon en props
    const pokemon = props.pokemon

  return (
    <Link to={'/' + pokemon.name.fr} className='pokearticle'>
        <strong className='pokearticle__name'>{pokemon.name.fr}</strong>
        <img src={pokemon.sprites.regular} alt={pokemon.name.fr} className='pokearticle__image'/>
    </Link>
  )
}

export default PokeArticle