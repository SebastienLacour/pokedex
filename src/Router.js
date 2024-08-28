// Import des Routes et des composants nécessaires
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Pokelist from './pages/Pokelist'
import Search from './pages/Search'
import Pokemon from './pages/Pokemon'
import Compare from './pages/Compare'
import Compared from './pages/Compared'
import MegaEvolution from './pages/MegaEvolution'

function Router() {
  return (
    <Routes>
        <Route path='/pokelist' element={<Pokelist/>} />
        <Route path='/search' element={<Search/>}/>
        <Route path='/compare' element={<Compare/>}/>
        <Route path='/compared' element={<Compared/>}/>
        <Route path='/:id' element={<Pokemon/>} />
        <Route path='/pokemon/:name' element={<MegaEvolution/>} />
    </Routes>
  )
}

export default Router