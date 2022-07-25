import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import { Header } from "./cmps/header.jsx"
import { routes } from './routes';


export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {routes.map(route => <Route key={route.path} exact element={<route.component />} path={route.path} />)}
      </Routes>
    </Router>
  );
}

