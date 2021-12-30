import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import api from "./api";

function Home() {
    const [menus,setmenus] = useState(null);
    const [items,setitems] = useState(null);

    const fetchMenus =()=> {
        api.getAllMenus().then(res => {
            const result = res.data;
            setmenus(result.Menus);
         });
    }

    const fetchItems =()=> {
        api.getAllItems().then(res => {
            const result_items = res.data;
            setitems(result_items.Items);
         });
    }

    useEffect(() => {
        fetchMenus();
        fetchItems();
    }, []);

    const renderMenus = () => {
        if(!menus) {
            return (
                <tr>
                    <td> Loading....</td>
                </tr>
            )
        }
        if(menus == 0) {
            return (
                <tr>
                    <h4> There is no menu yet</h4>
                </tr>
            )
        }
        return menus.map((menu)=>
        <tr key={menu.id}>
            <td>{menu.id}</td>
            <td>{menu.name}</td>
            <td>{menu.description}</td>
            <td></td>
            <td>
                <Link className="btn btn-warning" to={`/edit/${menu.id}`}>Edit</Link>
                <button type="button" className="btn btn-danger"
                onClick={()=>{
                    api.deleteMenu(menu.id)
                    .then( fetchMenus())
                    .catch(err=> {
                        alert("Failed to delete the menu with id"+menu.id);
                    });
                }}>
                    Delete
                </button>
            </td>
        </tr>
        )
    }

    const renderItems = () => {
        if(!items) {
            return (
                <tr>
                    <td> Loading....</td>
                </tr>
            )
        }
        if(items == 0) {
            return (
                <tr>
                    <h4> There is no item yet</h4>
                </tr>
            )
        }
        return items.map((item)=>
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>
                <Link className="btn btn-warning" to={`/edit/item/${item.id}`}>Edit</Link>
                <button type="button" className="btn btn-danger"
                onClick={()=>{
                    api.deleteItem(item.id)
                    .then( fetchItems())
                    .catch(err=> {
                        alert("Failed to delete the menu with id"+item.id);
                    });
                }}>
                    Delete
                </button>
            </td>
        </tr>
        )
    }
        return(
            <div className="container">
                <div className="card">
                <div className="card-header">
                    Manage Menus
                </div>
                <div className="card-body">
                    <h5 className="card-title">Butler Menu App</h5>
                    <p className="card-text">Manage your menus with Butler App</p>
                    <Link to="/add" className="btn btn-primary">ADD NEW MENU</Link>
                    <Link to="/additem" className="btn btn-primary">ADD NEW ITEM</Link>
                    <table className="table table-hover">
                    <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <h3>Menus</h3>
                    {renderMenus()}
                    <h3>Items</h3>
                    {renderItems()}

                </tbody>
                    </table>
                </div>
                </div>
                </div>
        )
    }

export default Home;