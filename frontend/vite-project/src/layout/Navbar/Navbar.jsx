import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
  return (
<>
<nav>
    <div className="NavbarHeader">
        <div className="NavbarIcons">
            <ul>
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-square-odnoklassniki"></i></li>
                <li><i class="fa-brands fa-linkedin"></i></li>
            </ul>
        </div>
        <div className="NavbarContact">
        <i class="fa-solid fa-bars"></i>

            <ul>
                <li><i class="fa-solid fa-phone"></i> <span>+994(050)-354-17-05</span></li>
                <li><i class="fa-solid fa-envelope"></i><span>shop@yourdomain.com</span>
                </li>
            </ul>
        </div>
    </div>
    <div className="NavbarFooter">
        <div className="NavbarLogo">
            <span>Selling</span><span>.</span>
        </div>
        <div className="NavbarList" style={{}} >
            <ul style={{display:"flex", gap:"20px", textDecoration:'none'}}>
                <li style={{listStyle:'none', color:'black'}}><NavLink to={'/admin'} >AddPage</NavLink></li>
                <li style={{listStyle:'none'}}><NavLink to={'/Home'} >Home</NavLink></li>
                <li style={{listStyle:'none'}}><NavLink to={'/Basket'} >Basket</NavLink></li>
                <li style={{listStyle:'none'}}><NavLink to={'/wishlist'} >Wishlist</NavLink></li>
            </ul>
        </div>
    </div>
</nav>
</>
  )
}

export default Navbar
