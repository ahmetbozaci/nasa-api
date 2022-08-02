import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import {
  Details, Search, Show, Header,
} from './components/Index';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
