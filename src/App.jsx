import './App.css'
import './bootstrap.min.css'
import Login from './pages/Login'
import Register from './pages/Register'
import {Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Routes>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
