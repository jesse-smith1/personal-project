//importing data from file path Data/data to use on shop page.

import data from '../Data/data'

function shop() {
  return (
    <>
      <div>
        <p>Shop1</p>
      </div>
      <div>
        <ul>
          <img src="./public/images/Glock1.png" alt="This is a Glock"></img>
          <li>Name: {data.name}</li>
          <li>Rarity: {data.rarity}</li>
          <li>Damage: {data.damage}</li>
          <img src="./public/images/Glock2.png" alt="This is a Glock"></img>
        </ul>
      </div>
    </>
  )
}

export default shop
