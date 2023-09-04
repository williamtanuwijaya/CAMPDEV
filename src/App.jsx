import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './sections/navbar/Navbar'
import Header from './sections/header/Header'
import Categories from './sections/categories/Categories'

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Categories/>
    </>
  )
}

export default App
