import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Link, useParams } from 'react-router-dom'
import Background from '../components/Background';
import Footer from '../components/Footer';

function Pokemon() {


    // UseParams pour récupérer l'id passé en paramètre de l'id
    const id = useParams().id

    // UseState pour récupérer tous les pokémons
    const [pokemon, setPokemon] = useState([])

    // Fetch pour récupérer tous les pokémons et les place dans la variable pokemon
    const fetchPokemon = async () => {
        await fetch("https://tyradex.vercel.app/api/v1/pokemon")
            .then(response => response.json())
            .then(data => setPokemon(data))
            .catch(error => console.log(error)
            )
    }

    // UseEffect permettant d'exécuter la fonction fetch
    useEffect(() => {
        fetchPokemon()
    }, [])

    // Récupération du pokémon en fonction du nom passé en paramètre de l'URL
    let onePokemon = pokemon.find((item) => item.name.fr === id)


    // Initialisation de la variable background qui va gérer le fond en fonction du premier type du pokémon
    let background = ""

    console.log(onePokemon);



    if (onePokemon !== undefined) {

        // Modificaiton de la variable background en fonction du type du pokémon
        switch (onePokemon.types[0].name) {

            case "Feu":
                background = "background__fire"
                break;

            case "Plante":
                background = "background__plant"
                break;

            case "Eau":
                background = "background__water"
                break;

            case "Électrik":
                background = "background__electrik"
                break;

            case "Sol":
                background = "background__ground"
                break;

            case "Roche":
                background = "background__rock"
                break;

            case "Acier":
                background = "background__steel"
                break;

            case "Vol":
                background = "background__fly"
                break;

            case "Combat":
                background = "background__fight"
                break;

            case "Poison":
                background = "background__poison"
                break;

            case "Insecte":
                background = "background__bug"
                break;

            case "Glace":
                background = "background__ice"
                break;

            case "Psy":
                background = "background__psy"
                break;

            case "Ténèbre":
                background = "background__dark"
                break;

            case "Spectre":
                background = "background__spirit"
                break;

            case "Normal":
                background = "background__normal"
                break;

            case "Dragon":
                background = "background__dragon"
                break;

            case "Fée":
                background = "background__fairy"
                break;

            default:
                background = "background"
        }

    }

    const [image, setImage] = useState("regular")

    function imageHandler(){

            if (image === "regular") {
                return(
                    setImage("shiny")
                )
            } else {
                return(
                    setImage("regular")
                )
            }


    }


    return (
        <div>
            <Header />
            <Background backgroundType={background} />
            <main className='pokemon'>
                {onePokemon !== undefined ?

                    <div className='pokemon__container'>

                        <h1 className="pokemon__container__title">{onePokemon.name.fr}</h1>

                        {
                            onePokemon.evolution ?
                                <div className='pokemon__container__evolution'>
                                    {
                                        onePokemon.evolution.pre !== null ?
                                            <div>
                                                {
                                                    onePokemon.evolution.pre.length >= 2 ?
                                                        <div>
                                                            <Link to={'/' + onePokemon.evolution.pre[1].name} className='pokemon__container__evolution__name pokemon__container__evolution__name--left'>
                                                                {onePokemon.evolution.pre[1].name}
                                                            </Link>
                                                        </div>
                                                        :
                                                        <div>
                                                            <Link to={'/' + onePokemon.evolution.pre[0].name} className='pokemon__container__evolution__name pokemon__container__evolution__name--left'>
                                                                {onePokemon.evolution.pre[0].name}
                                                            </Link>
                                                        </div>
                                                }
                                            </div>
                                            :
                                            <div>

                                            </div>
                                    }

                                    {
                                        onePokemon.evolution.next ?
                                            <div>
                                                {
                                                    onePokemon.evolution.next.length >= 3 && id !== "Mystherbe" && id !== "Ptitard" && id !== "Tarsal" ?
                                                        <div className='pokemon__container__evolution__group'>
                                                            {
                                                                onePokemon.evolution.next.map((evolution) => (
                                                                    <Link to={'/' + evolution.name} className='pokemon__container__evolution__name pokemon__container__evolution__name--right'>
                                                                        {evolution.name}
                                                                    </Link>
                                                                ))
                                                            }
                                                        </div>
                                                        :
                                                        <div>
                                                            {
                                                                id === "Ramoloss" || id === "Ortide" || id === "Têtarte" || id === "Kirlia" ?
                                                                    <div className='pokemon__container__evolution__group'>
                                                                        {
                                                                            onePokemon.evolution.next.map((evolution) => (
                                                                                <Link to={'/' + evolution.name} className='pokemon__container__evolution__name pokemon__container__evolution__name--right'>
                                                                                    {evolution.name}
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                    :
                                                                    <div>
                                                                        <Link to={'/' + onePokemon.evolution.next[0].name} className='pokemon__container__evolution__name pokemon__container__evolution__name--right'>
                                                                            {onePokemon.evolution.next[0].name}
                                                                        </Link>
                                                                    </div>
                                                            }
                                                        </div>
                                                }
                                            </div>
                                            :
                                            <div>

                                            </div>
                                    }

                                    {/* {
                                        onePokemon.evolution.mega ?
                                            <div className='pokemon__container__evolution__group'>
                                                {
                                                    onePokemon.evolution.mega.map((item) => (
                                                        <Link  className='pokemon__container__evolution__name pokemon__container__evolution__name--right'>
                                                            {item.orbe}
                                                        </Link>
                                                    ))
                                                }
                                            </div>
                                            :
                                            <div>
                                            </div>
                                    } */}

                                </div>

                                :
                                <div></div>
                        }


                        <div className="pokemon__container__information">
                            <strong>{onePokemon.category}</strong>
                            <strong>taille : {onePokemon.height}</strong>
                            <strong>poids : {onePokemon.weight}</strong>
                            <div className='pokemon__container__information__container-img'>
                                <strong className='pokemon__container__information__container-img__title'>types: </strong>
                                <div>
                                    {onePokemon.types.map((type) => (
                                        <img src={type.image} alt={type.name} className='pokemon__container__information__container-img__img' />
                                    ))}
                                </div>

                            </div>

                        </div>

                        <div className='pokemon__container__img'>
                            <img src={image === "regular" ? onePokemon.sprites.regular : onePokemon.sprites.shiny} alt={onePokemon.name.fr} />
                            <button className='pokemon__container__img__button' onClick={imageHandler}>{image === "regular" ? "Shiny" : "Regular"}</button>
                        </div>

                        <div className='pokemon__container__tables'>
                            <h2 className='pokemon__container__tables__title'>Statistiques</h2>
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
                                    <td className='pokemon__container__tables__stats__cell'>{onePokemon.stats.hp}</td>
                                    <td className='pokemon__container__tables__stats__cell'>{onePokemon.stats.atk}</td>
                                    <td className='pokemon__container__tables__stats__cell'>{onePokemon.stats.def}</td>
                                    <td className='pokemon__container__tables__stats__cell'>{onePokemon.stats.spe_atk}</td>
                                    <td className='pokemon__container__tables__stats__cell'>{onePokemon.stats.spe_def}</td>
                                    <td className='pokemon__container__tables__stats__cell'>{onePokemon.stats.vit}</td>
                                </tr>
                            </table>

                            <h2 className="pokemon__container__tables__title">Faiblesses</h2>
                            <table className="pokemon__container__tables__weaknesses">

                                <td className="pokemon__container__tables__weaknesses__column">
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[0].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[0].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[1].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[1].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[2].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[2].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[3].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[3].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[4].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[4].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[5].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[5].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[6].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[6].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[7].name}</th>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[7].multiplier}</th>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[8].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[8].multiplier}</td>
                                    </tr>
                                </td>

                                <td className="pokemon__container__tables__weaknesses__column">
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[9].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[9].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[10].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[10].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[11].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[11].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[12].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[12].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[13].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[13].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[14].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[14].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[15].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[15].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[16].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[16].multiplier}</td>
                                    </tr>
                                    <tr>
                                        <th className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[17].name}</th>
                                        <td className="pokemon__container__tables__weaknesses__cell">{onePokemon.resistances[17].multiplier}</td>
                                    </tr>
                                </td>



                            </table>
                        </div>

                        <div className='pokemon__container__talents'>
                            <h2>Talents</h2>
                            <div className='pokemon__container__talents__container'>
                                {onePokemon.talents.map(item => (
                                    <div className='pokemon__container__talents__container__item'>
                                        <strong>{item.name}</strong>
                                    </div>
                                ))
                                }
                            </div>
                        </div>  


                    </div>

                    :

                    <div></div>

                }
            </main>
            <Footer />
        </div>
    )
}

export default Pokemon