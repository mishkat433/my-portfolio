import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import MainLayout from './Layout/MainLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';
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

      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
