import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import About from './sections/About'
import AppShowcase from './sections/AppShowcase'  

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <AppShowcase/>
      <Clients/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
