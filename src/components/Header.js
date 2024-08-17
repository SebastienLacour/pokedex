// Import des fonctions et des composants nécessaires
import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Header() {

  const [togglePokelistLink, setTogglePokelistLink] = useState(false)
  const [toggleSearchLink, setToggleSearchLink] = useState(false)
  const [toggleCompare, setToggleCompareLink] = useState(false)

  const toggleHandlerPokelist = () => {
    setTogglePokelistLink(!togglePokelistLink)
    setToggleSearchLink(false)
    setToggleCompareLink(false)
  }

  return (
    <header className='header'>
      <Link className={togglePokelistLink ? 'header__link' : 'header__link__activated'} to="/pokelist"  onClick={toggleHandlerPokelist}>
        <div>
          <strong>Liste</strong>
        </div>
      </Link>
      <div className='header__div'>
        <Link className='header__link'>Recherche</Link>
      </div>

      <div className='header__div header__last__div'>
        <Link className='header__link'>Comparaison</Link>
      </div>

    </header>
  )
}

export default Header