import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './components/Header'



const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/'  element={<Home />}>Home</Route>
      <Route path='/sign-in'  element={<Signin />}>Sign In</Route>
      <Route path='/sign-up'  element={<Signup />}>Sign Up</Route>
      <Route path='/profile'  element={<Profile />}>Profile</Route>
      <Route path='/about'  element={<About />}>About</Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
