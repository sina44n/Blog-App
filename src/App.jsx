import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {lazy, Suspense} from 'react'
import Nav from './Nav'
import Posts from './Posts'
const Detail = lazy(()=> import ('./Detail')) 
const Create = lazy(()=> import ('./Create')) 
import Footer from './Footer'




function App() {


  return (

    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path ='/' element={<Posts/>}></Route>
        <Route path ='/read/:id' element={<Suspense fallback={<h2>Please wait while it loads...</h2>}><Detail/></Suspense>}></Route>
        <Route path='newblog' element={<Suspense fallback={<h2>Loading...</h2>}><Create/></Suspense>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App 