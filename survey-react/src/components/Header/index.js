import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Logo'
import CurrentLoc from '../CurrentLoc'
import './Header.css'

const Header = ({location}) =>{
  return(
    <div className='container' >
    <Logo />
    <h1 className='header'>Survey Tool</h1>
    <CurrentLoc location={location} />

    </div>
  )
}


export default Header



