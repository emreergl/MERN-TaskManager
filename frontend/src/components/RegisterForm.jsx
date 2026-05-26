import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(username, email, password);
            navigate('/dashboard');
        } catch (err) {
            setError('Kayit basarisiz. Bilgileri kontrol edin.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            {error && <p className="error">{error}</p>}
            <input type="text" placeholder="Kullanici Adi" value={username} onChange={e => setUsername(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="Sifre" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Kayit Ol</button>
        </form>
    );
};
export default RegisterForm;
