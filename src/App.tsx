import 'bootstrap/dist/css/bootstrap.min.css';

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ErrorPage from './ErrorPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import React from 'react';
import RegisterPage from './RegisterPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<PrivateRoute />} />
        <Route path="/home" element={<HomePage />} />
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
};

const PrivateRoute: React.FC = () => {
  const isAuthenticated = false; 

  if (!isAuthenticated) {
   
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This page requires authentication to access.</p>
      <HomePage />
    </div>
  );
};

export default App;
