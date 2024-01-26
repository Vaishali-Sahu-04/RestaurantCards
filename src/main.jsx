import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Error from './Components/Error.jsx'
import Body from './Components/Body.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
    ],
    errorElement:<Error/>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {appRouter} />
)
