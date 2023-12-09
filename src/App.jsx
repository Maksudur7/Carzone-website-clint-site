
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Footer section/Footer'
import Navbar from './Navbar section/Navbar'


function App() {
  return (

    <>
      <Navbar></Navbar>

      <Outlet></Outlet>


      <Footer></Footer>


    </>
  )
}

export default App
