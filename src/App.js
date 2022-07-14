import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Details from './components/Details';
import Search from './components/Search';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Show from './components/Show';
import Header from './components/Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/show" element={<Show />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </BrowserRouter>

);

export default App;
