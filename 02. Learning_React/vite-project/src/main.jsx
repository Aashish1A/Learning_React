import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import Form from './Components/11. WorkingOn_Form/Form';
import UseTailwindCSS from './Components/13. UseTailwindCSS/UseTailwindCSS';
import Home from './Components/13. UseTailwindCSS/Home';
import Support from './Components/13. UseTailwindCSS/Support';
// import Contact from './Components/13. UseTailwindCSS/Contact';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import About from './Components/13. UseTailwindCSS/About';
import SignIn from './Components/13. UseTailwindCSS/SignIn';
import ClassComponent from "./Components/17. Class_Components/ClassComponent.jsx"
import Countries_API from './Components/20. Countries_API/Countries_API.jsx';
import Image from "./Components/03. Use_Images/Images.jsx";
import Revision from './Components/18. Revising_Concept/Revision.jsx';

const About = lazy(() => wait(1000).then(() => import('./Components/13. UseTailwindCSS/About')));
const Contact = lazy(() => wait(1000).then(() => import('./Components/13. UseTailwindCSS/Contact')));


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <UseTailwindCSS />,
//     children: [
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/support",
//         element: <Support />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//       {
//         path: "/signIn",
//         element: <SignIn />
//       },
//     ]
//   },
// ]);

// const wait = (time) => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve();
//     },time)
//   })
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      {/* <RouterProvider router={router} /> */}
      {/* <ClassComponent /> */}
      <Revision />
    </>
  </StrictMode>,
)
