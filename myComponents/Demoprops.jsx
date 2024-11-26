import React from 'react';
import './CSS/Demoprops.css';
export default function Demoprops(props) {
  return (
    <>
    <div className='user'>
    <h1>User Information</h1>
    <h3>Name : {props.name}</h3>
    <h3>JOB : {props.job}</h3>
    <h3>Salary : {props.salary}</h3>
    </div>
    </>
  );
}
