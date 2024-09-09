import React from "react";
import './nav.css'

const Navbar = ()=>{
    return(
        <>
            <div className="container">
                <div className="nav-left">
                    <img src="src\component\download-removebg-preview.png" alt="logo" />
                </div>
                <div className="nav-right">
                    <ul>
                        <li>HOME</li>
                        <li className="aboutul" >ABOUT
                            <ul className="childul" >
                                <li>About me</li>
                                <li>About us</li>
                            </ul>
                        </li>
                        <li>PRODUCT</li>
                        <li>CONTACT US</li>
                        <li>SIGN UP</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar;