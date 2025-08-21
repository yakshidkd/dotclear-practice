import React from 'react'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import About from './Pages/About'

const Layout = () =>{
  return(
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
