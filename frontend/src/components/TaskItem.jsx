import React, { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const TaskItem = ({ task }) => {
    const { user } = useContext(AuthContext);

    const handleDelete = async () => {
        if (!window.confirm('Silmek istediginize emin misiniz?')) return;
        try {
            await axios.delete(http://localhost:5000/api/tasks/, {
                headers: { Authorization: Bearer  }
            });
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };

    const handleStatusChange = async (e) => {
        try {
            await axios.put(http://localhost:5000/api/tasks/, { status: e.target.value }, {
                headers: { Authorization: Bearer  }
            });
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className={	ask-card }>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <small>Kategori: {task.category?.name}</small>
            <div className="task-actions">
                <select value={task.status} onChange={handleStatusChange}>
                    <option value="todo">Yapilacak</option>
                    <option value="doing">Yapiliyor</option>
                    <option value="done">Tamamlandi</option>
                </select>
                <button onClick={handleDelete} className="btn-danger">Sil</button>
            </div>
        </div>
    );
};
export default TaskItem;
