import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Navigate() {
  return (
    <>
    <nav className="navbar fixed-top nav nav-tabs bg-light">
      <div className="container-fluid">
            <Link to="/" >Home</Link>
            <Link to="/About" >About</Link>
            <Link to="/Contact" >Contact</Link> 
      </div>
    </nav>
    <Outlet/>
    </>
  );
}
