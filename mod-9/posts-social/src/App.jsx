import {Link, NavLink, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import NotFound from './pages/NotFound'
import ProductDetailPage from './pages/ProductDetailPage'
import './App.css'

function App() {
  

  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/products'>Products</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:productId' element={<ProductDetailPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>



    </>
  )
}

export default App
