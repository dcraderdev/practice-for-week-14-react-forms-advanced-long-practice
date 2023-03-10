import {useEffect, useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import Preferences from '../Preferences'
import './NavBar.css'

const NavBar = () =>{
  return(
    <nav className='nav'>
    <NavLink to="/">
      <button className='button'>Sample Survery</button> 
    </NavLink>

    <NavLink to="/">
      <button className='button'>Sensory Preferences Survery</button> 
    </NavLink>

    <NavLink to="/">
      <button className='button'>Report</button> 
    </NavLink>

    <NavLink to="/">
      <button className='button'>Home</button> 
    </NavLink>
    </nav>
  )
}


export default NavBar 
  //  <Survery/>
  //   <Preferences/>
  //   <Report/>
  //   <Home/>