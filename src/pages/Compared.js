import { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { LanguageContext } from '../context/LanguageContext'

// Import des images des types
import normal from '../assets/type_normal.png'
import fly from '../assets/type_vol.png'
import fire from '../assets/type_feu.png'
import water from '../assets/type_eau.png'
import plant from '../assets/type_plante.png'
import electrik from '../assets/type_electrik.png'
import combat from '../assets/type_combat.png'
import ground from '../assets/type_sol.png'
import rock from '../assets/type_roche.png'
import steel from '../assets/type_acier.png'
import poison from '../assets/type_poison.png'
import bug from '../assets/type_insecte.png'
import psy from '../assets/type_psy.png'
import dark from '../assets/type_tenebre.png'
import spirit from '../assets/type_spectre.png'
import ice from '../assets/type_glace.png'
import dragon from '../assets/type_dragon.png'
import fairy from '../assets/type_fee.png'

function Compared() {

    // Récupération des données du localStorage
    const comparedPokemon = JSON.parse(localStorage.getItem("pokemons"))
    console.log(comparedPokemon);

    // Récupération de la langue du context
    const language = useContext(LanguageContext)

    // Tableau d'objet contenant tous les types : le nom et son image
    const types = [
        {
            name: "normal",
            img: normal
        },
        {
            name: "vol",
            img: fly
        },
        {
            name: "combat",
            img: combat
        },
        {
            name: "feu",
            img: fire
        },
        {
            name: "eau",
            img: water
        },
        {
            name: "plante",
            img: plant
        },
        {
            name: "électrik",
            img: electrik
        },
        {
            name: "sol",
            img: ground
        },
        {
            name: "roche",
            img: rock
        },
        {
            name: "acier",
            img: steel
        },
        {
            name: "poison",
            img: poison
        },
        {
            name: "insecte",
            img: bug
        },
        {
            name: "glace",
            img: ice
        },
        {
            name: "psy",
            img: psy
        },
        {
            name: "ténèbres",
            img: dark
        },
        {
            name: "spectre",
            img: spirit
        },
        {
            name: "dragon",
            img: dragon
        },
        {
            name: "fée",
            img: fairy
        },
    ]

    let statbarHPFirst = ""
    let statbarAtkFirst = ""
    let statbarDefFirst = ""
    let statbarSpeAtkFirst = ""
    let statbarSpeDefFirst = ""
    let statbarVitFirst = ""
    let statbarHPSecond = ""
    let statbarAtkSecond = ""
    let statbarDefSecond = ""
    let statbarSpeAtkSecond = ""
    let statbarSpeDefSecond = ""
    let statbarVitSecond = ""

    if (comparedPokemon[0].stats.hp < 60) {
        statbarHPFirst = 'compared__pokemon__item__stats__item__full-bar--red'
    } else if (comparedPokemon[0].stats.hp >= 60 && comparedPokemon[0].stats.hp < 80) {
        statbarHPFirst = 'compared__pokemon__item__stats__item__full-bar--orange'
    } else if (comparedPokemon[0].stats.hp >= 80 && comparedPokemon[0].stats.hp < 100) {
        statbarHPFirst = 'compared__pokemon__item__stats__item__full-bar--yellow'
    } else if (comparedPokemon[0].stats.hp >= 100) {
        statbarHPFirst = 'compared__pokemon__item__stats__item__full-bar--green'
    } else {
        statbarHPFirst = 'pokemon__container__stats__item__full-bar'
    }

    if (comparedPokemon[0].stats.atk < 60) {
        statbarAtkFirst = 'compared__pokemon__item__stats__item__full-bar--red'
    } else if (comparedPokemon[0].stats.atk >= 60 && comparedPokemon[0].stats.atk < 80) {
        statbarAtkFirst = 'compared__pokemon__item__stats__item__full-bar--orange'
    } else if (comparedPokemon[0].stats.atk >= 80 && comparedPokemon[0].stats.atk < 100) {
        statbarAtkFirst = 'compared__pokemon__item__stats__item__full-bar--yellow'
    } else if (comparedPokemon[0].stats.atk >= 100) {
        statbarAtkFirst = 'compared__pokemon__item__stats__item__full-bar--green'
    } else {
        statbarAtkFirst = 'pokemon__container__stats__item__full-bar'
    }

    if (comparedPokemon[0].stats.def < 60) {
        statbarDefFirst = 'compared__pokemon__item__stats__item__full-bar--red'
    } else if (comparedPokemon[0].stats.def >= 60 && comparedPokemon[0].stats.def < 80) {
        statbarDefFirst = 'compared__pokemon__item__stats__item__full-bar--orange'
    } else if (comparedPokemon[0].stats.def >= 80 && comparedPokemon[0].stats.def < 100) {
        statbarDefFirst = 'compared__pokemon__item__stats__item__full-bar--yellow'
    } else if (comparedPokemon[0].stats.def >= 100) {
        statbarDefFirst = 'compared__pokemon__item__stats__item__full-bar--green'
    } else {
        statbarDefFirst = 'pokemon__container__stats__item__full-bar'
    }

    if (comparedPokemon[0].stats.spe_atk < 60) {
        statbarSpeAtkFirst = 'compared__pokemon__item__stats__item__full-bar--red'
    } else if (comparedPokemon[0].stats.spe_atk >= 60 && comparedPokemon[0].stats.spe_atk < 80) {
        statbarSpeAtkFirst = 'compared__pokemon__item__stats__item__full-bar--orange'
    } else if (comparedPokemon[0].stats.spe_atk >= 80 && comparedPokemon[0].stats.spe_atk < 100) {
        statbarSpeAtkFirst = 'compared__pokemon__item__stats__item__full-bar--yellow'
    } else if (comparedPokemon[0].stats.spe_atk >= 100) {
        statbarSpeAtkFirst = 'compared__pokemon__item__stats__item__full-bar--green'
    } else {
        statbarSpeAtkFirst = 'pokemon__container__stats__item__full-bar'
    }

    if (comparedPokemon[0].stats.spe_def < 60) {
        statbarSpeDefFirst = 'compared__pokemon__item__stats__item__full-bar--red'
    } else if (comparedPokemon[0].stats.spe_def >= 60 && comparedPokemon[0].stats.spe_def < 80) {
        statbarSpeDefFirst = 'compared__pokemon__item__stats__item__full-bar--orange'
    } else if (comparedPokemon[0].stats.spe_def >= 80 && comparedPokemon[0].stats.spe_def < 100) {
        statbarSpeDefFirst = 'compared__pokemon__item__stats__item__full-bar--yellow'
    } else if (comparedPokemon[0].stats.spe_def >= 100) {
        statbarSpeDefFirst = 'compared__pokemon__item__stats__item__full-bar--green'
    } else {
        statbarSpeDefFirst = 'pokemon__container__stats__item__full-bar'
    }

    if (comparedPokemon[0].stats.vit < 60) {
        statbarVitFirst = 'compared__pokemon__item__stats__item__full-bar--red'
    } else if (comparedPokemon[0].stats.vit >= 60 && comparedPokemon[0].stats.vit < 80) {
        statbarVitFirst = 'compared__pokemon__item__stats__item__full-bar--orange'
    } else if (comparedPokemon[0].stats.vit >= 80 && comparedPokemon[0].stats.vit < 100) {
        statbarVitFirst = 'compared__pokemon__item__stats__item__full-bar--yellow'
    } else if (comparedPokemon[0].stats.vit >= 100) {
        statbarVitFirst = 'compared__pokemon__item__stats__item__full-bar--green'
    } else {
        statbarVitFirst = 'pokemon__container__stats__item__full-bar'
    }

    if (comparedPokemon[1].stats.hp < 60) {
        statbarHPSecond = 'compared__pokemon__item__stats__item__full-bar--red'
    } else if (comparedPokemon[1].stats.hp >= 60 && comparedPokemon[1].stats.hp < 80) {
        statbarHPSecond = 'compared__pokemon__item__stats__item__full-bar--orange'
    } else if (comparedPokemon[1].stats.hp >= 80 && comparedPokemon[1].stats.hp < 100) {
        statbarHPSecond = 'compared__pokemon__item__stats__item__full-bar--yellow'
    } else if (comparedPokemon[1].stats.hp >= 100) {
        statbarHPSecond = 'compared__pokemon__item__stats__item__full-bar--green'
    } else {
        statbarHPSecond = 'pokemon__container__stats__item__full-bar'
    }

    if (comparedPokemon[1].stats.atk < 60) {
        statbarAtkSecond = 'compared__pokemon__item__stats__item__full-bar--red'
    } else if (comparedPokemon[1].stats.atk >= 60 && comparedPokemon[1].stats.atk < 80) {
        statbarAtkSecond = 'compared__pokemon__item__stats__item__full-bar--orange'
    } else if (comparedPokemon[1].stats.atk >= 80 && comparedPokemon[1].stats.atk < 100) {
        statbarAtkSecond = 'compared__pokemon__item__stats__item__full-bar--yellow'
    } else if (comparedPokemon[1].stats.atk >= 100) {
        statbarAtkSecond = 'compared__pokemon__item__stats__item__full-bar--green'
    } else {
        statbarAtkSecond = 'pokemon__container__stats__item__full-bar'
    }

    if (comparedPokemon[1].stats.def < 60) {
        statbarDefSecond = 'compared__pokemon__item__stats__item__full-bar--red'
    } else if (comparedPokemon[1].stats.def >= 60 && comparedPokemon[1].stats.def < 80) {
        statbarDefSecond = 'compared__pokemon__item__stats__item__full-bar--orange'
    } else if (comparedPokemon[1].stats.def >= 80 && comparedPokemon[1].stats.def < 100) {
        statbarDefSecond = 'compared__pokemon__item__stats__item__full-bar--yellow'
    } else if (comparedPokemon[1].stats.def >= 100) {
        statbarDefSecond = 'compared__pokemon__item__stats__item__full-bar--green'
    } else {
        statbarDefSecond = 'pokemon__container__stats__item__full-bar'
    }

    if (comparedPokemon[1].stats.spe_atk < 60) {
        statbarSpeAtkSecond = 'compared__pokemon__item__stats__item__full-bar--red'
    } else if (comparedPokemon[1].stats.spe_atk >= 60 && comparedPokemon[1].stats.spe_atk < 80) {
        statbarSpeAtkSecond = 'compared__pokemon__item__stats__item__full-bar--orange'
    } else if (comparedPokemon[1].stats.spe_atk >= 80 && comparedPokemon[1].stats.spe_atk < 100) {
        statbarSpeAtkSecond = 'compared__pokemon__item__stats__item__full-bar--yellow'
    } else if (comparedPokemon[1].stats.spe_atk >= 100) {
        statbarSpeAtkSecond = 'compared__pokemon__item__stats__item__full-bar--green'
    } else {
        statbarSpeAtkSecond = 'pokemon__container__stats__item__full-bar'
    }

    if (comparedPokemon[1].stats.spe_def < 60) {
        statbarSpeDefSecond = 'compared__pokemon__item__stats__item__full-bar--red'
    } else if (comparedPokemon[1].stats.spe_def >= 60 && comparedPokemon[1].stats.spe_def < 80) {
        statbarSpeDefSecond = 'compared__pokemon__item__stats__item__full-bar--orange'
    } else if (comparedPokemon[1].stats.spe_def >= 80 && comparedPokemon[1].stats.spe_def < 100) {
        statbarSpeDefSecond = 'compared__pokemon__item__stats__item__full-bar--yellow'
    } else if (comparedPokemon[1].stats.spe_def >= 100) {
        statbarSpeDefSecond = 'compared__pokemon__item__stats__item__full-bar--green'
    } else {
        statbarSpeDefSecond = 'pokemon__container__stats__item__full-bar'
    }

    if (comparedPokemon[1].stats.vit < 60) {
        statbarVitSecond = 'compared__pokemon__item__stats__item__full-bar--red'
    } else if (comparedPokemon[1].stats.vit >= 60 && comparedPokemon[1].stats.vit < 80) {
        statbarVitSecond = 'compared__pokemon__item__stats__item__full-bar--orange'
    } else if (comparedPokemon[1].stats.vit >= 80 && comparedPokemon[1].stats.vit < 100) {
        statbarVitSecond = 'compared__pokemon__item__stats__item__full-bar--yellow'
    } else if (comparedPokemon[1].stats.vit >= 100) {
        statbarVitSecond = 'compared__pokemon__item__stats__item__full-bar--green'
    } else {
        statbarVitSecond = 'pokemon__container__stats__item__full-bar'
    }

    return (
        <div>
            <Header />
            <main className="compared">
                <h1>Comparaison</h1>

                <div className='compared__pokemon'>

                    <div className='compared__pokemon__item compared__pokemon__item--left'>
                        {language === "anglais" ?
                            <h2>{comparedPokemon[0].name.en}</h2>
                            :
                            <h2>{comparedPokemon[0].name.fr}</h2>
                        }
                        <img src={comparedPokemon[0].sprites.regular} alt={comparedPokemon[0].name.fr} />
                        <div className='compared__pokemon__item__types'>
                            <h3>types</h3>
                            {comparedPokemon[0].types.map((type) => (
                                <img src={type.image} alt={type.name} className='compared__pokemon__item__types__img' />
                            ))}
                        </div>
                        <div className='compared__pokemon__item__vulnerabilities'>
                            <h3>Vulnérabilités</h3>
                            <div>
                                <div className='compared__pokemon__item__vulnerabilities__item'>
                                    <h4>grosses faiblesses</h4>
                                    <div className="compared__pokemon__item__vulnerabilities__item__flex">
                                        {comparedPokemon[0].resistances.filter((el) => el.multiplier === 4).map((resistance) => (
                                            resistance ?
                                                <div>
                                                    <img src={types.find((item) => item.name.toLowerCase() === resistance.name.toLowerCase()).img} alt={resistance.name} className="compared__pokemon__item__vulnerabilities__item__flex__img" />
                                                </div>
                                                :
                                                <div>

                                                </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='compared__pokemon__item__vulnerabilities__item'>
                                    <h4>faiblesses</h4>
                                    <div className="compared__pokemon__item__vulnerabilities__item__flex">
                                        {comparedPokemon[0].resistances.filter((el) => el.multiplier === 2).map((resistance) => (
                                            resistance ?
                                                <div>
                                                    <img src={types.find((item) => item.name.toLowerCase() === resistance.name.toLowerCase()).img} alt={resistance.name} className="compared__pokemon__item__vulnerabilities__item__flex__img" />
                                                </div>
                                                :
                                                <div>

                                                </div>

                                        ))}
                                    </div>
                                </div>

                                <div className='compared__pokemon__item__vulnerabilities__item'>
                                    <h4>resistances</h4>
                                    <div className="compared__pokemon__item__vulnerabilities__item__flex">
                                        {comparedPokemon[0].resistances.filter((el) => el.multiplier === 0.5).map((resistance) => (
                                            resistance ?
                                                <div>
                                                    <img src={types.find((item) => item.name.toLowerCase() === resistance.name.toLowerCase()).img} alt={resistance.name} className="compared__pokemon__item__vulnerabilities__item__flex__img" />
                                                </div>
                                                :
                                                <div>

                                                </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='compared__pokemon__item__vulnerabilities__item'>
                                    <h4>grosses resistances</h4>
                                    <div className="compared__pokemon__item__vulnerabilities__item__flex">
                                        {comparedPokemon[0].resistances.filter((el) => el.multiplier === 0.25).map((resistance) => (
                                            resistance ?
                                                <div>
                                                    <img src={types.find((item) => item.name.toLowerCase() === resistance.name.toLowerCase()).img} alt={resistance.name} className="compared__pokemon__item__vulnerabilities__item__flex__img" />
                                                </div>
                                                :
                                                <div>

                                                </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <h3>Stats</h3>
                        <div className='compared__pokemon__item__stats'>
                            <div className="compared__pokemon__item__stats__item">
                                <h4>Vie</h4>
                                <strong>{comparedPokemon[0].stats.hp}</strong>
                                <div className='compared__pokemon__item__stats__item__empty-bar'>
                                    <div className={statbarHPFirst} style={{ width: `${comparedPokemon[0].stats.hp}%` }}></div>
                                </div>
                            </div>
                            <div className="compared__pokemon__item__stats__item">
                                <h4>Attaque</h4>
                                <strong>{comparedPokemon[0].stats.atk}</strong>
                                <div className='compared__pokemon__item__stats__item__empty-bar'>
                                    <div className={statbarAtkFirst} style={{ width: `${comparedPokemon[0].stats.atk}%` }}></div>
                                </div>

                            </div>
                            <div className="compared__pokemon__item__stats__item">
                                <h4>Défense</h4>
                                <strong>{comparedPokemon[0].stats.def}</strong>
                                <div className='compared__pokemon__item__stats__item__empty-bar'>
                                    <div className={statbarDefFirst} style={{ width: `${comparedPokemon[0].stats.def}%` }}></div>
                                </div>

                            </div>
                            <div className="compared__pokemon__item__stats__item">
                                <h4>Attaque spéciale</h4>
                                <strong>{comparedPokemon[0].stats.spe_atk}</strong>
                                <div className='compared__pokemon__item__stats__item__empty-bar'>
                                    <div className={statbarSpeAtkFirst} style={{ width: `${comparedPokemon[0].stats.spe_atk}%` }}></div>
                                </div>

                            </div>
                            <div className="compared__pokemon__item__stats__item">
                                <h4>Défense spéciale</h4>
                                <strong>{comparedPokemon[0].stats.spe_def}</strong>
                                <div className='compared__pokemon__item__stats__item__empty-bar'>
                                    <div className={statbarSpeDefFirst} style={{ width: `${comparedPokemon[0].stats.spe_def}%` }}></div>
                                </div>

                            </div>
                            <div className="compared__pokemon__item__stats__item">
                                <h4>Vitesse</h4>
                                <strong>{comparedPokemon[0].stats.vit}</strong>
                                <div className='compared__pokemon__item__stats__item__empty-bar'>
                                    <div className={statbarVitFirst} style={{ width: `${comparedPokemon[0].stats.vit}%` }}></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='compared__pokemon__item compared__pokemon__item--right'>
                    {language === "anglais" ?
                            <h2>{comparedPokemon[1].name.en}</h2>
                            :
                            <h2>{comparedPokemon[1].name.fr}</h2>
                        }
                        <img src={comparedPokemon[1].sprites.regular} alt={comparedPokemon[1].name.fr} />
                        <div className='compared__pokemon__item__types'>
                            <h3>types</h3>
                            {comparedPokemon[1].types.map((type) => (
                                <img src={type.image} alt={type.name} className='compared__pokemon__item__types__img' />
                            ))}
                        </div>
                        <div className='compared__pokemon__item__vulnerabilities'>
                            <h3>Vulnérabilités</h3>

                            <div>

                                <div className='compared__pokemon__item__vulnerabilities__item'>
                                    <h4>grosses faiblesses</h4>
                                    <div className='compared__pokemon__item__vulnerabilities__item__flex'>
                                        {comparedPokemon[1].resistances.filter((el) => el.multiplier === 4).map((resistance) => (
                                            resistance ?
                                                <div>
                                                    <img src={types.find((item) => item.name.toLowerCase() === resistance.name.toLowerCase()).img} alt={resistance.name} className="compared__pokemon__item__vulnerabilities__item__flex__img" />
                                                </div>
                                                :
                                                <div>

                                                </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='compared__pokemon__item__vulnerabilities__item'>
                                    <h4>faiblesses</h4>
                                    <div className='compared__pokemon__item__vulnerabilities__item__flex'>
                                        {comparedPokemon[1].resistances.filter((el) => el.multiplier === 2).map((resistance) => (
                                            resistance ?
                                                <div>
                                                    <img src={types.find((item) => item.name.toLowerCase() === resistance.name.toLowerCase()).img} alt={resistance.name} className="compared__pokemon__item__vulnerabilities__item__flex__img" />
                                                </div>
                                                :
                                                <div>

                                                </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='compared__pokemon__item__vulnerabilities__item'>
                                    <h4>resistances</h4>
                                    <div className='compared__pokemon__item__vulnerabilities__item__flex'>
                                        {comparedPokemon[1].resistances.filter((el) => el.multiplier === 0.5).map((resistance) => (
                                            resistance ?
                                                <div>
                                                    <img src={types.find((item) => item.name.toLowerCase() === resistance.name.toLowerCase()).img} alt={resistance.name} className="compared__pokemon__item__vulnerabilities__item__flex__img" />
                                                </div>
                                                :
                                                <div>

                                                </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='compared__pokemon__item__vulnerabilities__item'>
                                    <h4>grosses resistances</h4>
                                    <div className='compared__pokemon__item__vulnerabilities__item__flex'>
                                        {comparedPokemon[1].resistances.filter((el) => el.multiplier === 0.25).map((resistance) => (
                                            resistance ?
                                                <div>
                                                    <img src={types.find((item) => item.name.toLowerCase() === resistance.name.toLowerCase()).img} alt={resistance.name} className="compared__pokemon__item__vulnerabilities__item__flex__img" />
                                                </div>
                                                :
                                                <div>

                                                </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3>Stats</h3>
                        <div className=' compared__pokemon__item__stats--reversed'>
                            <div className=" compared__pokemon__item__stats__item--reversed">
                                <div className='compared__pokemon__item__stats__item__empty-bar--reversed'>
                                    <div className={statbarHPSecond} style={{ width: `${comparedPokemon[1].stats.hp}%` }}></div>
                                </div>
                                <strong>{comparedPokemon[1].stats.hp}</strong>
                                <h4>Vie</h4>
                            </div>

                            <div className="compared__pokemon__item__stats__item--reversed">
                                <div className='compared__pokemon__item__stats__item__empty-bar--reversed'>
                                    <div className={statbarAtkSecond} style={{ width: `${comparedPokemon[1].stats.atk}%` }}></div>
                                </div>
                                <strong>{comparedPokemon[1].stats.atk}</strong>
                                <h4>Attaque</h4>
                            </div>

                            <div className="compared__pokemon__item__stats__item--reversed">
                                <div className='compared__pokemon__item__stats__item__empty-bar--reversed'>
                                    <div className={statbarDefSecond} style={{ width: `${comparedPokemon[1].stats.def}%` }}></div>
                                </div>
                                <strong>{comparedPokemon[1].stats.def}</strong>
                                <h4>Défense</h4>
                            </div>

                            <div className="compared__pokemon__item__stats__item--reversed">
                                <div className='compared__pokemon__item__stats__item__empty-bar--reversed'>
                                    <div className={statbarSpeAtkSecond} style={{ width: `${comparedPokemon[1].stats.spe_atk}%` }}></div>
                                </div>
                                <strong>{comparedPokemon[1].stats.spe_atk}</strong>
                                <h4>Attaque spéciale</h4>
                            </div>

                            <div className="compared__pokemon__item__stats__item--reversed">
                                <div className='compared__pokemon__item__stats__item__empty-bar--reversed'>
                                    <div className={statbarSpeDefSecond} style={{ width: `${comparedPokemon[1].stats.spe_def}%` }}></div>
                                </div>
                                <strong>{comparedPokemon[1].stats.spe_def}</strong>
                                <h4>Défense spéciale</h4>
                            </div>

                            <div className="compared__pokemon__item__stats__item--reversed">
                                <div className='compared__pokemon__item__stats__item__empty-bar--reversed'>
                                    <div className={statbarVitSecond} style={{ width: `${comparedPokemon[1].stats.vit}%` }}></div>
                                </div>
                                <strong>{comparedPokemon[1].stats.vit}</strong>
                                <h4>Vitesse</h4>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
            <Footer />
        </div>
    )
}

export default Compared