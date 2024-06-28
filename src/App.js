import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/home/Home';
import Companies from './components/companies/Companies';
import Report from './components/placementData/data';
import Form from './components/placementForm/form';
import MedainPlacements from './components/medainPlacements/MedainPlacements';
import Login from './components/login/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const router = createBrowserRouter([
    {
      path: '',
      element: isAuthenticated ? <RootLayout /> : <Navigate to="/login" />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'companies',
          element: <Companies />,
        },
        {
          path: 'placementData',
          element: <Report />,
        },
        {
          path: 'placementForm',
          element: <Form />,
        },
        {
          path: 'medainPlacements',
          element: <MedainPlacements />,
        },
      ],
    },
    {
      path: 'login',
      element: <Login onLogin={handleLogin} />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
