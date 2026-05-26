import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import CategoryForm from '../components/CategoryForm';

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h2>Merhaba, {user?.username}</h2>
                <button onClick={logout} className="btn-danger">Cikis Yap</button>
            </header>
            
            <div className="dashboard-content">
                <div className="sidebar">
                    <CategoryForm />
                    <hr />
                    <TaskForm />
                </div>
                <div className="main-content">
                    <TaskList />
                </div>
            </div>
        </div>
    );
};
export default Dashboard;
