
import './App.css'
import { Routes,Route } from 'react-router-dom'
// import Commitment from './Components/Commitment'
// import Contact from './Components/Contact'
// import Featured from './Components/Featured'
// import { Footer } from './Components/Footer'
// import Form from './Components/Form'
// import Header from './Components/Header'
// import Hero from './Components/Hero'
// import Knowledge from './Components/Knowledge'
// import Menu from './Components/Menu'
// import Services from './Components/Services'
// import ProductsPage from './pages/ProductsPage'
// import { ServicesPage } from './pages/ServicesPage'

import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import Articles from './pages/Articles/Articles'
import About from './pages/About/About'
import ProductsPage from './pages/Products/ProductsPage'

function App() {

  return (
      <div className=''>

        <Header/>
      {/* <Home/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/articles' element={<Articles/>}/>
        </Routes>

        <Footer/>
      </div>
      
  )
}

export default App
