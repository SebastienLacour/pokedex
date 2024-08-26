// Import des fonctions et des composants nécessaires
import React from 'react'
import { Link } from "react-router-dom";

function Header(props) {

  const isList = props.list
  const isSearch = props.search
  const isCompare = props.compare

  return (
    <header className='header'>

      <Link className={isList ? 'header__link__activated' : 'header__link'} to="/pokelist">
        <div>
          <strong>Liste</strong>
        </div>
      </Link>

      <Link className={isSearch ? 'header__link__activated' : 'header__link'} to="/search">
        <div>
          <strong>Recherche</strong>
        </div>
      </Link>

      <Link className={isCompare ? 'header__link__activated' : 'header__link'} to="/compare">
        <div>
          <strong>Comparaison</strong>
        </div>
      </Link>

    </header>
  )
}

export default Header