import React from "react";
import './nav.css'
import List from './list'

const Navbar = ()=>{
    return(
        <>
            <div className="container-nav">
                <div className="nav-left">
                    <img src="src\component\download-removebg-preview.png" alt="logo" />
                </div>
                <div className="nav-right">
                    <ul className="ul">
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>WATCH MOVIES</li>
                        <li>CONTACT US</li>
                        <li>SIGN UP</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar;