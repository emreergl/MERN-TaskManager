import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            setError('Giris basarisiz. Bilgileri kontrol edin.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            {error && <p className="error">{error}</p>}
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="Sifre" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Giris Yap</button>
        </form>
    );
};
export default LoginForm;
