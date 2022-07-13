/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Details from './components/Details';
import Search from './components/Search';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </BrowserRouter>

);

export default App;
