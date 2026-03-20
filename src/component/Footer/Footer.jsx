import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2 className="footer-logo">Foodie <span>FI</span></h2>
                    <p>
                        Providing the best quality food with fresh ingredients. 
                        Your satisfaction is our main priority.
                    </p>
                </div>

                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">All Foods</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: support@foodiefi.com</p>
                    <p>Location: Chattogram, Bangladesh</p>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Foodie FI | Designed by Onik</p>
            </div>
        </footer>
    );
};

export default Footer;