import React from 'react'

function PokeArticle(props) {

    // On récupère les données du pokémon en props
    const pokemon = props.pokemon

  return (
    <div>
        <strong>{pokemon.name.fr}</strong>
    </div>
  )
}

export default PokeArticle