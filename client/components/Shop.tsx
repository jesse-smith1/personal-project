//importing data from file path Data/data to use on shop page.
import data from '../Data/data'
import { Link } from 'react-router-dom'

function Shop() {
  return (
    <>
      <div>
        <h1>GlockenSpiel</h1>
      </div>

      <div className="flex-container">
        {/* use this function to get shit out of the data */}
        {/* {data.map(puppy => <Pup key={puppy.id} puppy={puppy} />)} */}
        {/* {data.map(puppy => <Pup key={puppy.id} {...puppy} />)} */}

        <Link to="/buy">
          <img
            src="./client/public/images/Glock1.png"
            alt="This is a Glock"
          ></img>
        </Link>

        <Link to="/buy">
          <img
            src="./client/public/images/Glock2.png"
            alt="This is a Glock aswell"
          ></img>
        </Link>
      </div>
    </>
  )
}

export default Shop
