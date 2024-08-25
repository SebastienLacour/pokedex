// Import des fonctions et des composants nécessaires
import React, { useState } from 'react'
import { Link, useParams, useSearchParams } from "react-router-dom";

function Header(props) {

  const isList = props.list
  const isSearch = props.search
  const isCompare = props.compare

  const [togglePokelistLink, setTogglePokelistLink] = useState(false)
  const [toggleSearchLink, setToggleSearchLink] = useState(false)
  const [toggleCompareLink, setToggleCompareLink] = useState(false)

  const toggleHandlerPokelist = () => {
    setTogglePokelistLink(true)
    setToggleSearchLink(false)
    setToggleCompareLink(false)
  }

  const toggleHandlerSearch = () => {
    setTogglePokelistLink(false)
    setToggleSearchLink(true)
    setToggleCompareLink(false)
  }

  const toggleHandlerCompare = () => {
    setTogglePokelistLink(false)
    setToggleSearchLink(false)
    setToggleCompareLink(true)
  }

  return (
    <header className='header'>

      <Link className={isList ? 'header__link__activated' : 'header__link'} to="/pokelist" onClick={toggleHandlerPokelist}>
        <div>
          <strong>Liste</strong>
        </div>
      </Link>

      <Link className={isSearch ? 'header__link__activated' : 'header__link'} to="/search" onClick={toggleHandlerSearch}>
        <div>
          <strong>Recherche</strong>
        </div>
      </Link>

      <Link className={isCompare ? 'header__link__activated' : 'header__link'} to="/compare" onClick={toggleHandlerCompare}>
        <div>
          <strong>Comparaison</strong>
        </div>
      </Link>

    </header>
  )
}

export default Header