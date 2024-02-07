import { Route, Routes } from 'react-router-dom'
import Profile from '../Profile/profile'
import Product from '../Product/product'
import Messenge from '../Messenge/messenge'
import HomePage from '../Home-Page/home-page'
import Navbar from '../Navbar/navbar'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/messenge' element={<Messenge/>}/>
        <Route path='/home-page' element={<HomePage/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
      </Routes>
    </div>
  )
}

export default App
