import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import About from './pages/About.jsx'
import Work from './pages/Work.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: '/work',
        element: <Work />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/resume',
        element: <Resume />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
