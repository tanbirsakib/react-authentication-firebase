import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h3>Please Register</h3>
            <input type="email"></input>
            <br/>
            <input  type="password"></input>
            <br/>
            <input  type="submit" value="submit"></input>
            <br />
            <Link to="/login">Already Registered? </Link>
        </div>
    );
};

export default Register;