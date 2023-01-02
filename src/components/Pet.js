import React, { useState } from "react";

function Pet({ pet, onAdoptPet }) {
  // const [isAdopted, setIsAdopted] = useState(pet.isAdopted)
  // //console.log(pet.isAdopted)

  // const adoptBtnClassName = () => {
  //   switch(isAdopted) {
  //     case false: return {alreadyAdopted: "ui disabled button", adoptPet: "ui primary button"}
  //     case true: return {alreadyAdopted: "ui primary button", adoptPet: "ui disabled button"}
  //   }
  // }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {pet.gender === "female" ? "♀" : "♂"}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
      {pet.isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button className="ui primary button" onClick={() => onAdoptPet(pet.id)}>
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
}

export default Pet;
