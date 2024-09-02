import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Compare() {

    const [pokemon, setPokemon] = useState([])

    function fetchHandler() {
        fetch("https://tyradex.vercel.app/api/v1/pokemon")
            .then(response => response.json())
            .then(data => setPokemon(data))
            .catch(error => console.error(error))
    }

    useEffect(() => {
        fetchHandler()
    }, [])


    const sortedPokemon = pokemon.slice(1).sort((a, b) => {
        if (a.name.fr.toLowerCase() > b.name.fr.toLowerCase()) {
            return 1
        }
        if (a.name.fr.toLowerCase() < b.name.fr.toLowerCase()) {
            return -1
        }
        return 0
    })
    console.log(sortedPokemon);

    const FirstPokemonRef = useRef()
    const SecondPokemonRef = useRef()

    let pokemonToCompare = []

    function compareHandler() {
        pokemonToCompare = [pokemon.find((el) => el.name.fr === FirstPokemonRef.current.value), pokemon.find((el) => el.name.fr === SecondPokemonRef.current.value)]

        localStorage.setItem("pokemons", JSON.stringify(pokemonToCompare))
    }

    return (
        <div>
            <Header list={false} search={false} compare={true} />
            <main className='compare'>
                <h1>Comparaison de pokémons</h1>
                <p className='compare__intro'>Veuillez sélectionner deux pokémons</p>
                <div className='compare__selects'>

                    <div className='compare__selects__container'>
                        <select name="pokemonOne" id="" className='compare__selects__item' ref={FirstPokemonRef}>
                            <option value="null">Sélectionnez un pokémon</option>
                            {sortedPokemon.map((pokemon) => (
                                <option value={pokemon.name.fr}>{pokemon.name.fr}</option>
                            ))}
                        </select>
                        <div className='compare__selects__container__pokemon'>
                            {}
                        </div>
                    </div>

                    <div className='compare__selects__container'>
                        <select name="pokemonTwo" id="" className='compare__selects__item' ref={SecondPokemonRef}>
                            <option value="null">Sélectionnez un pokémon</option>
                            {sortedPokemon.map((pokemon) => (
                                <option value={pokemon.name.fr}>{pokemon.name.fr}</option>
                            ))}
                        </select>
                    </div>

                </div>
                <div className='compare__pokemons'>

                </div>
                <div className="compare__buttons">
                    <Link to='/compared'>
                        <button className='compare__buttons__item' onClick={compareHandler}>Comparer !!!</button>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Compare