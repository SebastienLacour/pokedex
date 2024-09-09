import React, { useState, useEffect, useContext } from 'react'
import Header from '../components/Header'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { LanguageContext } from '../context/LanguageContext';


function Pokemon() {


    // UseParams pour récupérer l'id passé en paramètre de l'id
    const id = useParams().id

    const language = useContext(LanguageContext)

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

    // On crée une variable pour retenir le nom du pokémon
    let pokemonName = ""



    // Si un pokémon a été trouvé
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

            case "Ténèbres":
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

        switch (language) {
            case "français":
                pokemonName = onePokemon.name.fr
                break;

            case "anglais":
                pokemonName = onePokemon.name.en
                break;

            default:
                pokemonName = onePokemon.name.fr
                break;
        }


    }

    // UseState qui va gérer si l'image est "regular" ou "shiny"
    const [image, setImage] = useState("regular")

    // Au clic sur le bouton, changer l'image
    function imageHandler() {

        if (image === "regular") {
            return (
                setImage("shiny")
            )
        } else {
            return (
                setImage("regular")
            )
        }


    }

    const statDisplayed = document.querySelector('pokemon__container__stats__item__full-bar')
    console.log(statDisplayed);


    return (
        <div>
            <Header list={false} search={false} compare={false} />
            <main className='pokemon'>


                {onePokemon !== undefined ?

                    <div className={background}>

                        <div className='pokemon__container'>

                            <h1 className="pokemon__container__title">{pokemonName}</h1>

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
                                {onePokemon.sexe ?
                                    <strong>sexes :<br /> mâle {onePokemon.sexe.male}% / femelle {onePokemon.sexe.female}%</strong>
                                    :
                                    <div></div>

                                }

                            </div>

                            <div className='pokemon__container__img'>
                                <img src={image === "regular" ? onePokemon.sprites.regular : onePokemon.sprites.shiny} alt={onePokemon.name.fr} />
                                <button className='pokemon__container__img__button' onClick={imageHandler}>{image === "regular" ? "Shiny" : "Regular"}</button>
                            </div>

                            {
                                onePokemon.evolution ?
                                    <div>
                                        {onePokemon.evolution.mega ?
                                            <div className='pokemon__container__mega-evolution'>
                                                <h2>Méga évolution</h2>
                                                <div className='pokemon__container__mega-evolution__flex'>
                                                    {onePokemon.evolution.mega.map((item) => (
                                                        <div className='pokemon__container__mega-evolution__item'>
                                                            <strong>{item.orbe}</strong>
                                                            <img className='pokemon__container__mega-evolution__item--img' src={item.sprites.regular} alt={item.orbe} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            :
                                            <div>

                                            </div>}

                                    </div>
                                    :
                                    <div>

                                    </div>
                            }

                            <div className="pokemon__container__stats">

                                <h2 className='pokemon__container__stats__title'>Statistiques</h2>


                                <div className="pokemon__container__stats__item">
                                    <h3 className="pokemon__container__stats__item__name">HP</h3>
                                    <div className="pokemon__container__stats__item__value">
                                        <span className="pokemon__container__stats__item__value__number">{onePokemon.stats.hp}</span>
                                        <div className='pokemon__container__stats__item__empty-bar'>
                                            <div className='pokemon__container__stats__item__full-bar' style={{ width: `${onePokemon.stats.hp}%` }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pokemon__container__stats__item">
                                    <h3 className="pokemon__container__stats__item__name">ATK</h3>
                                    <div className="pokemon__container__stats__item__value">
                                        <span className="pokemon__container__stats__item__value__number">{onePokemon.stats.atk}</span>
                                        <div className='pokemon__container__stats__item__empty-bar'>
                                            <div className='pokemon__container__stats__item__full-bar' style={{ width: `${onePokemon.stats.atk}%` }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pokemon__container__stats__item">
                                    <h3 className="pokemon__container__stats__item__name">DEF</h3>
                                    <div className="pokemon__container__stats__item__value">
                                        <span className="pokemon__container__stats__item__value__number">{onePokemon.stats.def}</span>
                                        <div className='pokemon__container__stats__item__empty-bar'>
                                            <div className='pokemon__container__stats__item__full-bar' style={{ width: `${onePokemon.stats.def}%` }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pokemon__container__stats__item">
                                    <h3 className="pokemon__container__stats__item__name">ATK SPE</h3>
                                    <div className="pokemon__container__stats__item__value">
                                        <span className="pokemon__container__stats__item__value__number">{onePokemon.stats.spe_atk}</span>
                                        <div className='pokemon__container__stats__item__empty-bar'>
                                            <div className='pokemon__container__stats__item__full-bar' style={{ width: `${onePokemon.stats.spe_atk}%` }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pokemon__container__stats__item">
                                    <h3 className="pokemon__container__stats__item__name">DEF SPE</h3>
                                    <div className="pokemon__container__stats__item__value">
                                        <span className="pokemon__container__stats__item__value__number">{onePokemon.stats.spe_def}</span>
                                        <div className='pokemon__container__stats__item__empty-bar'>
                                            <div className='pokemon__container__stats__item__full-bar' style={{ width: `${onePokemon.stats.spe_def}%` }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pokemon__container__stats__item">
                                    <h3 className="pokemon__container__stats__item__name">VIT</h3>
                                    <div className="pokemon__container__stats__item__value">
                                        <span className="pokemon__container__stats__item__value__number">{onePokemon.stats.vit}</span>
                                        <div className='pokemon__container__stats__item__empty-bar'>
                                            <div className='pokemon__container__stats__item__full-bar' style={{ width: `${onePokemon.stats.vit}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='pokemon__container__tables'>

                                <h2 className="pokemon__container__tables__title">Faiblesses</h2>
                                <table className="pokemon__container__tables__weaknesses">

                                    <td className="pokemon__container__tables__weaknesses__column">
                                        {onePokemon.resistances.slice(0, 9).map((resistance) => (
                                            <tr>
                                                <th className="pokemon__container__tables__weaknesses__cell">{resistance.name}</th>
                                                {resistance.multiplier === 4 ?
                                                    <td className='pokemon__container__tables__weaknesses__cell--red'>{resistance.multiplier}</td>
                                                    :
                                                    resistance.multiplier === 2 ?
                                                        <td className='pokemon__container__tables__weaknesses__cell--orange'>{resistance.multiplier}</td>
                                                        :
                                                        resistance.multiplier === 1 ?
                                                            <td className='pokemon__container__tables__weaknesses__cell--yellow'>{resistance.multiplier}</td>
                                                            :
                                                            resistance.multiplier === 0.5 ?
                                                                <td className='pokemon__container__tables__weaknesses__cell--green'>{resistance.multiplier}</td>
                                                                :
                                                                resistance.multiplier === 0.25 ?
                                                                    <td className='pokemon__container__tables__weaknesses__cell--blue'>{resistance.multiplier}</td>
                                                                    :
                                                                    resistance.multiplier === 0 ?
                                                                        <td className='pokemon__container__tables__weaknesses__cell--white'>{resistance.multiplier}</td>
                                                                        :
                                                                        <td className='pokemon__container__tables__weaknesses__cell'>{resistance.multiplier}</td>
                                                }
                                            </tr>
                                        ))}
                                    </td>

                                    <td className="pokemon__container__tables__weaknesses__column">
                                        {onePokemon.resistances.slice(9, 18).map((resistance) => (
                                            <tr>
                                                <th className="pokemon__container__tables__weaknesses__cell">{resistance.name}</th>
                                                {resistance.multiplier === 4 ?
                                                    <td className='pokemon__container__tables__weaknesses__cell--red'>{resistance.multiplier}</td>
                                                    :
                                                    resistance.multiplier === 2 ?
                                                        <td className='pokemon__container__tables__weaknesses__cell--orange'>{resistance.multiplier}</td>
                                                        :
                                                        resistance.multiplier === 1 ?
                                                            <td className='pokemon__container__tables__weaknesses__cell--yellow'>{resistance.multiplier}</td>
                                                            :
                                                            resistance.multiplier === 0.5 ?
                                                                <td className='pokemon__container__tables__weaknesses__cell--green'>{resistance.multiplier}</td>
                                                                :
                                                                resistance.multiplier === 0.25 ?
                                                                    <td className='pokemon__container__tables__weaknesses__cell--blue'>{resistance.multiplier}</td>
                                                                    :
                                                                    resistance.multiplier === 0 ?
                                                                        <td className='pokemon__container__tables__weaknesses__cell--white'>{resistance.multiplier}</td>
                                                                        :
                                                                        <td className='pokemon__container__tables__weaknesses__cell'>{resistance.multiplier}</td>
                                                }
                                            </tr>
                                        ))}
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


                    </div>

                    :

                    <div className='pokemon__loading'>
                        <Loader />
                    </div>

                }
            </main>
            <Footer />
        </div>
    )
}

export default Pokemon