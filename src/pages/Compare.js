import React, { useState, useEffect, useRef, useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../context/LanguageContext'

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

    const language = useContext(LanguageContext)

    const sortedPokemon = pokemon.slice(1).sort((a, b) => {
        if (language === "anglais") {
            if (a.name.en.toLowerCase() > b.name.en.toLowerCase()) {
                return 1
            }
            if (a.name.en.toLowerCase() < b.name.en.toLowerCase()) {
                return -1
            }
        } else {
            if (a.name.fr.toLowerCase() > b.name.fr.toLowerCase()) {
                return 1
            }
            if (a.name.fr.toLowerCase() < b.name.fr.toLowerCase()) {
                return -1
            }
        }
        return 0
    })

    const FirstPokemonRef = useRef()
    const SecondPokemonRef = useRef()


    let pokemonToCompare = []
    console.log(pokemonToCompare);

    console.log(FirstPokemonRef);

    const [FirstPokemon, setFirstPokemon] = useState(null)
    const [SecondPokemon, setSecondPokemon] = useState(null)

    const getFirstPokemon = () => {
        console.log(FirstPokemon);
        setFirstPokemon(pokemon.find((el) => el.name.fr === FirstPokemonRef.current.value))
    }

    const getSecondPokemon = () => {
        console.log(SecondPokemon);
        setSecondPokemon(pokemon.find((el) => el.name.fr === SecondPokemonRef.current.value))
    }

    function compareHandler() {
        if (language === "anglais") {
            pokemonToCompare = [pokemon.find((el) => el.name.en === FirstPokemonRef.current.value), pokemon.find((el) => el.name.en === SecondPokemonRef.current.value)]
        } else {
            pokemonToCompare = [pokemon.find((el) => el.name.fr === FirstPokemonRef.current.value), pokemon.find((el) => el.name.fr === SecondPokemonRef.current.value)]
            window.location.href = "/compared"
        }

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
                        <select name="pokemonOne" id="" className='compare__selects__item' ref={FirstPokemonRef} onChange={getFirstPokemon}>
                            <option value="null">Sélectionnez un pokémon</option>
                            {language === "anglais" ?
                                sortedPokemon.map((pokemon) => (
                                    <option value={pokemon.name.en}>{pokemon.name.en}</option>
                                ))
                                :
                                sortedPokemon.map((pokemon) => (
                                    <option value={pokemon.name.fr} >{pokemon.name.fr}</option>
                                ))
                            }
                        </select>
                        {FirstPokemonRef.current !== undefined ?
                            <div className='compare__pokemons__item'>
                                {FirstPokemonRef.current.value !== "null" ?
                                    <div>
                                        {language === "anglais" ?
                                            <h2>{FirstPokemon.name.en}</h2>
                                            :
                                            <h2>{FirstPokemon.name.fr}</h2>
                                        }
                                        <img src={FirstPokemon.sprites.regular} alt={FirstPokemon.name.fr} className='compare__pokemons__item__image' />
                                    </div>
                                    :
                                    <div>
                                        <h2>Aucun pokémon selectionné</h2>
                                    </div>}
                            </div>
                            :
                            <div>

                            </div>
                        }

                    </div>

                    <div className='compare__selects__container'>
                        <select name="pokemonTwo" id="" className='compare__selects__item' ref={SecondPokemonRef} onChange={getSecondPokemon}>
                            <option value="null">Sélectionnez un pokémon</option>
                            {language === "anglais" ?
                                sortedPokemon.map((pokemon) => (
                                    <option value={pokemon.name.en}>{pokemon.name.en}</option>
                                ))
                                :
                                sortedPokemon.map((pokemon) => (
                                    <option value={pokemon.name.fr}>{pokemon.name.fr}</option>
                                ))
                            }
                        </select>
                        {
                            SecondPokemonRef.current !== undefined ?
                                <div className='compare__pokemons__item'>
                                    {SecondPokemonRef.current.value !== "null" ?
                                        <div>
                                            {language === "anglais" ?
                                                <h2>{SecondPokemon.name.en}</h2>
                                                :
                                                <h2>{SecondPokemon.name.fr}</h2>
                                            }
                                            <img src={SecondPokemon.sprites.regular} alt={SecondPokemon.name.fr} className='compare__pokemons__item__image' />
                                        </div>
                                        :
                                        <div>
                                            <h2>Aucun pokémon selectionné</h2>
                                        </div>}
                                </div>
                                :
                                <div>

                                </div>
                        }

                    </div>

                </div>

                <div className="compare__buttons">
                    <button className='compare__buttons__item' onClick={compareHandler}>Comparer !!!</button>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Compare