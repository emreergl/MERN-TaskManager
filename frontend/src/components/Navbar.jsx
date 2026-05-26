import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <h2><Link to="/">Task Manager</Link></h2>
            <ul>
                {user ? (
                    <>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><button onClick={logout}>Cikis</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Giris</Link></li>
                        <li><Link to="/register">Kayit</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};
export default Navbar;
