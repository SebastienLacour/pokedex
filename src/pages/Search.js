import React, { useState, useEffect, useRef, useContext } from 'react'
import Header from '../components/Header'
import PokeArticle from '../components/PokeArticle'
import Footer from '../components/Footer'
import { LanguageContext } from '../context/LanguageContext'

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
    const [type, setType] = useState("")

    const inputSearchRef = useRef()
    const inputTypeRef = useRef()    
    

    function searchHandler(e){
        
        setValue(e.target.value)
    }

    function searchTypeHandler(e){

        setType(e.target.value)
    }

    // On récupère le context de changement de langue
    const language = useContext(LanguageContext)

    let searchData = ""

    if (language === "anglais") {
        searchData = pokemon.slice(1).filter((item) => item.name.en.toLowerCase().includes(value.toLowerCase()))   
    } else {
        searchData = pokemon.slice(1).filter((item) => item.name.fr.toLowerCase().includes(value.toLowerCase()))   
    }

    return (
        <div>
            <Header list={false} search={true} compare={false}/>
            <main className='search'>
                <h2>Cherchez un pokémon !!!</h2>

                <input type="search" name="recherche" className='search__input' onChange={searchHandler} ref={inputSearchRef}/>

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

            <Footer/>

        </div>
    )
}

export default Search