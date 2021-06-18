import React from 'react'
import './layout.scss'
import Header from '../header/Header'
import Promo from '../promo/Promo'
import Categories from '../categories/Categories'
import Footer from '../footer/Footer'
import Main from '../main/Main'

const Layout = () => {
  return (
    <div className='layout'>
      <header className='header'>
        <Header />
      </header>
      
      <section className='promo'>
        <Promo />
      </section>
      
      <section className='categories'>
        <Categories />
      </section>
      
      <main className='main'>
        <Main />
      </main>
      
      <footer className='footer'><Footer /></footer>
    </div>
  )
}

export default Layout
