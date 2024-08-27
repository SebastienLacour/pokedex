import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
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


    return (
        <div>
            <Header />
            <main className="compared">
                <h1>Comparaison</h1>

                <div className='compared__pokemon'>

                    <div className='compared__pokemon__item compared__pokemon__item--left'>
                        <h2>{comparedPokemon[0].name.fr}</h2>
                        <img src={comparedPokemon[0].sprites.regular} alt={comparedPokemon[0].name.fr} />
                        <div className='compared__pokemon__item__types'>
                            <h3>types</h3>
                            {comparedPokemon[0].types.map((type) => (
                                <img src={type.image} alt={type.name} className='compared__pokemon__item__types__img'/>
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
                                                    <img src={types.find((item) => item.name.toLowerCase() === resistance.name.toLowerCase()).img} alt={resistance.name} className="compared__pokemon__item__vulnerabilities__item__flex__img"/>
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
                                                    <img src={types.find((item) => item.name.toLowerCase() === resistance.name.toLowerCase()).img} alt={resistance.name} className="compared__pokemon__item__vulnerabilities__item__flex__img"/>
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
                                                    <img src={types.find((item) => item.name.toLowerCase() === resistance.name.toLowerCase()).img} alt={resistance.name} className="compared__pokemon__item__vulnerabilities__item__flex__img"/>
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
                                                    <img src={types.find((item) => item.name.toLowerCase() === resistance.name.toLowerCase()).img} alt={resistance.name} className="compared__pokemon__item__vulnerabilities__item__flex__img"/>
                                                </div>
                                                :
                                                <div>

                                                </div>             
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='compared__pokemon__item__stats'>
                            <h3>Stats</h3>
                            <div className="compared__pokemon__item__stats__item">
                                <h4>Vie</h4>
                                <strong>{comparedPokemon[0].stats.hp}</strong>
                            </div>
                            <div className="compared__pokemon__item__stats__item">
                                <h4>Attaque</h4>
                                <strong>{comparedPokemon[0].stats.atk}</strong>
                            </div>
                            <div className="compared__pokemon__item__stats__item">
                                <h4>Défense</h4>
                                <strong>{comparedPokemon[0].stats.def}</strong>
                            </div>
                            <div className="compared__pokemon__item__stats__item">
                                <h4>Attaque spéciale</h4>
                                <strong>{comparedPokemon[0].stats.spe_atk}</strong>
                            </div>
                            <div className="compared__pokemon__item__stats__item">
                                <h4>Défense spéciale</h4>
                                <strong>{comparedPokemon[0].stats.spe_def}</strong>
                            </div>
                            <div className="compared__pokemon__item__stats__item">
                                <h4>Vitesse</h4>
                                <strong>{comparedPokemon[0].stats.vit}</strong>
                            </div>
                        </div>
                    </div>

                    <div className='compared__pokemon__item compared__pokemon__item--right'>
                        <h2>{comparedPokemon[1].name.fr}</h2>
                        <img src={comparedPokemon[1].sprites.regular} alt={comparedPokemon[1].name.fr} />
                        <div className='compared__pokemon__item__types'>
                            <h3>types</h3>
                            {comparedPokemon[1].types.map((type) => (
                                <img src={type.image} alt={type.name} className='compared__pokemon__item__types__img'/>
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
                                                    <img src={types.find((item) => item.name.toLowerCase() === resistance.name.toLowerCase()).img} alt={resistance.name} className="compared__pokemon__item__vulnerabilities__item__flex__img"/>
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
                                                    <img src={types.find((item) => item.name.toLowerCase() === resistance.name.toLowerCase()).img} alt={resistance.name} className="compared__pokemon__item__vulnerabilities__item__flex__img"/>
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
                                                    <img src={types.find((item) => item.name.toLowerCase() === resistance.name.toLowerCase()).img} alt={resistance.name} className="compared__pokemon__item__vulnerabilities__item__flex__img"/>
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
                                                    <img src={types.find((item) => item.name.toLowerCase() === resistance.name.toLowerCase()).img} alt={resistance.name} className="compared__pokemon__item__vulnerabilities__item__flex__img"/>
                                                </div>
                                                :
                                                <div>

                                                </div>             
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='compared__pokemon__item__stats'>
                            <h3>Stats</h3>
                            <div className="compared__pokemon__item__stats__item--reversed">
                                <h4>Vie</h4>
                                <strong>{comparedPokemon[1].stats.hp}</strong>
                            </div>
                            <div className="compared__pokemon__item__stats__item--reversed">
                                <h4>Attaque</h4>
                                <strong>{comparedPokemon[1].stats.atk}</strong>
                            </div>
                            <div className="compared__pokemon__item__stats__item--reversed">
                                <h4>Défense</h4>
                                <strong>{comparedPokemon[1].stats.def}</strong>
                            </div>
                            <div className="compared__pokemon__item__stats__item--reversed">
                                <h4>Attaque spéciale</h4>
                                <strong>{comparedPokemon[1].stats.spe_atk}</strong>
                            </div>
                            <div className="compared__pokemon__item__stats__item--reversed">
                                <h4>Défense spéciale</h4>
                                <strong>{comparedPokemon[1].stats.spe_def}</strong>
                            </div>
                            <div className="compared__pokemon__item__stats__item--reversed">
                                <h4>Vitesse</h4>
                                <strong>{comparedPokemon[1].stats.vit}</strong>
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