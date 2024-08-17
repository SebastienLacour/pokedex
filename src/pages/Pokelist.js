// Import des fonctions et des composants nécessaires
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import PokeArticle from '../components/PokeArticle';

function Pokelist() {

    // UseState pour récupérer tous les pokémons
    const [pokemon, setPokemon] = useState([])

    const displayedPokemon = pokemon.slice(1)

    console.log(displayedPokemon);
    
    
    // Fetch pour récupérer tous les pokémons et les place dans la variable pokemon
    const fetchPokemon = () => {
         fetch("https://tyradex.vercel.app/api/v1/pokemon")
        .then(response => response.json())
        .then(data => setPokemon(data))
        .catch( error => console.log(error)
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

                <h1>Liste des pokémons</h1>

                <div className='pokelist__pokemons'>
                    {displayedPokemon.map((item) => (
                        <PokeArticle pokemon={item}/>
                    ))}
                </div>


            </main>
        </div>
    )
}

export default Pokelist