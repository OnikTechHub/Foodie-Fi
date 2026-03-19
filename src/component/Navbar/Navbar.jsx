import React from 'react';
import navImg from "../../assets/Foodie-fi.png"

const Navbar = () => {
    return (

        <div className='nav-container'>
            <div className='nav-left'>
                <img src={navImg} alt="" />
                <p>Foodei FI</p>
            </div>

            <div className='nav-right'>
                <p>Home</p>
                <p>About</p>
                <p>All Food</p>
                <p>Cart</p>
                <p>Blogs</p>
            </div>
        </div>
    );
};

export default Navbar;