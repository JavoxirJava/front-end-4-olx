import { Route, Routes } from 'react-router-dom'
import Profile from '../Profile/profile'
import Product from '../Product/product'
import Messenge from '../Messenge/messenge'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/messenge' element={<Messenge/>}/>
      </Routes>
    </div>
  )
}

export default App
