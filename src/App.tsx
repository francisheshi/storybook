import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menus from './views/menu';
import ButtonComponent from './views/pages/Button';
import Title2 from './views/pages/title-2';

import './App.css';

const App = () => {

  return (
    <div className='App'>
      <Router>
        <Menus />
        
        <Routes>
          <Route path='/pages/button' element={<ButtonComponent />} />
          <Route path='/pages/page-2' element={<Title2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;