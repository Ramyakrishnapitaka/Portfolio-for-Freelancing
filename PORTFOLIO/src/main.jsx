import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './features/home.jsx';
import About from './features/About.jsx';
import Skills from './features/Skills.jsx';
import Project from './features/Project.jsx';
import Contact from './features/Contact.jsx';
import Resume from './features/Resume.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
    path: "homepage",
    element: <Home></Home>
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
    path: "resumepage",
    element: <Resume></Resume>
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
