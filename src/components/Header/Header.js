import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';
const Header = () => {
    const {user, logOut} = useFirebase();
    console.log("user logged in from header", user)
    return (
        <div className="mb-2">
            <h1>Welcome to Auth Hub</h1> 
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/shipping">Shipping</Link>
            <h3>{user.displayName}</h3>
            {user?.displayName && <button onClick={logOut}>Log Out</button>}
        </div>
    );
};

export default Header;