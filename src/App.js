import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Form from './pages/FormSales';
import Sales from './pages/Sales';
import Error from './pages/Error';

import './App.css';

function App() {

  const [isLogin, setIsLogin] = useState(localStorage.userName !== "");

  const logIn = (userName, userEmail) => {
    localStorage.setItem("userName", userName);
    localStorage.setItem("userEmail", userEmail);
    setIsLogin(true);
  };

  const logOut = () => {
    setIsLogin(false);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: isLogin ? <Home logout={logOut} /> : <LoginPage logIn={logIn} />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Form />
        },
        {
          path: "/sales",
          element: <Sales />
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
