import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import CategoryCard from './components/Pages/CategoryCard.jsx';
import HomePage from './components/Layouts/HomePage.jsx';
import ErrorPage from './components/Pages/ErrorPage.jsx';
import About from './components/Pages/About.jsx';
import ContactForm from './components/Pages/Contact.jsx';
import Projects from './components/Pages/Projects.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      {
        path: "",
        element: <Navigate to={'/category/01'}></Navigate>
      },
      {
        path: '/category/:id',
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        element: <CategoryCard></CategoryCard>
      }
    ],
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/contact',
    element: <ContactForm></ContactForm>
  },
  {
    path: '/projects',
    element: <Projects></Projects>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
