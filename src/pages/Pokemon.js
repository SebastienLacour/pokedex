import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

function Pokemon() {

    // UseParams pour récupérer l'id passé en paramètre de l'id
    const id = useParams().id
    console.log(id);

    // useState pour récupérer le pokémon souhaité
    const [pokemon, setPokemon] = useState(undefined)

    // Fetch pour récupérer le pokémon de l'API
    function fetchPokemon() {
        fetch(`https://tyradex.vercel.app/api/v1/pokemon/` + id)
            .then((response) => response.json())
            .then((data) => setPokemon(data))
            .catch((error) => console.error(error))
    }

    useEffect(() => {
        fetchPokemon()
    }, [])

    console.log(pokemon);


    return (
        <div>
            <Header />
            <main className='pokemon'>
                {pokemon !== undefined ?

                    <div className='pokemon__container'>

                        <h1>{pokemon.name.fr}</h1>

                        <div className='pokemon__container__img'>
                            <img src={pokemon.sprites.regular} alt={pokemon.name.fr} />
                        </div>

                        <div className='pokemon__container__tables'>
                            <h2 className='pokemon__container__tables__title'>statistiques</h2>
                            <table className='pokemon__container__tables__stats'>
                                <tr>
                                    <th className='pokemon__container__tables__stats__cell'>points de vie</th>
                                    <th className='pokemon__container__tables__stats__cell'>attaque</th>
                                    <th className='pokemon__container__tables__stats__cell'>défense</th>
                                    <th className='pokemon__container__tables__stats__cell'>attaque spéciale</th>
                                    <th className='pokemon__container__tables__stats__cell'>défense spéciale</th>
                                    <th className='pokemon__container__tables__stats__cell'>vitesse</th>
                                </tr>
                                <tr>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.stats.hp}</td>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.stats.atk}</td>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.stats.def}</td>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.stats.spe_atk}</td>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.stats.spe_def}</td>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.stats.vit}</td>
                                </tr>
                            </table>

                            <h2 className="pokemon__container__tables__title">faiblesses</h2>
                            <table className="pokemon__container__tables__weaknesses">
                                {/* <tr>
                                    <th className='pokemon__container__tables__stats__cell'>{pokemon.resistances[0].name}</th>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.resistances[0].multiplier}</td>
                                    <th className='pokemon__container__tables__stats__cell'>{pokemon.resistances[9].name}</th>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.resistances[9].multiplier}</td>
                                </tr>
                                <tr>
                                    <th className='pokemon__container__tables__stats__cell'>{pokemon.resistances[1].name}</th>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.resistances[1].multiplier}</td>
                                    <th className='pokemon__container__tables__stats__cell'>{pokemon.resistances[10].name}e</th>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.resistances[10].multiplier}</td>
                                </tr>
                                <tr>
                                    <th className='pokemon__container__tables__stats__cell'>{pokemon.resistances[2].name}</th>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.resistances[2].multiplier}</td>
                                    <th className='pokemon__container__tables__stats__cell'>{pokemon.resistances[11].name}</th>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.resistances[11].multiplier}</td>
                                </tr>
                                <tr>
                                    <th className='pokemon__container__tables__stats__cell'>{pokemon.resistances[3].name}</th>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.resistances[3].multiplier}</td>
                                    <th className='pokemon__container__tables__stats__cell'>{pokemon.resistances[12].name}</th>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.resistances[12].multiplier}</td>
                                </tr>
                                <tr>
                                    <th className='pokemon__container__tables__stats__cell'>{pokemon.resistances[4].name}</th>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.resistances[4].multiplier}</td>
                                    <th className='pokemon__container__tables__stats__cell'>{pokemon.resistances[13].name}</th>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.resistances[13].multiplier}</td>
                                </tr>
                                <tr>
                                    <th className='pokemon__container__tables__stats__cell'>{pokemon.resistances[5].name}</th>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.resistances[5].multiplier}</td>
                                    <th className='pokemon__container__tables__stats__cell'>{pokemon.resistances[14].name}</th>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.resistances[14].multiplier}</td>
                                </tr>
                                <tr>
                                    <th className='pokemon__container__tables__stats__cell'>{pokemon.resistances[6].name}</th>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.resistances[6].multiplier}</td>
                                    <th className='pokemon__container__tables__stats__cell'>{pokemon.resistances[15].name}</th>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.resistances[15].multiplier}</td>
                                </tr>
                                <tr>
                                    <th className='pokemon__container__tables__stats__cell'>{pokemon.resistances[7].name}</th>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.resistances[7].multiplier}</td>
                                    <th className='pokemon__container__tables__stats__cell'>{pokemon.resistances[16].name}</th>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.resistances[16].multiplier}</td>
                                </tr>
                                <tr>
                                    <th className='pokemon__container__tables__stats__cell'>{pokemon.resistances[8].name}</th>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.resistances[8].multiplier}</td>
                                    <th className='pokemon__container__tables__stats__cell'>{pokemon.resistances[17].name}</th>
                                    <td className='pokemon__container__tables__stats__cell'>{pokemon.resistances[17].multiplier}</td>
                                </tr> */}

                                <td className="pokemon__container__tables__weaknesses__column">
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[0].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[0].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[1].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[1].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[2].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[2].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[3].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[3].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[4].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[4].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[5].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[5].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[6].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[6].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[7].name}</th>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[7].multiplier}</th>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[8].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[8].multiplier}</td>
                                    </tr>
                                </td>

                                <td className="pokemon__container__tables__weaknesses__column">
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[9].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[9].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[10].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[10].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[11].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[11].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[12].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[12].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[13].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[13].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[14].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[14].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[15].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[15].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[16].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[16].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[17].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{pokemon.resistances[17].multiplier}</td>
                                    </tr>
                                </td>



                            </table>
                        </div>


                    </div>

                    :

                    <div></div>

                }
            </main>
        </div>
    )
}

export default Pokemon