import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Search from './components/Search';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Search />} />
    </Routes>
  </BrowserRouter>

);

export default App;
