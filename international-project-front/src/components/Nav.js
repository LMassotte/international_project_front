import React from 'react'
import '../assets/Nav.css'
import Hamburger from './Hamburger'

export default function Nav() {
  return (
    <div>
        <div className="navigation">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
            <div className="hamburger">
                <Hamburger />
            </div>
        </div>
    </div>
  )
}
