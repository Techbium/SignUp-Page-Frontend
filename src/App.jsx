import { useEffect } from 'react';
import Signup from "./Signup";
import Login from "./Login"
import Home from './Home';
// import { useNavigate } from "react-router-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Buttons from './button';

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Buttons></Buttons>}></Route>
      <Route path='/register' element={<Signup/>}> </Route>
      <Route path='/login' element={<Login/>}> </Route>
      <Route path='/home'element={<Home/>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
