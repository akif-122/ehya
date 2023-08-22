import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import './App.css'
import Header from './components/header/Header'
import Hero from './sections/hero/Hero';
import Blog from './sections/blog/Blog';
import Artical from './sections/artical/Artical';
import Footer from './components/footer/Footer';


function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Blog/>
      <Artical/>
      <Footer/>
    </>
  )
}

export default App
