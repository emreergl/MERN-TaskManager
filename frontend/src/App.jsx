import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { AuthContext } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) return <div>Yukleniyor...</div>;
    return user ? children : <Navigate to="/login" />;
};

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <main className="main-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/dashboard" element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        } />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
