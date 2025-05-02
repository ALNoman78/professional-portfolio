import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import ContactForm from './components/ContactForm/Contact.jsx';
import Projects from './components/Projects/Projects.jsx';
import ContactSubmit from './components/ContactSubmit/ContactSubmit.jsx';
import CategoryCard from './components/Pages/CategoryCard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children:[{
          path: '/category/01',
          element: <Navigate to={'/category/01'}></Navigate>
        }]
      },
      {
        path: '/category/:id',
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        element: <CategoryCard></CategoryCard>
      },
{
  path: '/about',
    element : <About></About>,
      },
{
  path: '/contact',
    element : <ContactForm></ContactForm>
},
{
  path: '/projects',
    element : <Projects></Projects>
},
{
  path: '/submit',
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
