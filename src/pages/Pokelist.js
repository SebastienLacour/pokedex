// Import des fonctions et des composants nécessaires
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import PokeArticle from '../components/PokeArticle';

function Pokelist() {

    // UseState pour récupérer tous les pokémons
    const [pokemon, setPokemon] = useState([])

    // On supprime le premier index du tableau qui n'est pas utile
    const displayedPokemon = pokemon.slice(1)

    // Récupération des pokémons de la première génération
    const firstGenerationPokemon = displayedPokemon.filter((pokemon) => pokemon.generation === 1)
    const secondGenerationPokemon = displayedPokemon.filter((pokemon) => pokemon.generation === 2)
    const thirdGenerationPokemon = displayedPokemon.filter((pokemon) => pokemon.generation === 3)
    const fourthGenerationPokemon = displayedPokemon.filter((pokemon) => pokemon.generation === 4)
    const fifthGenerationPokemon = displayedPokemon.filter((pokemon) => pokemon.generation === 5)
    const sixthGenerationPokemon = displayedPokemon.filter((pokemon) => pokemon.generation === 6)
    const seventhGenerationPokemon = displayedPokemon.filter((pokemon) => pokemon.generation === 7)
    const eighthGenerationPokemon = displayedPokemon.filter((pokemon) => pokemon.generation === 8)
    const ninethGenerationPokemon = displayedPokemon.filter((pokemon) => pokemon.generation === 9)




    // Fetch pour récupérer tous les pokémons et les place dans la variable pokemon
    const fetchPokemon = () => {
        fetch("https://tyradex.vercel.app/api/v1/pokemon")
            .then(response => response.json())
            .then(data => setPokemon(data))
            .catch(error => console.log(error)
            )
    }

    // UseEffect permettant d'exécuter la fonction fetch
    useEffect(() => {
        fetchPokemon()
    }, [])

    return (
        <div>
            <Header />
            <main className="pokelist">

                {/* Titre de la page */}
                <h1>Liste des pokémons</h1>

                <div className="pokelist__generation-choice">
                    <h2 className='pokelist__generation-choice__title'>choix de la génération</h2>
                    <div className="pokelist__generation-choice__buttons">
                        <button className='pokelist__generation-choice__buttons__button'>1</button>
                        <button className='pokelist__generation-choice__buttons__button'>2</button>
                        <button className='pokelist__generation-choice__buttons__button'>3</button>
                        <button className='pokelist__generation-choice__buttons__button'>4</button>
                        <button className='pokelist__generation-choice__buttons__button'>5</button>
                        <button className='pokelist__generation-choice__buttons__button'>6</button>
                        <button className='pokelist__generation-choice__buttons__button'>7</button>
                        <button className='pokelist__generation-choice__buttons__button'>8</button>
                        <button className='pokelist__generation-choice__buttons__button'>9</button>
                    </div>
                </div>

                <div className='pokelist__pokemons'>
                    {firstGenerationPokemon.map((item) => (
                        <PokeArticle pokemon={item} />
                    ))}
                </div>


            </main>
        </div>
    )
}

export default Pokelist