import React from 'react'
import Expence from './component/Expence'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Edit from './component/Edit';


const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Expence/>}/>
    <Route path='/edit/:id' element={<Edit/>}/>
    
    </Routes>
    </BrowserRouter>
    
    
  )
}

export default App;
