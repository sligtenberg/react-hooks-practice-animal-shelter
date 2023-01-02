import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onChangeType (newType) {
    setFilters({ type: newType })
  }

  const urlFilterString = () => {
    switch(filters.type) {
      case 'all': return ''
      default: return `?type=${filters.type}`
    }
  }

  function onFindPetsClick () {
    fetch(`http://localhost:3001/pets${urlFilterString()}`)
    .then(r => r.json())
    .then(setPets)
  }

  function onAdoptPet (petId) {
    const updatedPets = pets.map(pet => {
      if (pet.id === petId) {
        pet.isAdopted = true
        return pet
      }
      else return pet
    })
    setPets(updatedPets)
    console.log(pets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
