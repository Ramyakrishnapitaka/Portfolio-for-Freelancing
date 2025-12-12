import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './features/Home.jsx';
import About from './features/About.jsx';
import Skills from './features/Skills.jsx';
import Project from './features/Project.jsx';
import Contact from './features/Contact.jsx';
import Brand from './component/brand.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
    index: true,
    element: <Home></Home>
      },
      {
        path:"/home",
        element:<Brand></Brand>
      },
     
      {
    path: "aboutpage",
    element: <About></About>
      },
      {
    path: "skillspage",
    element: <Skills></Skills>
      },
      {
    path: "projectpage",
    element: <Project></Project>
      },
      {
      path: "contactpage",
    element: <Contact></Contact>
      }

    ]
  },
]);


createRoot(document.getElementById('root')).render(
     <StrictMode>
     <RouterProvider router={router} >
      <App/>
      </RouterProvider>
      </StrictMode>
  
)
