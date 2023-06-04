//importing data from file path Data/data to use on shop page.
import { useState, ChangeEvent, FormEvent } from 'react'
import data from '../Data/data'

function Shop() {
  //find a full object that is referecing 1 glock
  const [glock, setGlockIndex] = useState(1)

  const found = data.find((glocks) => glocks.id === glock)
  console.log(found)

  return (
    <>
      <div>
        <p>Shop1</p>
      </div>
      <div>
        <ul>
          <img src="./public/images/Glock1.png" alt="This is a Glock"></img>
          <li>Name: {found.name}</li>
          <li>Rarity: {found.rarity}</li>
          <li>Damage: {found.damage}</li>
          <img src="./public/images/Glock2.png" alt="This is a Glock"></img>
          <li>Name:{found.name}</li>
        </ul>
      </div>
    </>
  )
}

export default Shop
