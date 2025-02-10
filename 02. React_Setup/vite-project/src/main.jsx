import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import Form from './Components/11. WorkingOn_Form/Form';
import UseTailwindCSS from './Components/13. UseTailwindCSS/UseTailwindCSS';
import Home from './Components/13. UseTailwindCSS/Home';
import Support from './Components/13. UseTailwindCSS/Support';
import Contact from './Components/13. UseTailwindCSS/Contact';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './Components/13. UseTailwindCSS/About';
import SignIn from './Components/13. UseTailwindCSS/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UseTailwindCSS />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/support",
        element: <Support />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/signIn",
        element: <SignIn />
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <RouterProvider router={router}/>
    </>
  </StrictMode>,
)
