// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectedRoute from './security/ProtectRoute';
import Snippets from './components/Snippets';
import Myposts from './components/Myposts';
import AppLayout from './components/layouts/AppLayout';


const App = () => {
  return (
    <>
      <Routes>
        {/* Use AppLayout for routes that need the navbar */}
        <Route element={<AppLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="*" element={<Home />} />
            <Route path="/snippets" element={<Snippets />} />
            <Route path="/myposts" element={<Myposts />} />
          </Route>
        </Route>

        {/* Routes without navbar (like authentication pages) */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
