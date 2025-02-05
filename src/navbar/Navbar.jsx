import { useState } from "react";
import "./Navbar.css"; // Import CSS file
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu } from 'lucide-react';
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        {/* <Heart className="icon" /> */}
                        <img src="/logok.png" alt="President" className="icon" style={{width:"70px",height:"80px"}} />
                        <span>Khandelwal Hospital</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="nav-links">
                    <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
                    {/* <Link to="/departments" className={isActive('/departments') ? 'active' : ''}>Departments</Link> */}
                    <Link to="/doctors" className={isActive('/doctors') ? 'active' : ''}>Doctors</Link>
                    <Link to="/facilities" className={isActive('/facilities') ? 'active' : ''}>Facilities</Link>
                    <Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link>
                    <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
                    <Menu className="menu-icon" />
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="mobile-nav">
                    <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
                    {/* <Link to="/departments" className={isActive('/departments') ? 'active' : ''}>Departments</Link> */}
                    <Link to="/doctors" className={isActive('/doctors') ? 'active' : ''}>Doctors</Link>
                    <Link to="/facilities" className={isActive('/facilities') ? 'active' : ''}>Facilities</Link>
                    <Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link>
                    <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
