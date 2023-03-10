import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../_assets/logo.png'
import './Logo.css'


const Logo = () =>{
  return(
    <>
    <img className='logo' src={logo} alt='logo'/>
    </>
  )
}


export default Logo