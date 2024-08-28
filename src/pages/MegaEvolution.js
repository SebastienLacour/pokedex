import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'

function MegaEvolution() {

    const id = useParams()



  return (
    <div>
        <Header />
        <main>
Mégaevolution
        </main>
        <Footer />
    </div>
  )
}

export default MegaEvolution