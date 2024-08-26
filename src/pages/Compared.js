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

                <div className='compared__pokemon'>

                    <div className='compared__pokemon__item'>
                        <h2>{comparedPokemon[0].name.fr}</h2>
                        <img src={comparedPokemon[0].sprites.regular} alt={comparedPokemon[0].name.fr} />
                        <div className='compared__pokemon__item__types'>
                            <h3>types</h3>
                            {comparedPokemon[0].types.map((type) => (
                                <img src={type.image} alt={type.name} />
                            ))}
                        </div>
                        <div className='compared__pokemon__item__vulnerabilities'>
                            <h3>vulnérabilités</h3>
                            <div>
                                <div className='compared__pokemon__item__vulnerabilities__item'>
                                    <h4>grosses faiblesses</h4>
                                    <div className="compared__pokemon__item__vulnerabilities__item__flex">
                                        {comparedPokemon[0].resistances.filter((el) => el.multiplier === 4).map((resistance) => (
                                            <h4>{resistance.name}</h4>
                                        ))}
                                    </div>
                                </div>

                                <div className='compared__pokemon__item__vulnerabilities__item'>
                                    <h4>faiblesses</h4>
                                    <div className="compared__pokemon__item__vulnerabilities__item__flex">
                                        {comparedPokemon[0].resistances.filter((el) => el.multiplier === 2).map((resistance) => (
                                            <h4>{resistance.name}</h4>
                                        ))}
                                    </div>
                                </div>

                                <div className='compared__pokemon__item__vulnerabilities__item'>
                                    <h4>resistances</h4>
                                    <div className="compared__pokemon__item__vulnerabilities__item__flex">
                                        {comparedPokemon[0].resistances.filter((el) => el.multiplier === 0.5).map((resistance) => (
                                            <h4>{resistance.name}</h4>
                                        ))}
                                    </div>
                                </div>

                                <div className='compared__pokemon__item__vulnerabilities__item'>
                                    <h4>grosses resistances</h4>
                                    <div className="compared__pokemon__item__vulnerabilities__item__flex">
                                        {comparedPokemon[0].resistances.filter((el) => el.multiplier === 0.25).map((resistance) => (
                                            <h4>{resistance.name}</h4>
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

                    <div className='compared__pokemon__item'>
                        <h2>{comparedPokemon[1].name.fr}</h2>
                        <img src={comparedPokemon[1].sprites.regular} alt={comparedPokemon[1].name.fr} />
                        <div className='compared__pokemon__item__types'>
                            <h3>types</h3>
                            {comparedPokemon[1].types.map((type) => (
                                <img src={type.image} alt={type.name} />
                            ))}
                        </div>
                        <div className='compared__pokemon__item__vulnerabilities'>
                            <h3>vulnérabilités</h3>

                            <div>

                                <div className='compared__pokemon__item__vulnerabilities__item'>
                                    <h4>grosses faiblesses</h4>
                                    <div className='compared__pokemon__item__vulnerabilities__item__flex'>
                                        {comparedPokemon[1].resistances.filter((el) => el.multiplier === 4).map((resistance) => (
                                            <h4>{resistance.name}</h4>
                                        ))}
                                    </div>
                                </div>

                                <div className='compared__pokemon__item__vulnerabilities__item'>
                                    <h4>faiblesses</h4>
                                    <div className='compared__pokemon__item__vulnerabilities__item__flex'>
                                        {comparedPokemon[1].resistances.filter((el) => el.multiplier === 2).map((resistance) => (
                                            <h4>{resistance.name}</h4>
                                        ))}
                                    </div>
                                </div>

                                <div className='compared__pokemon__item__vulnerabilities__item'>
                                    <h4>resistances</h4>
                                    <div className='compared__pokemon__item__vulnerabilities__item__flex'>
                                        {comparedPokemon[1].resistances.filter((el) => el.multiplier === 0.5).map((resistance) => (
                                            <h4>{resistance.name}</h4>
                                        ))}
                                    </div>
                                </div>

                                <div className='compared__pokemon__item__vulnerabilities__item'>
                                    <h4>grosses resistances</h4>
                                    <div className='compared__pokemon__item__vulnerabilities__item__flex'>
                                        {comparedPokemon[1].resistances.filter((el) => el.multiplier === 0.25).map((resistance) => (
                                            <h4>{resistance.name}</h4>
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