import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Login.jsx'
import SignUp from './SignUp.jsx'
import Home from './Home.jsx'
import PageNotFound from './PageNotFound.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home />,
    errorElement : <PageNotFound />
  },
  {
    path : '/Login',
    element : <Login />,
    errorElement : <PageNotFound />
  },
  {
    path : '/SignUp',
    element : <SignUp />,
    errorElement : <PageNotFound />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

// // for installing router
// npm install react-router-dom