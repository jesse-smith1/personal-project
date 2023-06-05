import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Buy from './components/Buy'
import Shop from './components/Shop'

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Shop />}></Route>
      <Route path="/buy" element={<Buy />}></Route>
    </Route>
  )
)

export default routes
