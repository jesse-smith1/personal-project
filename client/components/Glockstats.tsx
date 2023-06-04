import data from '../Data/data'
import { useState } from 'react'

function Glockstats() {
  //find a full object that is referecing 1 glock
  const [glock, setGlockIndex] = useState(1)

  const found = data.find((glocks) => glocks.id === glock)
  return (
    <ul>
      <img src="./client/public/images/Glock1.png" alt="This is a Glock"></img>
      <li>Name: {found.name}</li>
      <li>Rarity: {found.rarity}</li>
      <li>Damage: {found.damage}</li>
      <img src="./client/public/images/Glock2.png" alt="This is a Glock"></img>
      <li>Name:{found.name}</li>
    </ul>
  )
}

export default Glockstats
