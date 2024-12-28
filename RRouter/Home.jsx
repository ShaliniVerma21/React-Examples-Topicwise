import React from 'react';
import About from './About';
import Contact from './Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigate from './Navigate';
const Home = () => {
    return (
        <>
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Home Page!</p>
        </div>

<BrowserRouter>
       <Routes>
          <Route path='/' element={<Navigate/>}>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
          </Route>
       </Routes>

    </BrowserRouter>
        </>
       


    );
};

export default Home;