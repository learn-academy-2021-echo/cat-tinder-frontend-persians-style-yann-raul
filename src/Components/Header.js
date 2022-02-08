import React, { Component } from 'react'
import { Router, NavLink } from 'react-router-dom'
import '../App.css'
import mycat2 from '../Assets/mycat2.png'



class Header extends Component {
  render() {
    return (
      <header>
        
        <NavLink to="/">

        

         
        </NavLink>

        <div className="nav-links">
        <img src={mycat2} alt="logo for Cat Tinder" className="cat-logo2"/>
        

        <ul>
          <NavLink to="">Home</NavLink>
          </ul>
          
          <ul>
            <NavLink to="/catindex">Meet the Cats</NavLink>
          </ul>
          <ul>
            <NavLink to="/catnew">Add a Cat</NavLink>
          </ul>
          <ul>
            <a target="blank"href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter" id="aspca">Adopt a Cat!</a>
          </ul>

          
        </div>
      </header>
    )
  }
}
export default Header

