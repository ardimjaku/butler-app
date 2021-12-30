import React, {useEffect, useState} from "react";
import api from "./api";
import { useNavigate } from 'react-router-dom';
import Select from './select';


function add() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const onAddSubmit = async () => {
        setLoading(true);
        try {
            await api.addMenu({
                title,description
            })
            navigate('/home');
        }catch {
            alert ('Failed to add menu');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
        <div className="card">
        <div className="card-header">
            Add new menu
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
            <div>
                <Select />
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

export default add;