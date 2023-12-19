import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchPets = async () =>{
          const {data} = await axios.get('http://localhost:3001/api/pets')
          console.log(data)
          setPets(data)
    }
    fetchPets()
  },[])

  return (
    <div>
      <h1>Pets
      </h1>
      <ul>{
        pets.map((pet) => {
              return (
                <li key={pet.id} className={pet.is_favorite ? 'favorite' : null}>{pet.name}</li>
              )
        })
        }</ul>
    </div>
  )
}

export default App
