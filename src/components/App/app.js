import { Route, Routes } from 'react-router-dom'
import Profile from '../Profile/profile'
import Product from '../Product/product'

const App = () => {
  return (
    <div>
      <Routes>

        <Route path='/profile' element={<Profile/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App
