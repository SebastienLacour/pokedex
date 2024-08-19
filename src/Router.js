// Import des Routes et des composants nécessaires
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Pokelist from './pages/Pokelist'
import Search from './pages/Search'

function Router() {
  return (
    <Routes>
        <Route path='/pokelist' element={<Pokelist/>} />
        <Route path='/search' element={<Search/>}/>
    </Routes>
  )
}

export default Router