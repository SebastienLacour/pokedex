// Import des fonctions et des composants nécessaires
import React, { useState, useEffect, useContext } from 'react'
import Header from '../components/Header'
import PokeArticle from '../components/PokeArticle';
import Loader from '../components/Loader';
import Footer from '../components/Footer';
import { LanguageContext } from '../context/LanguageContext';

function Pokelist() {

    // UseState pour récupérer tous les pokémons
    const [pokemon, setPokemon] = useState([])

    // On récupère le contexte de changement de langue des noms de pokémons
    const language = useContext(LanguageContext)


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


    // On supprime le premier index du tableau qui n'est pas utile
    const finalPokemon = pokemon.slice(1)

    // Récupération des pokémons de chaque génération
    const firstGenerationPokemon = finalPokemon.filter((pokemon) => pokemon.generation === 1)
    const secondGenerationPokemon = finalPokemon.filter((pokemon) => pokemon.generation === 2)
    const thirdGenerationPokemon = finalPokemon.filter((pokemon) => pokemon.generation === 3)
    const fourthGenerationPokemon = finalPokemon.filter((pokemon) => pokemon.generation === 4)
    const fifthGenerationPokemon = finalPokemon.filter((pokemon) => pokemon.generation === 5)
    const sixthGenerationPokemon = finalPokemon.filter((pokemon) => pokemon.generation === 6)
    const seventhGenerationPokemon = finalPokemon.filter((pokemon) => pokemon.generation === 7)
    const eighthGenerationPokemon = finalPokemon.filter((pokemon) => pokemon.generation === 8)
    const ninethGenerationPokemon = finalPokemon.filter((pokemon) => pokemon.generation === 9)

    // UseState modifiant la génération dans laquelle on se trouve
    const [generation, setGeneration] = useState(1)

    // Fonction gérant la première génération
    function firstGenerationHandler() {
        setGeneration(1)
    }

    // Fonction gérant la deuxième génération
    function secondGenerationHandler() {
        setGeneration(2)
    }

    // Fonction gérant la troisième génération
    function thirdGenerationHandler() {
        setGeneration(3)
    }

    // Fonction gérant la quatrième génération
    function fourthGenerationHandler() {
        setGeneration(4)
    }

    // Fonction gérant la cinquième génération
    function fifthGenerationHandler() {
        setGeneration(5)
    }

    // Fonction gérant la sixième génération
    function sixthGenerationHandler() {
        setGeneration(6)
    }

    // Fonction gérant la septième génération
    function seventhGenerationHandler() {
        setGeneration(7)
    }

    // Fonction gérant la huitième génération
    function eighthGenerationHandler() {
        setGeneration(8)
    }

    // Fonction gérant la neuvième génération
    function ninethGenerationHandler() {
        setGeneration(9)
    }


    return (
        <div>
            <Header list={true} search={false} compare={false} />
            <main className="pokelist">

                {/* Titre de la page */}

                    <h1>Liste des pokémons</h1>


                <div className="pokelist__generation-choice">

                    <h2 className='pokelist__generation-choice__title'>choix de la génération</h2>

                    <div className="pokelist__generation-choice__buttons">
                        <button className='pokelist__generation-choice__buttons__button' onClick={firstGenerationHandler}>1</button>
                        <button className='pokelist__generation-choice__buttons__button' onClick={secondGenerationHandler}>2</button>
                        <button className='pokelist__generation-choice__buttons__button' onClick={thirdGenerationHandler}>3</button>
                        <button className='pokelist__generation-choice__buttons__button' onClick={fourthGenerationHandler}>4</button>
                        <button className='pokelist__generation-choice__buttons__button' onClick={fifthGenerationHandler}>5</button>
                        <button className='pokelist__generation-choice__buttons__button' onClick={sixthGenerationHandler}>6</button>
                        <button className='pokelist__generation-choice__buttons__button' onClick={seventhGenerationHandler}>7</button>
                        <button className='pokelist__generation-choice__buttons__button' onClick={eighthGenerationHandler}>8</button>
                        <button className='pokelist__generation-choice__buttons__button' onClick={ninethGenerationHandler}>9</button>
                    </div>
                </div>

                <div>
                    {pokemon.length !== 0 ?
                        <div className='pokelist__pokemons'>

                            {generation === 1 ?
                                firstGenerationPokemon.map((item) => (
                                    <PokeArticle pokemon={item} key={item.id} language={language} />
                                ))
                                :
                                <div className='pokelist__pokemons'>
                                    {generation === 2 ?
                                        secondGenerationPokemon.map((item) => (
                                            <PokeArticle pokemon={item} key={item.id} />
                                        ))
                                        :
                                        <div className='pokelist__pokemons'>
                                            {generation === 3 ?
                                                thirdGenerationPokemon.map((item) => (
                                                    <PokeArticle pokemon={item} key={item.id} />
                                                ))
                                                :
                                                <div className='pokelist__pokemons'>
                                                    {generation === 4 ?
                                                        fourthGenerationPokemon.map((item) => (
                                                            <PokeArticle pokemon={item} key={item.id} />
                                                        ))
                                                        :
                                                        <div className='pokelist__pokemons'>
                                                            {generation === 5 ?
                                                                fifthGenerationPokemon.map((item) => (
                                                                    <PokeArticle pokemon={item} key={item.id} />
                                                                ))
                                                                :
                                                                <div className='pokelist__pokemons'>
                                                                    {generation === 6 ?
                                                                        sixthGenerationPokemon.map((item) => (
                                                                            <PokeArticle pokemon={item} key={item.id} />
                                                                        ))
                                                                        :
                                                                        <div className='pokelist__pokemons'>
                                                                            {generation === 7 ?
                                                                                seventhGenerationPokemon.map((item) => (
                                                                                    <PokeArticle pokemon={item} key={item.id} />
                                                                                ))
                                                                                :
                                                                                <div className='pokelist__pokemons'>
                                                                                    {generation === 8 ?
                                                                                        eighthGenerationPokemon.map((item) => (
                                                                                            <PokeArticle pokemon={item} key={item.id} />
                                                                                        ))
                                                                                        :
                                                                                        <div className='pokelist__pokemons'>
                                                                                            {generation === 9 ?
                                                                                                ninethGenerationPokemon.map((item) => (
                                                                                                    <PokeArticle pokemon={item} key={item.id} />
                                                                                                ))
                                                                                                :
                                                                                                <div>
                                                                                                    <Loader />
                                                                                                </div>
                                                                                            }

                                                                                        </div>
                                                                                    }

                                                                                </div>
                                                                            }

                                                                        </div>
                                                                    }

                                                                </div>
                                                            }

                                                        </div>
                                                    }

                                                </div>
                                            }

                                        </div>
                                    }

                                </div>
                            }

                        </div>
                        :
                        <div className='pokelist__loading'>
                            <Loader />
                        </div>
                    }
                </div>
            </main>

            <Footer />

        </div>
    )
}

export default Pokelist