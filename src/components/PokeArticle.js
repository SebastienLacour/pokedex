import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../context/LanguageContext'

function PokeArticle(props) {

    // On récupère les données du pokémon en props
    const pokemon = props.pokemon

    // ON utilise le context pour récupérer la langue choisie
    const language = useContext(LanguageContext)
    
    // On crée une variable pour retenir le nom du pokémon
    let pokemonName = ""

    // On modifie le nom du pokémon en focntion de la langue choisie
    switch (language) {
      case "français":
        pokemonName = pokemon.name.fr
        break;
    
      case "anglais":
        pokemonName = pokemon.name.en
        break;
    
      default: 
        pokemonName = pokemon.name.fr
        break;
    }    

  return (
    <Link to={'/' + pokemon.name.fr} className='pokearticle'>
        <strong className='pokearticle__name'>{pokemonName}</strong>
        <img src={pokemon.sprites.regular} alt={pokemonName} className='pokearticle__image'/>
    </Link>
  )
}

export default PokeArticle