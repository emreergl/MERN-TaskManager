import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Gorev Yonetim Uygulamasina Hosgeldiniz</h1>
            <p>Lutfen giris yapin veya kayit olun.</p>
            <div className="home-links">
                <Link to="/login" className="btn">Giris Yap</Link>
                <Link to="/register" className="btn btn-secondary">Kayit Ol</Link>
            </div>
        </div>
    );
};
export default Home;
