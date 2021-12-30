import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import api from "../api";
import { useNavigate } from 'react-router-dom';

function edititem() {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState('');

    const navigate = useNavigate();

    const oneditSubmit = async () => {
        setLoading(true);
        try {
            await api.updateItem({
                title,description,price
            },id)
            navigate('/home');
        }catch {
            alert ('Failed to edit menu');
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        api.getOneItem(id).then(res =>{
            const data = res.data;
            const item = data.items;           
            settitle(item.name);
            setdescription(item.description);
            setprice(item.description);

        })
    },[]);

    return (
        <div className="container">
        <div className="card">
        <div className="card-header">
            Edit Item
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
                <input className="form-control" type="text" name="description" value={price} onChange={e => setprice(e.target.value)}></input>
            </div>
            <div className="form-group">
                <button type="button" className="btn btn-success" onClick={oneditSubmit} disabled={loading}>Edit</button>
             </div>
        </form>
        </div>
        </div>
        </div>
    )
}

export default edititem;