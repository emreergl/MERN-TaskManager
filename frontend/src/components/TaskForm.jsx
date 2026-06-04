import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const TaskForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [categories, setCategories] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await axios.get("http://localhost:5000/api/categories", {
                headers: { Authorization: "Bearer " + user.token }
            });
            setCategories(res.data);
            if (res.data.length > 0) setCategoryId(res.data[0]._id);
        };
        fetchCategories();
    }, [user.token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!categoryId) return alert("Lutfen kategori secin veya olusturun");
        try {
            await axios.post("http://localhost:5000/api/tasks", { title, description, category: categoryId }, {
                headers: { Authorization: "Bearer " + user.token }
            });
            setTitle("");
            setDescription("");
            alert("Gorev Eklendi!");
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-small">
            <h4>Yeni Gorev</h4>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} required placeholder="Baslik" />
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Aciklama" />
            <select value={categoryId} onChange={e => setCategoryId(e.target.value)}>
                {categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
            </select>
            <button type="submit">Ekle</button>
        </form>
    );
};
export default TaskForm;
