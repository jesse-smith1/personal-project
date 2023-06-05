//this is the first page and will show up on localhost:5173
import Shop from '../components/Shop'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>App</h1>
      <p>React development has begun!</p>
      {/* referencing the shop page */}
      <Outlet />
    </div>
  )
}

export default App
