import './App.css'
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Home'
import Cart from './Cart'
import { UserProvider } from './Context'

function App() {
  return (
   <>
<UserProvider>
   <BrowserRouter>
   <Nav></Nav>
   <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/cart" element={<Cart/>}/>
   </Routes>
   </BrowserRouter>
   </UserProvider>

   </>
  )
}

export default App
