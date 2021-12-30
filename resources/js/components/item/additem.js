import React, {useEffect, useState} from "react";
import api from "../api";
import { useNavigate } from 'react-router-dom';

function additem() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState('');

    const onAddSubmit = async () => {
        setLoading(true);
        try {
            await api.addItem({
                title,description,price
            })
            navigate('/home');
        }catch {
            alert ('Failed to add item');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
        <div className="card">
        <div className="card-header">
            Add new Item
        </div>
        <div className="card-body">
        <form>
            <div className="form-group">
                <label>Name</label>
                <input className="form-control" type="text" name="title" value={title} onChange={e => settitle(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Description</label>
                <input className="form-control" type="text" name="description" value={description} onChange={e => setdescription(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Price</label>
                <input className="form-control" type="text" name="price" value={price} onChange={e => setprice(e.target.value)}></input>
            </div>
            <div className="form-group">
                <button type="button" className="btn btn-success" onClick={onAddSubmit} disabled={loading}>Add</button>
            </div>
        </form>
        </div>
        </div>
        </div>
    )
}

export default additem;