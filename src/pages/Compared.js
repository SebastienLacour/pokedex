import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Compared() {

    // Récupération des données du localStorage
    const comparedPokemon = JSON.parse(localStorage.getItem("pokemons"))
    console.log(comparedPokemon);


    return (
        <div>
            <Header />
            <main className="compared">
                <h1>Comparaison</h1>

                <div className='compared__pokemons'>
                    {comparedPokemon.map((pokemon) => (
                        <div className='compared__pokemons__item'>
                            <h2>{pokemon.name.fr}</h2>
                            <img src={pokemon.sprites.regular} alt={pokemon.name.fr} className='compared__pokemons__item__image'/>
                        </div>
                    ))}
                </div>


            </main>
            <Footer />
        </div>
    )
}

export default Compared