// Import des Routes et des composants nécessaires
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Pokelist from './pages/Pokelist'

function Router() {
  return (
    <Routes>
        <Route path='/pokelist' element={<Pokelist/>} />
    </Routes>
  )
}

export default Router