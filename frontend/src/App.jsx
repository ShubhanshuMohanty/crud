// import { useState } from 'react';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route path="/all" element={<Read />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
      {/* <NavBar/> */}
    </>
  )
}

export default App
