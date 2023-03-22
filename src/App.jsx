import { useState } from 'react'

import './App.css'
import Photo from './assets/Photo'

function App() {
  

  return (
    <div className="App">
      <div>
      <h1>Linktree Hub</h1>
      <Photo />
        
       
      </div>
    
      <div className="card">
        
        <p>
          Aqui vai o formulário
        </p>
      </div>
      <p className="madeBy">
         by <a href="https://github.com/carolmedici">Carolina Médici</a>
      </p>
    </div>
  )
}

export default App
