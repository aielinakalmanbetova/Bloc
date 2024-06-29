import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Home from './containers/Home/Home';
import About from './components/About/About';
import Add from './components/Add/Add';
import Contacts from './components/Contacts/Contacts';
import {Route, Routes} from 'react-router-dom';
import './containers/Home/Home.css';

const App = () => {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <Routes>
        <Route path='/' element={( <Home /> )} />
        <Route path='/Add' element={( <Add /> )} />
        <Route path='/About' element={( <About /> )} />
        <Route path='/Contacts' element={( <Contacts /> )} />
      </Routes>
    </>
  );
};
export default App;
