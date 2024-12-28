import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigate from './Navigate';
import Hello from './Hello'
import Fashion from './Fashion';
import Movies from './Movies';
import Technology from './Technology';
import Travel from './Travel';
import Photography from './Photography';
import Contact from './Contact';


export default function Home() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Navigate/>}>
            <Route path='/' index element ={<Hello/>}/>
            <Route path='/Fashion' element={<Fashion/>}/>
            <Route path='/Movies' element={<Movies/>}/>
            <Route path='/Technology' element={<Technology/>}/>
            <Route path='/Travel' element={<Travel/>}/>
            <Route path='/Photography' element={<Photography/>}/>
            <Route path='/Contact' element={<Contact/>}/>
          </Route>
       </Routes>

    </BrowserRouter>
  );
}