import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const CategoryForm = () => {
    const [name, setName] = useState("");
    const { user } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/categories", { name }, {
                headers: { Authorization: "Bearer " + user.token }
            });
            setName("");
            alert("Kategori Eklendi!");
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-small">
            <h4>Yeni Kategori</h4>
            <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="Kategori Adi" />
            <button type="submit">Ekle</button>
        </form>
    );
};
export default CategoryForm;
