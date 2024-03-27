// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header'
import Home from './assets/components/Home'
import Login from './assets/components/Login'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },

  {
    path:'/Login',
    element:<Login/>

  }
])

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>   
  )
}

export default App
