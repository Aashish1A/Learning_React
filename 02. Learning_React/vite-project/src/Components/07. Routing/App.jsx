import React from "react";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ContactInfo from "./Components/ContactInfo";
import ContactForm from "./Components/ContactForm";
import NotFound from "./Components/NotFound";
import JobsLayout from "./layout/JobsLayout";
import Jobs, { jobsLoader } from "./pages/Jobs";
import JobDetails, { jobDetailsLoader } from "./Components/JobDetails";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
            <Route path="info" element={<ContactInfo />} />
            <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="jobs" element={<JobsLayout />}> 
            <Route index element={<Jobs />} loader={jobsLoader} />
            <Route path=':id' element={<JobDetails />} loader={jobDetailsLoader} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
