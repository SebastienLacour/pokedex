import React from 'react'
import loader from '../assets/loader_pokeball.png'

function Loader() {
  return (
    <div className='loader'>
        <img src={loader} alt="chargement" className='loader__img'/>
    </div>
  )
}

export default Loader