import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <button onClick={signInWithGoogle}>Log in with Google</button>
            <br/>
            <Link to="/register"> New User?Go for Register</Link>
        </div>
    );
};

export default Login;