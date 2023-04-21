import React from 'react'
import { Link,NavLink,Route,Routes } from 'react-router-dom'
import { Homepage } from './Homepage'
import { LoginPage } from './LoginPage'
import { About } from './About'
import { Easteegg } from './Easteegg'
import Logito from '../assets/Img/Logito.png'

export const NavComponent = () => {
  return (
    <div>
        <div className='Nav'>
            <img src={Logito}/>
            {/* <NavLink className={(args) => `${args.isActive ? 'active' : 'Links'}`} to="/"
            >Home
            </NavLink> */}
            <br/>
            <Link to="/" className='Links'>Home</Link><br/>
            <Link to="/Login" className='Links'>Login</Link><br/>
            <Link to="/About" className='Links'>About</Link><br/>
            <Link to="/egg" className='Links'>EasterEgg</Link>
        </div>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/Login' element={<LoginPage/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/egg' element={<Easteegg/>} />
        </Routes>
    </div>
  )
}
