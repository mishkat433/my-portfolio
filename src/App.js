import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import MainLayout from './Layout/MainLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast';
import Blog from './components/Blog/Blog';
import Contact from './components/Home/Contact/Contact';
import About from './components/Home/About/About';
import Projects from './components/Home/projects/Projects';
import ProjectDetails from './components/Home/ProjectDetails/ProjectDetails';


const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 300,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh()
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      // errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/project",
          element: <Projects />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/blog",
          element: <Blog />
        },
        {
          path: "/details/:id",
          element: <ProjectDetails />
        }
      ]
    }
  ])
  return (
    <div>
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
