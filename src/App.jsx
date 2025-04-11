import './App.css'
import './bootstrap.min.css'
import Categoryproduct from './pages/Categoryproduct'
import Header from './pages/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductDetail from './pages/ProductDetail'
import {Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='' element={<Home/>}/>
        <Route path='category/product' element={<Categoryproduct/>}/>
        <Route path='detail/:id' element={<ProductDetail/>}/>

      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
