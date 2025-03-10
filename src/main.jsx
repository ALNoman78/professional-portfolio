import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import ContactForm from './components/ContactForm/Contact.jsx';
import Projects from './components/Projects/Projects.jsx';
import ContactSubmit from './components/ContactSubmit/ContactSubmit.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement :<ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
      },
      {
        path : '/about',
        element : <About></About>,
      },
      {
        path : '/contact',
        element : <ContactForm></ContactForm>
      },
      {
        path : '/projects',
        element : <Projects></Projects>
      },
      {
        path : '/submit',
        element : <ContactSubmit></ContactSubmit>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
