import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Header />
        <main className='home'>
            <h1 className='home__title'>Bienvenue dans notre pokedex</h1>

            <p>Ici, vous pouvez rechercher des informations concernant vos pokémons favoris</p>
        </main>
        <Footer />
    </div>
  )
}

export default Home