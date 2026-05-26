import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import TaskItem from './TaskItem';
import Spinner from './Spinner';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/tasks', {
                    headers: { Authorization: Bearer  }
                });
                setTasks(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchTasks();
    }, [user.token]);

    if (loading) return <Spinner />;

    return (
        <div className="task-list">
            <h3>Gorevleriniz</h3>
            {tasks.length === 0 ? <p>Gorev bulunamadi. Yeni ekleyin.</p> : (
                <div className="tasks-grid">
                    {tasks.map(task => (
                        <TaskItem key={task._id} task={task} />
                    ))}
                </div>
            )}
        </div>
    );
};
export default TaskList;
