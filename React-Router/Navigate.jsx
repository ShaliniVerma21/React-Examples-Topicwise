import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Navigate() {
  return (
    <>
    <nav className="navbar fixed-top nav nav-tabs bg-light">
      <div className="container-fluid">
            <Link to="/" >Home</Link>
            <Link to="/Fashion" >Fashion</Link>
            <Link to="/Movies" >Movies</Link>
            <Link to="/Technology" >Technology</Link>
            <Link to="/Travel" >Travel</Link>
            <Link to="/Photography" >Photography</Link>
            <Link to="/Contact" >Contact</Link> 
      </div>
    </nav>
    <Outlet/>
    </>
  );
}
