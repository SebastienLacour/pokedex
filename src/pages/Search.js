import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import PokeArticle from '../components/PokeArticle'

function Search() {

    // UseState pour récupérer tous les pokémons
    const [pokemon, setPokemon] = useState([])

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

    // USeState permettant de stocker la valeur placé dans l'input
    const [value, setValue] = useState("")

    function searchHandler(e){
        
        setValue(e.target.value)
    }

    const searchData = pokemon.filter((item) => item.name.fr.toLowerCase().includes(value.toLowerCase()))

    return (
        <div>
            <Header list={false} search={true} compare={false}/>
            <main className='search'>
                <h1>Cherchez un pokémon !!!</h1>

                <input type="search" name="recherche" className='search__input' onChange={searchHandler}/>

                {value !== "" ?
                <div className='search__list'>
                    {searchData.map((item) => (
                        <PokeArticle pokemon={item}/>
                    ))}
                </div> 
                :
                <div className='search__list-empty'></div>
                }
            </main>

        </div>
    )
}

export default Search