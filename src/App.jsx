import { useState } from 'react';
import {Router,Routes,Route,BrowserRouter } from 'react-router-dom'
import  {Menu} from './Pages/Menu';
import Landing from './Landing';
import MainLanding from './Pages/MainLanding';
function App() {

  return (
    <div className="relative w-screen h-screen overflow-hidden">
           <BrowserRouter>
              <Routes>  
              <Route path='/' element={<Landing/>}/>
              <Route path='/mainLanding' element={<MainLanding/>}/>
              <Route path='/menu' element={<Menu/>}/>
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
