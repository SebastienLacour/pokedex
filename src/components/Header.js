// Import des fonctions et des composants nécessaires
import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
        <Link className='header__link'>Liste</Link>
        <Link className='header__link'>Recherche</Link>
        <Link className='header__link'>Comparaison</Link>
    </header>
  )
}

export default Header