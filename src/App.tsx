import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import CustomRequest from './pages/CustomRequest'

function App() {


  return (
       <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/product" element={<ProductDetail />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/request" element={<CustomRequest />} />
       </Routes>
  )
}

export default App
